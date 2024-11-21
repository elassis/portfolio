import styled from "styled-components";
import { colors } from "@styles/colors";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #${colors.blue};
  box-sizing: border-box;
`;

export const LinksContainer = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    width: 450px;
    margin: auto;
    justify-content: space-between;
  }
`;

export const HamburgerContainer = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledMenu = styled.div`
  position: fixed;
  width: 80vw;
  height: 100vh;
  background-color: #${colors.blue};
  z-index: 15;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  box-sizing: border-box;

  a {
    font-size: 25px;
  }

  @media (min-width:700px){
    display:none;
  }
`;
