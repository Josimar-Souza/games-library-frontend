import React from 'react';
import Logo from '../../images/Logo.jpg';
import {
  LoginMainSection,
  LoginLogo,
  LoginFormSection,
  LoginLogoContainer,
} from './loginStyles';

function LoginPage() {
  return (
    <LoginMainSection>
      <LoginLogoContainer>
        <LoginLogo
          src={Logo}
          alt="Logo da aplicação"
          data-testid="login-logo"
        />
      </LoginLogoContainer>
      <LoginFormSection />
    </LoginMainSection>
  );
}

export default LoginPage;
