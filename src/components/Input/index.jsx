import React from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  InputStyle,
  InputLabel,
} from './inputStyles';

function Input(props) {
  const {
    inputWidth,
    mobileInputWidth,
    testId,
    inputBorder,
    inputBorderRadius,
    fontColor,
    fontSize,
    mobileFontSize,
    inputBackgroundColor,
    inputPadding,
    mobileInputPadding,
    inputBoxShadow,
    value,
    onChange,
    inputMargin,
    mobileInputMargin,
    placeholder,
    name,
    type,
    containerWidth,
    containerMargin,
    mobileContainerMargin,
    mobileContainerWidth,
    id,
    labelText,
    labelFontColor,
    labelWidth,
    labelTextAlign,
    labelFontSize,
    mobileLabelFontSize,
  } = props;

  return (
    <InputContainer
      containerWidth={containerWidth}
      mobileContainerWidth={mobileContainerWidth}
      containerMargin={containerMargin}
      mobileContainerMargin={mobileContainerMargin}
    >
      <InputLabel
        htmlFor={id}
        labelFontColor={labelFontColor}
        labelWidth={labelWidth}
        labelTextAlign={labelTextAlign}
        labelFontSize={labelFontSize}
        mobileLabelFontSize={mobileLabelFontSize}
      >
        {labelText}
      </InputLabel>
      <InputStyle
        inputWidth={inputWidth}
        data-testid={testId}
        inputBorder={inputBorder}
        fontColor={fontColor}
        inputBackgroundColor={inputBackgroundColor}
        fontSize={fontSize}
        inputBorderRadius={inputBorderRadius}
        inputPadding={inputPadding}
        inputBoxShadow={inputBoxShadow}
        value={value}
        onChange={onChange}
        inputMargin={inputMargin}
        placeholder={placeholder}
        name={name}
        type={type}
        mobileInputWidth={mobileInputWidth}
        mobileFontSize={mobileFontSize}
        mobileInputPadding={mobileInputPadding}
        mobileInputMargin={mobileInputMargin}
        id={id}
      />
    </InputContainer>
  );
}

Input.defaultProps = {
  inputWidth: '50%',
  mobileInputWidth: '80%',
  testId: '',
  inputBorder: '1px solid black',
  fontColor: 'black',
  fontSize: '2vw',
  mobileFontSize: '6vw',
  inputBackgroundColor: 'white',
  inputBorderRadius: '0',
  inputPadding: '5px',
  mobileInputPadding: '5px',
  inputBoxShadow: 'none',
  inputMargin: '0',
  mobileInputMargin: '0',
  placeholder: '',
  name: '',
  type: 'text',
  containerWidth: '50%',
  containerMargin: '0',
  mobileContainerMargin: '0',
  mobileContainerWidth: '80%',
  labelText: '',
  labelFontColor: 'black',
  labelWidth: '80%',
  labelTextAlign: 'center',
  labelFontSize: '2vw',
  mobileLabelFontSize: '5vw',
};

Input.propTypes = {
  inputWidth: PropTypes.string,
  testId: PropTypes.string,
  inputBorder: PropTypes.string,
  fontColor: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  inputBorderRadius: PropTypes.string,
  inputPadding: PropTypes.string,
  inputBoxShadow: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  inputMargin: PropTypes.string,
  mobileInputMargin: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  mobileInputWidth: PropTypes.string,
  mobileFontSize: PropTypes.string,
  mobileInputPadding: PropTypes.string,
  containerWidth: PropTypes.string,
  containerMargin: PropTypes.string,
  mobileContainerMargin: PropTypes.string,
  mobileContainerWidth: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  labelFontColor: PropTypes.string,
  labelWidth: PropTypes.string,
  labelTextAlign: PropTypes.string,
  labelFontSize: PropTypes.string,
  mobileLabelFontSize: PropTypes.string,
};

export default Input;
