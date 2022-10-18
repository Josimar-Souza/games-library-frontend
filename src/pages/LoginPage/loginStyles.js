import styled from 'styled-components';
import Background from '../../images/Background.jpg';

export const LoginMainSection = styled.section`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
  padding: 10px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
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
    height: 100vh;
    justify-content: space-around;
    width: 90%;
  }
`;

export const LoginFormInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
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
  border-radius: 3rem;
  width: 80%;

  @media (max-width: 480px) {
    width: 60%;
  }
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

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

export const CreditsLink = styled.a`
  color: white;
  position: fixed;
  top: 95%;

  @media (max-width: 480px) {
    top: 97%;
  }
`;
