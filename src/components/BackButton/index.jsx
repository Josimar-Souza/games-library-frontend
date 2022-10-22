import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackArrow from '../../images/icons/corner-down-left.svg';
import {
  BackButtonStyle,
  BackArrowImg,
} from './backButtonStyles';

function BackButton(props) {
  const navigate = useNavigate();

  const {
    margin,
    position,
    backgroundColor,
    arrowSize,
    transition,
    hoverTransform,
    hoverCursor,
    top,
    botton,
    left,
    right,
    width,
    backRoute,
    borderRadius,
    border,
    padding,
  } = props;

  const onClick = () => {
    navigate(backRoute);
  };

  return (
    <BackButtonStyle
      position={position}
      margin={margin}
      backgroundColor={backgroundColor}
      transition={transition}
      hoverTransform={hoverTransform}
      hoverCursor={hoverCursor}
      top={top}
      botton={botton}
      left={left}
      right={right}
      width={width}
      onClick={onClick}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
    >
      <BackArrowImg
        src={BackArrow}
        arrowSize={arrowSize}
      />
    </BackButtonStyle>
  );
}

BackButton.defaultProps = {
  position: 'static',
  margin: '0',
  backgroundColor: 'gray',
  arrowSize: '100%',
  transition: '0',
  hoverTransform: 'none',
  hoverCursor: 'auto',
  top: '0',
  botton: '0',
  left: '0',
  right: '0',
  width: '50%',
  borderRadius: '0',
  border: '1px solid black',
  padding: '2px',
};

BackButton.propTypes = {
  position: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
  arrowSize: PropTypes.string,
  transition: PropTypes.string,
  hoverTransform: PropTypes.string,
  hoverCursor: PropTypes.string,
  top: PropTypes.string,
  botton: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  width: PropTypes.string,
  backRoute: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
};

export default BackButton;
