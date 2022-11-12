import styled from 'styled-components';

const OptionStyle = styled.option`
  font-size: ${({ fontSize }) => fontSize};

  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
  }
`;

export default OptionStyle;
