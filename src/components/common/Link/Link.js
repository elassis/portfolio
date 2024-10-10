import React from "react";
import { StyledLink } from "./StyledLink";
import { colors } from "../../../styles/colors";

const Link = ({ route, text, type, color = colors.white }) => {
  return <StyledLink type={type} href={route} $color={color}>{text}</StyledLink>;
}

export default Link;