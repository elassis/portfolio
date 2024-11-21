import React from "react";
import PropTypes from "prop-types";
import { colors } from "@styles/colors";
import { StyledText } from "./TextStyles";
import { MAIN_EXCERT } from "../../../utils/constants";
import { Typewriter } from "react-simple-typewriter";

const Text = ({
  children,
  style = {},
  color = colors.lightGrey,
  fontSize = "20px",
  className,
  isDynamic = false,
}) => {
  return (
    <StyledText
      className={className}
      style={style}
      $fontSize={fontSize}
      $color={color}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.object,
  isDynamic: PropTypes.bool,
};

export default Text;
