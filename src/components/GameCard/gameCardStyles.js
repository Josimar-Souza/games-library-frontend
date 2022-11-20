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
`;

export const GameImageContainer = styled.div`
  height: 80%;
  max-width: 100%;
  width: 95%;
`;

export const GameImage = styled.img`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  height: 100%;
  max-width: 100%;
  width: 100%;
`;
