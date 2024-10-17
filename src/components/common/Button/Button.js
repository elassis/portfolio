import React from "react";
import { StyledButton } from "./ButtonStyles";
import Icon from "../../../assets/icons/Icon";

const Button = ({ iconName, text, isDisabled }) => {
  return (
    <StyledButton disabled={isDisabled}>
      <Icon name={iconName} />
      <button disabled={isDisabled} type="submit">{text}</button>
    </StyledButton>
  )
}

export default Button;