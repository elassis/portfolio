import React, { useState } from "react";
import {
  StyledNavbar,
  LinksContainer,
  HamburgerContainer,
} from "./NavbarStyles";
import { Link } from "@common";
import Icon from "../../assets/icons/Icon";
import { colors } from "../../styles/colors";
import { NavbarLinks } from "../../utils/constants";
import { v4 as uuidv4 } from "uuid";
import UseScroll from "../../utils/hooks/UseScroll";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { scroll } = UseScroll();

  const setAsButton = (linkText) => {
    if (
      (linkText === "skills" && scroll >= 500 && scroll < 1200) ||
      (linkText === "portfolio" && scroll >= 1200 && scroll < 1800) ||
      (linkText === "contact" && scroll >= 1900)
    ) {
      return "button";
    }
    return "";
  };

  return (
    <>
      <StyledNavbar>
        <HamburgerContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Icon
            name="menu"
            width="50px"
            height="50px"
            strokeColor={colors.white}
            fillColor={colors.white}
          />
        </HamburgerContainer>
        <LinksContainer>
          {NavbarLinks.map((navLink) => (
            <Link
              type={setAsButton(navLink.text)}
              key={uuidv4()}
              {...navLink}
            />
          ))}
        </LinksContainer>
      </StyledNavbar>
      {showMobileMenu && (
        <MobileMenu Links={NavbarLinks} clickHandler={setShowMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
