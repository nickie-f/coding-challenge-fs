import styled from 'styled-components';
import { color, font } from "../../shared/utils/style";

export const NameFile = styled.span`
  color: ${props => props.theme.darkMode === true ? color.textDarkest : color.textLight};
  ${font.size(14)}
`;
