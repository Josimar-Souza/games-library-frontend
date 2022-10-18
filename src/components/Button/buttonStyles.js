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

  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    margin: ${({ mobileMargin }) => mobileMargin};
    padding: ${({ mobilePadding }) => mobilePadding};
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export default ButtonStyle;
