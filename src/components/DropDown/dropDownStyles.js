import styled from 'styled-components';

export const DropDownContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;
  width: ${({ dropdownContainerWidth }) => dropdownContainerWidth};

  @media (max-width: 480px) {
    margin: ${({ mobileDropdownContainerMargin }) => mobileDropdownContainerMargin};
    width: ${({ mobileDropdownContainerWidth }) => mobileDropdownContainerWidth};
  }
`;

export const DropDownStyle = styled.select`
  background-color: ${({ dropdownBackgroundColor }) => dropdownBackgroundColor};
  border-radius: ${({ dropdownBorderRadius }) => dropdownBorderRadius};
  border: ${({ dropdownBorder }) => dropdownBorder};
  color: ${({ dropdownFontColor }) => dropdownFontColor};
  font-size: ${({ dropdownFontSize }) => dropdownFontSize};
  min-height: ${({ dropdownMinHeight }) => dropdownMinHeight};
  margin: ${({ dropdownMargin }) => dropdownMargin};
  width: ${({ dropdownWidth }) => dropdownWidth};

  :focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: ${({ mobileDropdownFontSize }) => mobileDropdownFontSize};
    margin: ${({ mobileDropdownMargin }) => mobileDropdownMargin};
    min-height: ${({ mobileDropdownMinHeight }) => mobileDropdownMinHeight};
    width: ${({ mobileDropdownWidth }) => mobileDropdownWidth};
  }
`;

export const DropDownLabel = styled.label`
  color: ${({ labelFontColor }) => labelFontColor};
  font-size: ${({ labelFontSize }) => labelFontSize};
  max-width: 100%;
  text-align: ${({ labelTextAlign }) => labelTextAlign};
  width: ${({ labelWidth }) => labelWidth};

  @media (max-width: 480px) {
    font-size: ${({ mobileLabelFontSize }) => mobileLabelFontSize};
  }
`;
