import styled from "styled-components";
import { Button } from "react-bootstrap";

export const color = {
  primary: '#0052cc', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};

export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  appearance: none;
  ${font.size(14)}
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  float: right;
  background-color: ${props => props.theme.darkMode === true ? color.backgroundDarkPrimary : color.backgroundLightPrimary};
  color: ${props => props.theme.darkMode === true ? color.textLight : color.textDarkest};
`;
