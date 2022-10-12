import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};
`;

export default ParagraphStyle;
