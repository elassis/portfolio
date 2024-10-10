import React from "react";
import { StyledNavbar, LinksContainer, HamburgerContainer } from "./NavbarStyles";
import Link from "../common/Link/Link";
import Icon from "../../assets/icons/Icon";
import { colors } from "../../styles/colors";

const Navbar = () => {
  return (
    <StyledNavbar>
      <HamburgerContainer>
        <Icon name="menu" color={colors.white} width="50px" height="50px" />
      </HamburgerContainer>
      <LinksContainer>
        <Link route="#" text="portfolio" />
        <Link route="#" text="skills" />
        <Link route="#" text="projects" />
        <Link route="#" text="contact" type="button" />
      </LinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
