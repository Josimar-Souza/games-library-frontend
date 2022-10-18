import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './inputStyles';

function Input(props) {
  const {
    width,
    mobileWidth,
    testId,
    border,
    borderRadius,
    fontColor,
    fontSize,
    mobileFontSize,
    backgroundColor,
    padding,
    mobilePadding,
    boxShadow,
    value,
    onChange,
    margin,
    mobileMargin,
    placeholder,
    name,
    type,
  } = props;

  return (
    <InputStyle
      width={width}
      data-testid={testId}
      border={border}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      padding={padding}
      boxShadow={boxShadow}
      value={value}
      onChange={onChange}
      margin={margin}
      placeholder={placeholder}
      name={name}
      type={type}
      mobileWidth={mobileWidth}
      mobileFontSize={mobileFontSize}
      mobilePadding={mobilePadding}
      mobileMargin={mobileMargin}
    />
  );
}

Input.defaultProps = {
  width: '50%',
  mobileWidth: '80%',
  testId: '',
  border: '1px solid black',
  fontColor: 'black',
  fontSize: '2vw',
  mobileFontSize: '6vw',
  backgroundColor: 'white',
  borderRadius: '0',
  padding: '5px',
  mobilePadding: '5px',
  boxShadow: 'none',
  margin: '0',
  mobileMargin: '0',
  placeholder: '',
  name: '',
  type: 'text',
};

Input.propTypes = {
  width: PropTypes.string,
  testId: PropTypes.string,
  border: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  boxShadow: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.string,
  mobileMargin: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobileFontSize: PropTypes.string,
  mobilePadding: PropTypes.string,
};

export default Input;
