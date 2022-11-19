import styled from 'styled-components';
import background from '../../images/Background.jpg';

export const GamesPageSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const CategoriesSearchContainer = styled.div`
  align-items: center;
  background-color: #191919;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0.5rem 0;
  min-height: 60px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  padding: 8px;
  width: 35%;
`;

export const CategoriesContainer = styled.div`
  align-items: center;
  display: flex;
  max-width: 100%;
  min-height: 3.5rem;
  overflow-x: scroll;
  overscroll-behavior: contain;
  padding: 8px;
  width: 63%;

  ::-webkit-scrollbar {
    display: none;
  }
`;
