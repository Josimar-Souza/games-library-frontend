import React from 'react';
import Logo from '../../images/Logo.jpg';
import components from '../../components';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
} from './loginStyles';

function LoginPage() {
  const { Input } = components;
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
        <Input
          margin="2rem 0"
        />
        <Input />
      </LoginFormSection>
    </LoginMainSection>
  );
}

export default LoginPage;
