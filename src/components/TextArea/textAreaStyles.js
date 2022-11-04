import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-wdith: 100%;
  margin: ${({ containerMargin }) => containerMargin};
  width: ${({ containerWidth }) => containerWidth};
`;

export const TextAreaStyle = styled.textarea`
  background-color: ${({ textAreaBackgroundColor }) => textAreaBackgroundColor};
  border-radius: ${({ textAreaBorderRadius }) => textAreaBorderRadius};
  border: ${({ textAreaBorder }) => textAreaBorder};
  color: ${({ textAreaFontColor }) => textAreaFontColor};
  font-size: ${({ textAreaFontSize }) => textAreaFontSize};
  margin: ${({ textAreaMargin }) => textAreaMargin};
  padding: ${({ textAreaPadding }) => textAreaPadding};
  resize: none;
  width: ${({ textAreaWidth }) => textAreaWidth};

  :focus {
    outline: none;
  }
`;

export const TextAreaLabel = styled.label`
  border: ${({ labelBorder }) => labelBorder};
  color: ${({ labelFontColor }) => labelFontColor};
  font-size: ${({ labelFontSize }) => labelFontSize};
  max-width: 100%;
  width: ${({ labelWidth }) => labelWidth};
`;
