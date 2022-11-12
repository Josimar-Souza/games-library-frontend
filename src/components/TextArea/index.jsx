import React from 'react';
import PropTypes from 'prop-types';
import {
  TextAreaContainer,
  TextAreaStyle,
  TextAreaLabel,
} from './textAreaStyles';

function TextArea(props) {
  const {
    textAreaWidth,
    mobileTextAreaWidth,
    rows,
    cols,
    placeholder,
    textAreaMargin,
    textAreaPadding,
    textAreaFontSize,
    mobileTextAreaFontSize,
    textAreaBorderRadius,
    textAreaFontColor,
    textAreaBackgroundColor,
    value,
    onChange,
    name,
    textAreaBorder,
    containerWidth,
    mobileContainerWidth,
    containerMargin,
    mobileContainerMargin,
    labelText,
    labelFontSize,
    mobileLabelFontSize,
    labelFontColor,
    labelBorder,
    labelWidth,
    id,
    textAreaBoxShadow,
  } = props;

  return (
    <TextAreaContainer
      containerWidth={containerWidth}
      mobileContainerWidth={mobileContainerWidth}
      containerMargin={containerMargin}
      mobileContainerMargin={mobileContainerMargin}
    >
      <TextAreaLabel
        labelFontSize={labelFontSize}
        mobileLabelFontSize={mobileLabelFontSize}
        labelFontColor={labelFontColor}
        labelBorder={labelBorder}
        labelWidth={labelWidth}
        htmlFor={id}
      >
        {labelText}
      </TextAreaLabel>
      <TextAreaStyle
        textAreaWidth={textAreaWidth}
        mobileTextAreaWidth={mobileTextAreaWidth}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        textAreaMargin={textAreaMargin}
        textAreaPadding={textAreaPadding}
        textAreaFontSize={textAreaFontSize}
        mobileTextAreaFontSize={mobileTextAreaFontSize}
        textAreaBorderRadius={textAreaBorderRadius}
        textAreaFontColor={textAreaFontColor}
        textAreaBackgroundColor={textAreaBackgroundColor}
        value={value}
        onChange={onChange}
        name={name}
        textAreaBorder={textAreaBorder}
        id={id}
        textAreaBoxShadow={textAreaBoxShadow}
      />
    </TextAreaContainer>
  );
}

TextArea.defaultProps = {
  textAreaWidth: '50%',
  mobileTextAreaWidth: '80%',
  rows: '8',
  cols: '50',
  placeholder: '',
  textAreaMargin: '0',
  textAreaPadding: '5px',
  textAreaFontSize: '1.2vw',
  mobileTextAreaFontSize: '5vw',
  textAreaBorderRadius: '0',
  textAreaFontColor: 'black',
  textAreaBackgroundColor: 'white',
  name: '',
  textAreaBorder: '1px solid black',
  containerWidth: '80%',
  mobileContainerWidth: '80%',
  containerMargin: '0',
  mobileContainerMargin: '0',
  labelFontSize: '2vw',
  mobileLabelFontSize: '5vw',
  labelFontColor: 'black',
  labelBorder: 'none',
  labelWidth: 'labelWidth',
  textAreaBoxShadow: 'none',
};

TextArea.propTypes = {
  textAreaWidth: PropTypes.string,
  mobileTextAreaWidth: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  textAreaMargin: PropTypes.string,
  textAreaPadding: PropTypes.string,
  textAreaFontSize: PropTypes.string,
  mobileTextAreaFontSize: PropTypes.string,
  textAreaBorderRadius: PropTypes.string,
  textAreaFontColor: PropTypes.string,
  textAreaBackgroundColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  textAreaBorder: PropTypes.string,
  containerWidth: PropTypes.string,
  mobileContainerWidth: PropTypes.string,
  containerMargin: PropTypes.string,
  mobileContainerMargin: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelFontSize: PropTypes.string,
  mobileLabelFontSize: PropTypes.string,
  labelFontColor: PropTypes.string,
  labelBorder: PropTypes.string,
  labelWidth: PropTypes.string,
  id: PropTypes.string.isRequired,
  textAreaBoxShadow: PropTypes.string,
};

export default TextArea;
