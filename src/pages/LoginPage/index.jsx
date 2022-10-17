import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.jpg';
import components from '../../components';
import UsersAPI from '../../api/usersAPI';
import { saveItem } from '../../helpers/localStorageManager';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
  LoginInputsContainer,
  LoginButtonsContainer,
} from './loginStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const usersAPI = new UsersAPI(apiURL, 15000);

function LoginPage() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [feedbackMessage, setFeedbackMessage] = useState({ message: 'Teste', error: false });

  const {
    Input,
    Title,
    Paragraph,
    Button,
  } = components;

  const handleInputChange = ({ target: { value, name } }) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const onRegisterButtonClick = () => {
    navigate('/register');
  };

  const onLoginButtonClick = async () => {
    const result = await usersAPI.login(loginInfo);

    if ('error' in result) {
      setFeedbackMessage({ message: result.message, error: result.error });

      setTimeout(() => {
        setFeedbackMessage({ message: '', error: false });
      }, 3000);
    } else {
      saveItem(result.token, 'token');
      navigate('/games');
    }
  };

  const getFeedbackMessage = () => {
    if (feedbackMessage.error) {
      return (
        <Paragraph
          testId="feedback-login"
          textAlign="center"
          fontSize="2vw"
          margin="2rem 0"
          fontColor="red"
        >
          { feedbackMessage.message }
        </Paragraph>
      );
    }

    return null;
  };

  return (
    <LoginMainSection>
      <LoginLogoContainer>
        <LoginLogo
          src={Logo}
          alt="Logo da aplicação"
          data-testid="login-logo"
        />
      </LoginLogoContainer>
      <LoginFormSection>
        <Title
          textAlign="center"
        >
          Bem vindo ao Games Library!
        </Title>
        <Paragraph
          testId="login-paragraph"
          textAlign="center"
          margin="1rem 0"
        >
          Por favor, faça login ou registre-se!
        </Paragraph>
        <LoginInputsContainer>
          <Input
            testId="email-input-login"
            margin="2rem 0"
            mobileMargin="1rem 0"
            width="100%"
            placeholder="Digite seu email"
            onChange={handleInputChange}
            name="email"
            value={loginInfo.email}
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
            mobileMargin="1rem 0"
            width="100%"
            placeholder="Digite sua senha"
            onChange={handleInputChange}
            name="password"
            type="password"
            value={loginInfo.password}
          />
        </LoginInputsContainer>
        <LoginButtonsContainer>
          <Button
            width="45%"
            borderRadius="8px"
            hoverCursor="pointer"
            hoverTransform="scale(1.1, 1.1)"
            transition="0.2s"
            onClick={onLoginButtonClick}
          >
            Logar
          </Button>
          <Button
            width="45%"
            borderRadius="8px"
            hoverCursor="pointer"
            hoverTransform="scale(1.1, 1.1)"
            transition="0.2s"
            onClick={onRegisterButtonClick}
          >
            Registre-se
          </Button>
        </LoginButtonsContainer>
        { getFeedbackMessage() }
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
