import styled from 'styled-components';

export const HeroContainer = styled.div`
  align-items: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const HeroLeftFade = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), 70%, rgba(0, 0, 0, 0));
  left: 0;
  max-width: 50%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  width: 50%;
`;

export const HeroBottonFade = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), 75%, rgba(0, 0, 0, 1));
  bottom: 0;
  height: 20rem;
  left: 0;
  max-width: 100%;
  position: absolute;
  width: 100%;
`;

export const HeroInfoContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;
  margin-left: 1.5rem;
  min-height: 100px;
  padding: 10px;
  width: 50%;
  z-index: 1;
`;
