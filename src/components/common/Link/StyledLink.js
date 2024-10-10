import styled from "styled-components";
import { colors } from "@styles/colors.js";

export const StyledLink = styled.a`
color:#${props => props.$color};
font-family: Inter, sans-serif; 
text-transform: capitalize;
text-decoration:none;
padding:10px;
font-size:12px;

${props => props.type === 'button' &&
    `
border-radius:20px;
padding:10px 20px;
font-weight:700;
background-color:#${colors.white};
color:#${colors.blue};
-webkit-box-shadow: 0px 0px 37px -9px rgba(69,65,69,1);
-moz-box-shadow: 0px 0px 37px -9px rgba(69,65,69,1);
box-shadow: 0px 0px 37px -9px rgba(69,65,69,1);
`}

`;