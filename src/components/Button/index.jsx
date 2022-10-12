import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyles';

function Button(props) {
  const {
    children,
    fontSize,
    fontColor,
    width,
    padding,
    backgroundColor,
    border,
    borderRadius,
    testId,
    onClick,
    margin,
    hoverCursor,
    hoverTransform,
    transition,
  } = props;

  return (
    <ButtonStyle
      fontSize={fontSize}
      fontColor={fontColor}
      width={width}
      padding={padding}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      data-testid={testId}
      onClick={onClick}
      margin={margin}
      hoverCursor={hoverCursor}
      hoverTransform={hoverTransform}
      transition={transition}
    >
      {children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  fontSize: '2vw',
  fontColor: 'black',
  width: '50%',
  padding: '2px',
  backgroundColor: '#dbdbdb',
  border: '1px solid black',
  borderRadius: '0',
  testId: '',
  margin: '0',
  hoverCursor: 'auto',
  hoverTransform: 'none',
  transition: 'none',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  testId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  margin: PropTypes.string,
  hoverCursor: PropTypes.string,
  hoverTransform: PropTypes.string,
  transition: PropTypes.string,
};

export default Button;
