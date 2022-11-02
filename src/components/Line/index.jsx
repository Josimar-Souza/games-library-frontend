import React from 'react';
import PropTypes from 'prop-types';
import LineStyle from './lineStyles';

function Line(props) {
  const {
    width,
    height,
    backgroundColor,
    border,
    borderRadius,
    margin,
  } = props;

  return (
    <LineStyle
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      margin={margin}
    />
  );
}

Line.defaultProps = {
  width: '50%',
  height: '5px',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '0',
  margin: '0',
};

Line.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
};

export default Line;
