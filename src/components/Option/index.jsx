import React from 'react';
import PropTypes from 'prop-types';
import OptionStyle from './optionStyles';

function Option(props) {
  const {
    children,
    value,
  } = props;

  return (
    <OptionStyle
      value={value}
    >
      { children }
    </OptionStyle>
  );
}

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
