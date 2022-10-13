import React, { useState } from 'react';
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
  const [email, setEmail] = useState({ value: '', color: '' });

  const {
    Input,
    Title,
    Paragraph,
    Button,
  } = components;

  const onInputChange = ({ target: { value } }) => {
    setEmail({ ...email, value });
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
            onChange={onInputChange}
            name="email"
            value={email.value}
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
            width="100%"
            placeholder="Digite sua senha"
            onChange={onInputChange}
            name="password"
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
          >
            Registre-se
          </Button>
        </LoginButtonsContainer>
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
