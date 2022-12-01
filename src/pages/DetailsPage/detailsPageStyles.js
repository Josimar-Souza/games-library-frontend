import styled from 'styled-components';

export const DetailsPageSection = styled.section`
  align-items: center;
  display: flex;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const InfoPainel = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  max-width: 100%;
  padding: 10px;
  width: 80%;
`;

export const LeftRightPainel = styled.div`
  align-items: center;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-around;
  max-width: 50%;
  padding: 10px;
  width: 45%;
`;

export const GameImage = styled.img`
  border-radius: 15px;
  max-width: 100%;
  width: 80%;
`;
