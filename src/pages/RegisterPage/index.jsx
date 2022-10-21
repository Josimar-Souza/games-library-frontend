import React, { useState } from 'react';
import RegisterMainSection from './registerPageStyles';
import components from '../../components';
import { validationObject } from '../../validations/registrationValidation';
import UsersAPI from '../../api/usersAPI';

const apiUrl = process.env.REACT_APP_API_URL;
export const usersAPI = new UsersAPI(apiUrl, 15000);

function RegisterPage() {
  const {
    Title,
    Input,
    Button,
    Paragraph,
  } = components;

  const [feedbackMessage, setFeedbackMessage] = useState({ message: '', show: false });

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
      setFeedbackMessage({ message: result.message, show: result.error });
    } else {
      setFeedbackMessage({ message: result.message, show: true });
    }

    setTimeout(() => {
      setFeedbackMessage({ message: '', show: false });
    }, 3000);
  };

  const getFeedbackMessage = () => {
    if (feedbackMessage.show) {
      return (
        <Paragraph
          fontColor="red"
          testId="register-feedback-message"
        >
          { feedbackMessage.message }
        </Paragraph>
      );
    }

    return null;
  };

  return (
    <RegisterMainSection>
      <Title
        fontColor="white"
        textAlign="center"
        margin="10px 0"
      >
        Registre-se
      </Title>
      <Input
        placeholder="Digite seu username"
        width="30%"
        borderRadius="15px"
        name="username"
        margin="10px 0"
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
        padding="10px"
        value={passwordConfirmation.value}
        onChange={handleInputChange}
        border={`1px solid ${passwordConfirmation.validationColor}`}
        boxShadow={`0 0 10px ${passwordConfirmation.validationColor}`}
      />
      <Button
        width="15%"
        margin="10px 0"
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
