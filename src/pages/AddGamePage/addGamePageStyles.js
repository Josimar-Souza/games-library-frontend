import styled from 'styled-components';
import background from '../../images/Background.jpg';

export const AddGameStyle = styled.section`
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin: 15px 0;
  width: 80%;
`;

export const PlatformInputsContainer = styled.div`
  align-items: center;
  background-color: #c6c6c6;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  margin: 15px 0;
  width: 80%;
`;
