import styled from 'styled-components';
import Background from '../../images/Background.jpg';

const RegisterMainSection = styled.section`
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
  padding: 10px;
  width: 100%;
`;

export default RegisterMainSection;
