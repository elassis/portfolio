import React from "react";
import { StyledButton } from "./ButtonStyles";

const Button = ({ icon = null, text, isDisabled }) => {
  return (
    <StyledButton disabled={isDisabled}>
      {icon}
      <button disabled={isDisabled} type="submit">{text}</button>
    </StyledButton>
  )
}

export default Button;