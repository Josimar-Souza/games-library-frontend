import styled from 'styled-components';
import background from '../../images/Background.jpg';

export const AddGameStyle = styled.section`
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  width: 80%;
`;
