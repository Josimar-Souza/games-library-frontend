import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './inputStyles';

function Input(props) {
  const {
    width,
    testId,
    border,
    borderRadius,
    fontColor,
    fontSize,
    backgroundColor,
    padding,
    boxShadow,
    value,
    onChange,
    margin,
    placeholder,
    name,
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
    />
  );
}

Input.defaultProps = {
  width: '50%',
  testId: '',
  border: '1px solid black',
  fontColor: 'black',
  fontSize: '2vw',
  backgroundColor: 'white',
  borderRadius: '0',
  padding: '5px',
  boxShadow: 'none',
  margin: '0',
  placeholder: '',
  name: '',
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
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
