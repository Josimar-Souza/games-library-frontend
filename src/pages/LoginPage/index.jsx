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
  LoginFormInfo,
  CreditsLink,
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
    <LoginMainSection
      data-testid="login-background"
    >
      <LoginLogoContainer>
        <LoginLogo
          src={Logo}
          alt="Logo da aplicação"
          data-testid="login-logo"
        />
      </LoginLogoContainer>
      <LoginFormSection>
        <LoginFormInfo>
          <Title
            textAlign="center"
            fontColor="white"
            mobileFontSize="8vw"
          >
            Bem vindo ao Games Library!
          </Title>
          <Paragraph
            testId="login-paragraph"
            textAlign="center"
            margin="1rem 0"
            fontColor="white"
            mobileFontSize="4.8vw"
          >
            Por favor, faça login ou registre-se!
          </Paragraph>
        </LoginFormInfo>
        <LoginInputsContainer>
          <Input
            testId="email-input-login"
            mobileInputMargin="1rem 0"
            inputMargin="1rem 0"
            inputWidth="100%"
            mobileInputWidth="100%"
            placeholder="Digite seu email"
            onChange={handleInputChange}
            name="email"
            value={loginInfo.email}
            inputBorderRadius="10px"
            id="email"
            containerWidth="100%"
            mobileContainerWidth="100%"
            labelText="Email"
            labelFontColor="white"
          />
          <Input
            testId="password-input-login"
            mobileInputMargin="1rem 0"
            inputMargin="1rem 0"
            inputWidth="100%"
            mobileInputWidth="100%"
            placeholder="Digite sua senha"
            onChange={handleInputChange}
            name="password"
            type="password"
            value={loginInfo.password}
            inputBorderRadius="10px"
            id="password"
            containerWidth="100%"
            mobileContainerWidth="100%"
            labelText="Senha"
            labelFontColor="white"
            containerMargin="0 0 1rem 0"
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
            mobileMargin="0 5px"
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
            mobileMargin="0 5px"
          >
            Registre-se
          </Button>
        </LoginButtonsContainer>
        { getFeedbackMessage() }
      </LoginFormSection>
      <CreditsLink
        href="http://www.freepik.com"
        target="_blank"
      >
        Designed by pch.vector / Freepik
      </CreditsLink>
    </LoginMainSection>
  );
}

export default LoginPage;
