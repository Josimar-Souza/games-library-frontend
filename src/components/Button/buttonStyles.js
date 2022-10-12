import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  transition: ${({ transition }) => transition};

  :hover {
    cursor: ${({ hoverCursor }) => hoverCursor};
    transform: ${({ hoverTransform }) => hoverTransform};
  }
`;

export default ButtonStyle;
