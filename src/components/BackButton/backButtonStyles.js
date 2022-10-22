import styled from 'styled-components';

export const BackButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  botton: ${({ botton }) => botton};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};
  max-width: 100%;
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  transition: ${({ transition }) => transition};
  top: ${({ top }) => top};
  width: ${({ width }) => width};

  :hover {
    transform: ${({ hoverTransform }) => hoverTransform};
    cursor: ${({ hoverCursor }) => hoverCursor};
  }
`;

export const BackArrowImg = styled.img`
  max-width: 100%;
  width: ${({ arrowSize }) => arrowSize};
`;
