import React from 'react';
import RegisterMainSection from './registerPageStyles';
import components from '../../components';

function RegisterPage() {
  const {
    Title,
    Input,
    Button,
  } = components;

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
      />
      <Input
        placeholder="Digite seu email"
        width="30%"
        borderRadius="15px"
        name="email"
        type="email"
        margin="10px 0"
        padding="10px"
      />
      <Input
        placeholder="Digite sua senha"
        width="30%"
        borderRadius="15px"
        name="password"
        type="password"
        margin="10px 0"
        padding="10px"
      />
      <Input
        placeholder="Confirme sua senha"
        width="30%"
        borderRadius="15px"
        name="password"
        type="password"
        margin="10px 0"
        padding="10px"
      />
      <Button
        width="15%"
        margin="10px 0"
        borderRadius="15px"
      >
        Registrar
      </Button>
    </RegisterMainSection>
  );
}

export default RegisterPage;
