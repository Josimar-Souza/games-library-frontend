import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  text-shadow: ${({ textShadow }) => textShadow};
  transition: ${({ transition }) => transition};

  :hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    cursor: ${({ hoverCursor }) => hoverCursor};
    transform: ${({ hoverTransform }) => hoverTransform};
  }

  :disabled {
    background-color: ${({ disableBackgroundColor }) => disableBackgroundColor};
    color: ${({ disableFontColor }) => disableFontColor};
    cursor: auto;
    transform: none;
  }

  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    margin: ${({ mobileMargin }) => mobileMargin};
    padding: ${({ mobilePadding }) => mobilePadding};
    width: ${({ mobileWidth }) => mobileWidth};

    :hover {
      transform: none;
    }
  }
`;

export default ButtonStyle;
