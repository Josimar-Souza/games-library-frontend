import styled from 'styled-components';

const DropDownStyle = styled.select`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  :focus {
    outline: none;
  }
`;

export default DropDownStyle;
