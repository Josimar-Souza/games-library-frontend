import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyles';

function Button(props) {
  const {
    children,
    fontSize,
    mobileFontSize,
    fontColor,
    width,
    mobileWidth,
    padding,
    mobilePadding,
    backgroundColor,
    border,
    borderRadius,
    testId,
    onClick,
    margin,
    mobileMargin,
    hoverCursor,
    hoverTransform,
    transition,
    hoverBackgroundColor,
    disabled,
    disableBackgroundColor,
    disableFontColor,
    textShadow,
    flexShrink,
    name,
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
      mobileFontSize={mobileFontSize}
      mobileWidth={mobileWidth}
      mobilePadding={mobilePadding}
      mobileMargin={mobileMargin}
      hoverBackgroundColor={hoverBackgroundColor}
      disabled={disabled}
      disableBackgroundColor={disableBackgroundColor}
      disableFontColor={disableFontColor}
      textShadow={textShadow}
      flexShrink={flexShrink}
      name={name}
    >
      {children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  fontSize: '2vw',
  mobileFontSize: '6vw',
  fontColor: 'black',
  width: '50%',
  mobileWidth: '40%',
  padding: '2px',
  mobilePadding: '2px',
  backgroundColor: '#dbdbdb',
  border: '1px solid black',
  borderRadius: '0',
  testId: '',
  margin: '0',
  mobileMargin: '0',
  hoverCursor: 'auto',
  hoverTransform: 'none',
  transition: 'none',
  hoverBackgroundColor: '#dbdbdb',
  disabled: false,
  disableBackgroundColor: 'gray',
  disableFontColor: '#444444',
  textShadow: 'none',
  flexShrink: '1',
  name: '',
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
  mobileFontSize: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobilePadding: PropTypes.string,
  mobileMargin: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  disableBackgroundColor: PropTypes.string,
  disableFontColor: PropTypes.string,
  textShadow: PropTypes.string,
  flexShrink: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
