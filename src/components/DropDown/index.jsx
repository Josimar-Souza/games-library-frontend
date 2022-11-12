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
    mobileDropdownWidth,
    dropdownFontSize,
    mobileDropdownFontSize,
    dropdownFontColor,
    dropdownMinHeight,
    mobileDropdownMinHeight,
    dropdownBackgroundColor,
    dropdownBorderRadius,
    dropdownBorder,
    dropdownMargin,
    mobileDropdownMargin,
    name,
    onChange,
    value,
    dropdownContainerWidth,
    mobileDropdownContainerWidth,
    mobileDropdownContainerMargin,
    labelText,
    labelFontColor,
    labelWidth,
    labelTextAlign,
    labelFontSize,
    mobileLabelFontSize,
    id,
  } = props;

  return (
    <DropDownContainer
      dropdownContainerWidth={dropdownContainerWidth}
      mobileDropdownContainerWidth={mobileDropdownContainerWidth}
      mobileDropdownContainerMargin={mobileDropdownContainerMargin}
    >
      <DropDownLabel
        htmlFor={id}
        labelFontColor={labelFontColor}
        labelWidth={labelWidth}
        labelTextAlign={labelTextAlign}
        labelFontSize={labelFontSize}
        mobileLabelFontSize={mobileLabelFontSize}
      >
        {labelText}
      </DropDownLabel>
      <DropDownStyle
        dropdownWidth={dropdownWidth}
        mobileDropdownWidth={mobileDropdownWidth}
        dropdownFontSize={dropdownFontSize}
        mobileDropdownFontSize={mobileDropdownFontSize}
        dropdownMinHeight={dropdownMinHeight}
        mobileDropdownMinHeight={mobileDropdownMinHeight}
        dropdownFontColor={dropdownFontColor}
        dropdownBackgroundColor={dropdownBackgroundColor}
        dropdownBorderRadius={dropdownBorderRadius}
        dropdownBorder={dropdownBorder}
        dropdownMargin={dropdownMargin}
        mobileDropdownMargin={mobileDropdownMargin}
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
  mobileDropdownWidth: '80%',
  dropdownFontSize: '1.2vw',
  mobileDropdownFontSize: '5vw',
  dropdownMinHeight: '2.5rem',
  mobileDropdownMinHeight: '3rem',
  dropdownFontColor: 'black',
  dropdownBackgroundColor: 'white',
  dropdownBorderRadius: '0',
  dropdownBorder: '1px solid black',
  dropdownMargin: '0',
  mobileDropdownMargin: '0',
  name: '',
  dropdownContainerWidth: '50%',
  mobileDropdownContainerWidth: '80%',
  mobileDropdownContainerMargin: '0',
  labelText: '',
  labelFontColor: 'black',
  labelWidth: '80%',
  labelTextAlign: 'center',
  labelFontSize: '2vw',
  mobileLabelFontSize: '5vw',
};

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownWidth: PropTypes.string,
  mobileDropdownWidth: PropTypes.string,
  dropdownFontSize: PropTypes.string,
  mobileDropdownFontSize: PropTypes.string,
  dropdownMinHeight: PropTypes.string,
  mobileDropdownMinHeight: PropTypes.string,
  dropdownFontColor: PropTypes.string,
  dropdownBackgroundColor: PropTypes.string,
  dropdownBorderRadius: PropTypes.string,
  dropdownBorder: PropTypes.string,
  dropdownMargin: PropTypes.string,
  mobileDropdownMargin: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dropdownContainerWidth: PropTypes.string,
  mobileDropdownContainerWidth: PropTypes.string,
  mobileDropdownContainerMargin: PropTypes.string,
  labelText: PropTypes.string,
  labelFontColor: PropTypes.string,
  labelWidth: PropTypes.string,
  labelTextAlign: PropTypes.string,
  labelFontSize: PropTypes.string,
  mobileLabelFontSize: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default DropDown;
