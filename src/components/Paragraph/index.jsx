import React from 'react';
import PropTypes from 'prop-types';
import ParagraphStyle from './paragraphStyles';

function Paragraph(props) {
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
  } = props;

  return (
    <ParagraphStyle
      data-testid={testId}
      fontSize={fontSize}
      fontColor={fontColor}
      width={width}
      margin={margin}
      textAlign={textAlign}
      mobileFontSize={mobileFontSize}
      mobileWidth={mobileWidth}
      mobileMargin={mobileMargin}
    >
      {children}
    </ParagraphStyle>
  );
}

Paragraph.defaultProps = {
  testId: '',
  fontSize: '1.2vw',
  mobileFontSize: '5vw',
  fontColor: 'black',
  width: '50%',
  mobileWidth: '80%',
  margin: '0',
  mobileMargin: '0',
  textAlign: 'left',
};

Paragraph.propTypes = {
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
};

export default Paragraph;
