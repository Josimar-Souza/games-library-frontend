import styled from 'styled-components';
import Background from '../../images/Background.jpg';

const LoadingSection = styled.section`
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

export default LoadingSection;
