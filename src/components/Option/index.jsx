import React from 'react';
import PropTypes from 'prop-types';
import OptionStyle from './optionStyles';

function Option(props) {
  const {
    children,
    value,
    testId,
    mobileFontSize,
    fontSize,
  } = props;

  return (
    <OptionStyle
      value={value}
      data-testid={testId}
      mobileFontSize={mobileFontSize}
      fontSize={fontSize}
    >
      { children }
    </OptionStyle>
  );
}

Option.defaultProps = {
  testId: '',
  mobileFontSize: '5vw',
  fontSize: '2vw',
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string,
  mobileFontSize: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Option;
