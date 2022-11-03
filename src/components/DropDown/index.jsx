import React from 'react';
import PropTypes from 'prop-types';
import {
  DropDownContainer,
  DropDownStyle,
  DropDownLabel,
} from './dropDownStyles';

function DropDown(props) {
  const {
    children,
    dropdownWidth,
    dropdownFontSize,
    dropdownFontColor,
    dropdownMinHeight,
    dropdownBackgroundColor,
    dropdownBorderRadius,
    dropdownBorder,
    dropdownMargin,
    name,
    onChange,
    value,
    dropdownContainerWidth,
    labelText,
    labelFontColor,
    labelWidth,
    labelTextAlign,
    labelFontSize,
    id,
  } = props;

  return (
    <DropDownContainer
      dropdownContainerWidth={dropdownContainerWidth}
    >
      <DropDownLabel
        id={id}
        labelFontColor={labelFontColor}
        labelWidth={labelWidth}
        labelTextAlign={labelTextAlign}
        labelFontSize={labelFontSize}
      >
        {labelText}
      </DropDownLabel>
      <DropDownStyle
        dropdownWidth={dropdownWidth}
        dropdownFontSize={dropdownFontSize}
        dropdownMinHeight={dropdownMinHeight}
        dropdownFontColor={dropdownFontColor}
        dropdownBackgroundColor={dropdownBackgroundColor}
        dropdownBorderRadius={dropdownBorderRadius}
        dropdownBorder={dropdownBorder}
        dropdownMargin={dropdownMargin}
        name={name}
        onChange={onChange}
        value={value}
        id={id}
      >
        { children }
      </DropDownStyle>
    </DropDownContainer>
  );
}

DropDown.defaultProps = {
  dropdownWidth: '50%',
  dropdownFontSize: '1.2vw',
  dropdownMinHeight: '2.5rem',
  dropdownFontColor: 'black',
  dropdownBackgroundColor: 'white',
  dropdownBorderRadius: '0',
  dropdownBorder: '1px solid black',
  dropdownMargin: '0',
  name: '',
  dropdownContainerWidth: '50%',
  labelText: '',
  labelFontColor: 'black',
  labelWidth: '80%',
  labelTextAlign: 'center',
  labelFontSize: '2vw',
  id: '',
};

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownWidth: PropTypes.string,
  dropdownFontSize: PropTypes.string,
  dropdownMinHeight: PropTypes.string,
  dropdownFontColor: PropTypes.string,
  dropdownBackgroundColor: PropTypes.string,
  dropdownBorderRadius: PropTypes.string,
  dropdownBorder: PropTypes.string,
  dropdownMargin: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dropdownContainerWidth: PropTypes.string,
  labelText: PropTypes.string,
  labelFontColor: PropTypes.string,
  labelWidth: PropTypes.string,
  labelTextAlign: PropTypes.string,
  labelFontSize: PropTypes.string,
  id: PropTypes.string,
};

export default DropDown;
