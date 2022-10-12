import React from 'react';
import PropTypes from 'prop-types';
import ParagraphStyle from './paragraphStyles';

function Paragraph(props) {
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
    <ParagraphStyle
      data-testid={testId}
      fontSize={fontSize}
      fontColor={fontColor}
      width={width}
      margin={margin}
      textAlign={textAlign}
    >
      {children}
    </ParagraphStyle>
  );
}

Paragraph.defaultProps = {
  testId: '',
  fontSize: '1.2vw',
  fontColor: 'black',
  width: '50%',
  margin: '0',
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
};

export default Paragraph;
