import React from 'react';
import PropTypes from 'prop-types';
import TitleStyle from './titleStyles';

function Title(props) {
  const {
    children,
    testId,
    fontSize,
    mobileFontSize,
    fontColor,
    width,
    mobileWidth,
    margin,
    mobileMargin,
    textAlign,
    textShadow,
  } = props;

  return (
    <TitleStyle
      data-testid={testId}
      fontSize={fontSize}
      fontColor={fontColor}
      width={width}
      margin={margin}
      textAlign={textAlign}
      mobileFontSize={mobileFontSize}
      mobileWidth={mobileWidth}
      mobileMargin={mobileMargin}
      textShadow={textShadow}
    >
      {children}
    </TitleStyle>
  );
}

Title.defaultProps = {
  testId: '',
  fontSize: '3vw',
  mobileFontSize: '10vw',
  fontColor: 'black',
  width: '50%',
  mobileWidth: '80%',
  margin: '0',
  textAlign: 'left',
  mobileMargin: '0',
  textShadow: 'none',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
  mobileFontSize: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobileMargin: PropTypes.string,
  textShadow: PropTypes.string,
};

export default Title;
