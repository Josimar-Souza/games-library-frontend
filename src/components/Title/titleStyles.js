import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};
`;

export default TitleStyle;
