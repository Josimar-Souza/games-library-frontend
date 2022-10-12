import React from 'react';
import Logo from '../../images/Logo.jpg';
import components from '../../components';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
  LoginInputsContainer,
} from './loginStyles';

function LoginPage() {
  const { Input, Title } = components;
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
        <LoginInputsContainer>
          <Input
            testId="email-input-login"
            margin="2rem 0"
            width="100%"
            placeholder="Digite seu email"
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
            width="100%"
            placeholder="Digite sua senha"
          />
        </LoginInputsContainer>
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
