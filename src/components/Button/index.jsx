import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyles';

function Button(props) {
  const {
    children,
  } = props;

  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
