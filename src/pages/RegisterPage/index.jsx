import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import RegisterMainSection from './registerPageStyles';
import components from '../../components';
import { validationObject } from '../../validations/registrationValidation';
import UsersAPI from '../../api/usersAPI';

const apiUrl = process.env.REACT_APP_API_URL;
export const usersAPI = new UsersAPI(apiUrl, 15000);

function RegisterPage() {
  const navigate = useNavigate();

  const {
    Title,
    Input,
    Button,
    Paragraph,
    BackButton,
  } = components;

  const [feedbackMessage, setFeedbackMessage] = useState({ message: '', show: false, color: 'green' });

  const [registerInfo, setRegisterInfo] = useState({
    username: {
      value: '',
      validationColor: '',
    },
    email: {
      value: '',
      validationColor: '',
    },
    password: {
      value: '',
      validationColor: '',
    },

    passwordConfirmation: {
      value: '',
      validationColor: '',
    },
  });

  const {
    username,
    email,
    password,
    passwordConfirmation,
  } = registerInfo;

  const handleInputChange = ({ target: { name, value } }) => {
    let validationColor;

    if (name === 'passwordConfirmation') {
      const passwords = [password.value, value];
      validationColor = validationObject[name](passwords);
    } else {
      validationColor = validationObject[name](value);
    }

    setRegisterInfo({ ...registerInfo, [name]: { value, validationColor } });
  };

  const onRegisterButtonClick = async () => {
    const registerValues = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const result = await usersAPI.register(registerValues);

    if ('error' in result) {
      setFeedbackMessage({ message: result.message, show: result.error, color: 'red' });
    } else {
      setFeedbackMessage({ message: result.message, show: true, color: 'green' });
      setTimeout(() => {
        navigate('/games');
      }, 3000);
    }

    setTimeout(() => {
      setFeedbackMessage({ message: '', show: false, color: 'green' });
    }, 3000);
  };

  const getFeedbackMessage = () => {
    if (feedbackMessage.show) {
      return (
        <Paragraph
          fontColor={feedbackMessage.color}
          testId="register-feedback-message"
          textAlign="center"
          fontSize="2vw"
          margin="10px 0"
          momobileMargin="10px 0"
        >
          { feedbackMessage.message }
        </Paragraph>
      );
    }

    return null;
  };

  const getBackArrow = () => {
    if (isMobile) {
      return (
        <BackButton
          backRoute="/"
          position="fixed"
          width="20%"
          top="20px"
          left="20px"
          border="none"
          borderRadius="15px"
          padding="5px"
          arrowSize="50%"
        />
      );
    }

    return null;
  };

  return (
    <RegisterMainSection>
      { getBackArrow() }
      <Title
        fontColor="white"
        textAlign="center"
        margin="10px 0"
        mobileMargin="10px 0"
      >
        Registre-se
      </Title>
      <Input
        placeholder="Digite seu username"
        width="30%"
        borderRadius="15px"
        name="username"
        margin="10px 0"
        mobileMargin="10px 0"
        padding="10px"
        value={username.value}
        onChange={handleInputChange}
        border={`1px solid ${username.validationColor}`}
        boxShadow={`0 0 10px ${username.validationColor}`}
      />
      <Input
        placeholder="Digite seu email"
        width="30%"
        borderRadius="15px"
        name="email"
        type="email"
        margin="10px 0"
        mobileMargin="10px 0"
        padding="10px"
        value={email.value}
        onChange={handleInputChange}
        border={`1px solid ${email.validationColor}`}
        boxShadow={`0 0 10px ${email.validationColor}`}
      />
      <Input
        placeholder="Digite sua senha"
        width="30%"
        borderRadius="15px"
        name="password"
        type="password"
        margin="10px 0"
        mobileMargin="10px 0"
        padding="10px"
        value={password.value}
        onChange={handleInputChange}
        border={`1px solid ${password.validationColor}`}
        boxShadow={`0 0 10px ${password.validationColor}`}
      />
      <Input
        placeholder="Confirme sua senha"
        width="30%"
        borderRadius="15px"
        name="passwordConfirmation"
        type="password"
        margin="10px 0"
        mobileMargin="10px 0"
        padding="10px"
        value={passwordConfirmation.value}
        onChange={handleInputChange}
        border={`1px solid ${passwordConfirmation.validationColor}`}
        boxShadow={`0 0 10px ${passwordConfirmation.validationColor}`}
      />
      <Button
        width="15%"
        margin="10px 0"
        mobileMargin="10px 0"
        borderRadius="15px"
        hoverCursor="pointer"
        hoverTransform="scale(1.1, 1.1)"
        transition="0.2s"
        onClick={onRegisterButtonClick}
      >
        Registrar
      </Button>
      { getFeedbackMessage() }
    </RegisterMainSection>
  );
}

export default RegisterPage;
