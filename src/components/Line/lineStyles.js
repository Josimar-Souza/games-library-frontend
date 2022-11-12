import styled from 'styled-components';

const LineStyle = styled.hr`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  height: ${({ height }) => height};
  max-width: 100%;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export default LineStyle;
