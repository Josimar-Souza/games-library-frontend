import React from 'react';
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
  const {
    Input,
    Title,
    Paragraph,
    Button,
  } = components;
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
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
            width="100%"
            placeholder="Digite sua senha"
          />
        </LoginInputsContainer>
        <LoginButtonsContainer>
          <Button>
            Logar
          </Button>
          <Button>
            Registre-se
          </Button>
        </LoginButtonsContainer>
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
