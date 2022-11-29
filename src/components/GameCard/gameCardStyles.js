import styled from 'styled-components';

export const GameCardContainer = styled.div`
  align-items: center;
  background-color: #a0a0a0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 80%;
  min-height: 18rem;
  padding: 10px;
  width: 22%;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
    width: 80%;
  }
`;

export const GameImageContainer = styled.div`
  height: 80%;
  max-width: 100%;
  width: 60%;
`;

export const GameImage = styled.img`
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.25);
  height: 100%;
  max-width: 100%;
  width: 100%;
`;
