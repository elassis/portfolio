import styled from "styled-components";
import { colors } from "@styles/colors";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  display:flex;
  align-items:center;
  padding:0 20px;
  background-color: #${colors.blue};
  box-sizing:border-box;

`;

export const LinksContainer = styled.div`
  display:none;  
  @media (min-width:700px){
    display: flex;
    width:500px;
    margin:auto;
    justify-content:space-between;
  }
`;

export const HamburgerContainer = styled.div`
  @media (min-width:700px){
      display: none;
  }
`;
