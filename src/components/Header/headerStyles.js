import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 165, 0, 0.1);
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  min-height: 4rem;
  padding: 12px;
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: 0.3s;

  :hover {
    background-color: rgba(255, 165, 0, 0.6);
  }
`;

export const HeaderLogo = styled.img`
  border-radius: 50%;
  max-width: 10%;
  width: 4%;
`;

export const SideMenuContainer = styled.aside`
  background-color: rgba(201, 201, 201, 0.8);
  border-radius: 15px;
  position: fixed;
  max-width: 40%;
  min-height: 100px;
  padding: 10px;
  right: ${({ rightPosition }) => rightPosition};
  transition: 0.5s;
  top: 60px;
  width: 15%;
`;
