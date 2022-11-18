import styled from 'styled-components';

const HeroContainer = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

export default HeroContainer;
