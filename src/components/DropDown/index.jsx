import React from 'react';
import PropTypes from 'prop-types';
import DropDownStyle from './dropDownStyles';

function DropDown(props) {
  const {
    children,
    width,
    fontSize,
    fontColor,
    height,
    backgroundColor,
    borderRadius,
    border,
    name,
    onChange,
    value,
  } = props;

  return (
    <DropDownStyle
      width={width}
      fontSize={fontSize}
      height={height}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      name={name}
      onChange={onChange}
      value={value}
    >
      { children }
    </DropDownStyle>
  );
}

DropDown.defaultProps = {
  width: '50%',
  fontSize: '1.2vw',
  height: '2.5rem',
  fontColor: 'black',
  backgroundColor: 'white',
  borderRadius: '0',
  border: '1px solid black',
  name: '',
};

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DropDown;
