import React, { useState } from 'react';
import Logo from '../../images/Logo.jpg';
import components from '../../components';
import { emailValidation, passwordValidation } from '../../validations/loginValidation';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
  LoginInputsContainer,
  LoginButtonsContainer,
} from './loginStyles';

function LoginPage() {
  const [email, setEmail] = useState({
    value: '',
    border: '1px solid black',
    boxShadow: 'none',
  });
  const [password, setPassword] = useState({
    value: '',
    border: '1px solid black',
    boxShadow: 'none',
  });

  const {
    Input,
    Title,
    Paragraph,
    Button,
  } = components;

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'email') {
      const validationResult = emailValidation(value);

      if (!validationResult) {
        setEmail({
          ...email,
          value,
          border: '1px solid red',
          boxShadow: '0 0 10px red',
        });
      } else {
        setEmail({
          ...email,
          value,
          border: '1px solid green',
          boxShadow: '0 0 10px green',
        });
      }
    } else {
      const validationResult = passwordValidation(value);

      if (!validationResult) {
        setPassword({
          ...password,
          value,
          border: '1px solid red',
          boxShadow: '0 0 10px red',
        });
      } else {
        setPassword({
          ...password,
          value,
          border: '1px solid green',
          boxShadow: '0 0 10px green',
        });
      }
    }
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
            value={email.value}
            border={email.border}
            boxShadow={email.boxShadow}
          />
          <Input
            testId="password-input-login"
            margin="2rem 0"
            width="100%"
            placeholder="Digite sua senha"
            onChange={handleInputChange}
            name="password"
            type="password"
            value={password.value}
            border={password.border}
            boxShadow={password.boxShadow}
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
