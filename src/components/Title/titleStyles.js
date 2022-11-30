import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  text-shadow: ${({ textShadow }) => textShadow};
  width: ${({ width }) => width};

  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    margin: ${({ mobileMargin }) => mobileMargin};
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export default TitleStyle;
