import React from "react";
import { StyledLink } from "./StyledLink";
import { colors } from "../../../styles/colors";
import Icon from "../../../assets/icons/Icon";

const Link = ({ route, text, logoName = null, type, color = colors.white, linkStyles = {} }) => {
  return (
    <StyledLink
      type={type}
      href={route}
      $color={color}
      style={linkStyles}
    >
      {logoName && (
        <Icon
          name={logoName}
          width="25px"
          height="25px"
          viewBox="0 0 30 30"

        />)}
      {text}
    </StyledLink>)
}

export default Link;