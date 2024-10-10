import React from "react";
import PropTypes from "prop-types";
import { colors } from "@styles/colors";
import { StyledText } from "./TextStyles";
import { MAIN_EXCERT } from "../../../utils/constants";
import { Typewriter } from "react-simple-typewriter";

const Text = ({ children, style = {}, color = colors.white, fontSize = "20px", className, isDynamic = false }) => {

  const textArr = [
    { key: 0, text: MAIN_EXCERT.slice(0, 70) },
    {
      key: 1,
      text: (
        <span
          style={{
            display: "inline-block",
            height: "27px",
            width: "78px",
            fontWeight: "700",
          }}
        >
          <Typewriter loop={false} words={["design", "develop", "create"]} />
        </span>
      ),
    },
    { key: 2, text: MAIN_EXCERT.slice(86) },
  ];
  return (
    <StyledText className={className} style={style} $fontSize={fontSize} $color={color}>
      {!isDynamic && children}
      {isDynamic && textArr.map((e) => {
        return <span key={e.key}>{e.text}</span>;
      })}

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
