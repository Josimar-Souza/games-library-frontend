import styled from 'styled-components';

const TextAreaStyle = styled.textarea`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  resize: none;
  width: ${({ width }) => width};

  :focus {
    outline: none;
  }
`;

export default TextAreaStyle;
