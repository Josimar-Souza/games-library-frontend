import styled from 'styled-components';

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;
  width: ${({ containerWidth }) => containerWidth};
`;

export const InputStyle = styled.input`
  background-color: ${({ inputBackgroundColor }) => inputBackgroundColor};
  border: ${({ inputBorder }) => inputBorder};
  border-radius: ${({ inputBorderRadius }) => inputBorderRadius};
  box-shadow: ${({ inputBoxShadow }) => inputBoxShadow};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ inputMargin }) => inputMargin};
  max-width: 100%;
  padding: ${({ inputPadding }) => inputPadding};
  width: ${({ inputWidth }) => inputWidth};

  :focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    margin: ${({ mobileInputMargin }) => mobileInputMargin};
    width: ${({ mobileInputWidth }) => mobileInputWidth};
  }
`;

export const InputLabel = styled.label`
  color: ${({ labelFontColor }) => labelFontColor};
  font-size: ${({ labelFontSize }) => labelFontSize};
  max-width: 100%;
  text-align: ${({ labelTextAlign }) => labelTextAlign};
  width: ${({ labelWidth }) => labelWidth};
`;
