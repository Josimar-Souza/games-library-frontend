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
    rows,
    cols,
    placeholder,
    textAreaMargin,
    textAreaPadding,
    textAreaFontSize,
    textAreaBorderRadius,
    textAreaFontColor,
    textAreaBackgroundColor,
    value,
    onChange,
    name,
    textAreaBorder,
    containerWidth,
    containerMargin,
    labelText,
    labelFontSize,
    labelFontColor,
    labelBorder,
    labelWidth,
    id,
  } = props;

  return (
    <TextAreaContainer
      containerWidth={containerWidth}
      containerMargin={containerMargin}
    >
      <TextAreaLabel
        labelFontSize={labelFontSize}
        labelFontColor={labelFontColor}
        labelBorder={labelBorder}
        labelWidth={labelWidth}
        htmlFor={id}
      >
        {labelText}
      </TextAreaLabel>
      <TextAreaStyle
        textAreaWidth={textAreaWidth}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        textAreaMargin={textAreaMargin}
        textAreaPadding={textAreaPadding}
        textAreaFontSize={textAreaFontSize}
        textAreaBorderRadius={textAreaBorderRadius}
        textAreaFontColor={textAreaFontColor}
        textAreaBackgroundColor={textAreaBackgroundColor}
        value={value}
        onChange={onChange}
        name={name}
        textAreaBorder={textAreaBorder}
        id={id}
      />
    </TextAreaContainer>
  );
}

TextArea.defaultProps = {
  textAreaWidth: '50%',
  rows: '8',
  cols: '50',
  placeholder: '',
  textAreaMargin: '0',
  textAreaPadding: '5px',
  textAreaFontSize: '1.2vw',
  textAreaBorderRadius: '0',
  textAreaFontColor: 'black',
  textAreaBackgroundColor: 'white',
  name: '',
  textAreaBorder: '1px solid black',
  containerWidth: '80%',
  containerMargin: '0',
  labelFontSize: '2vw',
  labelFontColor: 'black',
  labelBorder: 'none',
  labelWidth: 'labelWidth',
};

TextArea.propTypes = {
  textAreaWidth: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  textAreaMargin: PropTypes.string,
  textAreaPadding: PropTypes.string,
  textAreaFontSize: PropTypes.string,
  textAreaBorderRadius: PropTypes.string,
  textAreaFontColor: PropTypes.string,
  textAreaBackgroundColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  textAreaBorder: PropTypes.string,
  containerWidth: PropTypes.string,
  containerMargin: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelFontSize: PropTypes.string,
  labelFontColor: PropTypes.string,
  labelBorder: PropTypes.string,
  labelWidth: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default TextArea;
