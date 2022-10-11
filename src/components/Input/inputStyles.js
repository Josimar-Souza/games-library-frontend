import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  max-width: 100%;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};

  :focus {
    outline: none;
  }
`;

export default InputStyle;
