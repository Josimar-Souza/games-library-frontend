import React from 'react';
import PropTypes from 'prop-types';
import TextAreaStyle from './textAreaStyles';

function TextArea(props) {
  const {
    width,
    rows,
    cols,
    placeholder,
    margin,
    padding,
    fontSize,
    borderRadius,
    fontColor,
    backgroundColor,
    value,
    onChange,
    name,
    border,
  } = props;

  return (
    <TextAreaStyle
      width={width}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      value={value}
      onChange={onChange}
      name={name}
      border={border}
    />
  );
}

TextArea.defaultProps = {
  width: '50%',
  rows: '8',
  cols: '50',
  placeholder: '',
  margin: '0',
  padding: '5px',
  fontSize: '1.2vw',
  borderRadius: '0',
  fontColor: 'black',
  backgroundColor: 'white',
  name: '',
  border: '1px solid black',
};

TextArea.propTypes = {
  width: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  border: PropTypes.string,
};

export default TextArea;
