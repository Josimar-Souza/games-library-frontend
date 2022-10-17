import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};

  @media (max-width: 460px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    mobileMargin: ${({ mobileMargin }) => mobileMargin};
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export default ParagraphStyle;
