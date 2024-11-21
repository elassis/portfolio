import React from "react";
import { StyledTag, TagIcon, TagText } from "./TagStyles";
import Icon from "../../../assets/icons/Icon";


function Tag({
  src = null,
  text,
  iconName = null,
  textStyles = {},
  iconStyles = {},
  imgStyles = {},
  tagStyles = {},
}) {
  return (
    <StyledTag style={tagStyles}>
      <TagIcon $style={iconStyles}>
        {src && !iconName ? <img src={src} style={imgStyles} /> :
          <Icon width="40px" height="40px" viewBox="0 0 40 35" name={iconName} />}
      </TagIcon>
      <TagText $style={textStyles}>{text}</TagText>
    </StyledTag>
  );
}

export default Tag;