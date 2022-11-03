import React from 'react';
import PropTypes from 'prop-types';
import OptionStyle from './optionStyles';

function Option(props) {
  const {
    children,
    value,
    testId,
  } = props;

  return (
    <OptionStyle
      value={value}
      data-testid={testId}
    >
      { children }
    </OptionStyle>
  );
}

Option.defaultProps = {
  testId: '',
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

export default Option;
