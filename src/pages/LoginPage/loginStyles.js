import styled from 'styled-components';

export const LoginMainSection = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const LoginFormSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 50%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LoginLogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 45%;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const LoginLogo = styled.img`
  width: 80%;
`;

export const LoginInputsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LoginButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 50%;

  @media (max-width: 460px) {
    justify-content: center;
    width: 100%;
  }
`;
