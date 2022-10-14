import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.jpg';
import components from '../../components';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
  LoginInputsContainer,
  LoginButtonsContainer,
} from './loginStyles';

function LoginPage() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

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
            width="100%"
            placeholder="Digite seu email"
            onChange={handleInputChange}
            name="email"
            value={loginInfo.email}
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
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
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
