import React from 'react';
import PropTypes from 'prop-types';
import TitleStyle from './titleStyles';

function Title(props) {
  const {
    children,
    testId,
    fontSize,
    fontColor,
    width,
    margin,
    textAlign,
  } = props;

  return (
    <TitleStyle
      data-testid={testId}
      fontSize={fontSize}
      fontColor={fontColor}
      width={width}
      margin={margin}
      textAlign={textAlign}
    >
      {children}
    </TitleStyle>
  );
}

Title.defaultProps = {
  testId: '',
  fontSize: '3vw',
  fontColor: 'black',
  width: '50%',
  margin: '0',
  textAlign: 'left',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
};

export default Title;
