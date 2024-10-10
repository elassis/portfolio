import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "./TitleStyles";
import { colors } from "../../../styles/colors";

const Title = ({
  children,
  style = {},
  showShadow = false,
  color = colors.white,
  weight = "700",
  withIcon = false,
  fontSize = "2.2rem",
  icon = null,
  className,
}) => {
  return (
    <StyledTitle
      style={style}
      $color={color}
      $weight={weight}
      $fontSize={fontSize}
      $showShadow={showShadow}
      className={className}
    >
      {!withIcon && children}
      {withIcon && <span>{children} {icon}</span>}
    </StyledTitle>
  );
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  style: PropTypes.object,
  showShadow: PropTypes.bool,
  withIcon: PropTypes.bool,
  icon: PropTypes.object,
  fontSize: PropTypes.string,
};

export default Title;
