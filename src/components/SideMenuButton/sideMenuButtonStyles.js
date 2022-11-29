import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  max-width: 50%;
  transition: 0.5s;
  width: 2%;

  :hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }

  @media only screen and (max-width: 480px) {
    width: 5%;
  }
`;

export const SideMenuStyle = styled.input`
  display: none;
`;

export const SideMenuBarContainer = styled.label`
  border: none;
  max-width: 100%;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const SideMenuBar = styled.div`
  background-color: white;
  max-width: 100%;
  height: 2px;
  margin: 5px 0;
  width: 100%;
`;
