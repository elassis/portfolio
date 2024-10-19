import React from "react";
import { StyledNavbar, LinksContainer, HamburgerContainer } from "./NavbarStyles";
import { Link } from "@common";
import Icon from "../../assets/icons/Icon";
import { colors } from "../../styles/colors";
import { NavbarLinks } from "../../utils/constants";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  return (
    <StyledNavbar>
      <HamburgerContainer>
        <Icon
          name="menu"
          width="50px"
          height="50px"
          color={colors.white}
        />
      </HamburgerContainer>
      <LinksContainer>
        {NavbarLinks.map(navLink => <Link key={uuidv4()} {...navLink} />)}
      </LinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
