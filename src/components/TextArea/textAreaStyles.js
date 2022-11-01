import styled from 'styled-components';

const TextAreaStyle = styled.textarea`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  resize: none;
  width: ${({ width }) => width};
`;

export default TextAreaStyle;
