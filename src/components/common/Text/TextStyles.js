import styled from "styled-components";
import { fonts } from "@styles/fonts";

export const StyledText = styled.p` 
max-width:400px;
text-align:justify;
font-size: ${props => props.$fontSize};
font-family: ${fonts.defaultFont};
line-height:25px;
color: #${(props) => props.$color};
font-weight: normal;
${props => props.style};

@media (max-width:800px){
  padding: 0 20px;
}
`;
