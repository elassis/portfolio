import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const NavigationButton = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props => props.selected ? `#${colors.blue}` : `#${colors.lightGrey25}`};
`;

export const NavigationContainer = styled.div`
  display:flex;
  gap:20px;
  margin:20px auto;
`;