import styled from 'styled-components';

export const DetailsPageSection = styled.section`
  align-items: center;
  display: flex;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  padding: 5rem;
  width: 100%;

  @media only screen and (max-width: 480px) {
    padding: 2rem;
  }
`;

export const InfoPainel = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  max-width: 100%;
  padding: 10px;
  width: 80%;

  @media only screen and (max-width: 480px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftRightPainel = styled.div`
  align-items: center;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  max-width: 50%;
  padding: 10px;
  width: 45%;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const GameImage = styled.img`
  border-radius: 15px;
  max-width: 100%;
  width: 80%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const HorizontalSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0.5rem 0;
  max-width: 100%;
  width: 100%;
`;

export const TrailerIframe = styled.iframe`
  margin: 0.5rem 0;
  max-width: 100%;
  min-height: 250px;
  width: 100%;
`;
