import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const StyledButton = styled.div`
  display:flex;
  width:100px;
  justify-content: flex-start;
  gap: 6px;
  align-self: flex-end;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color:#${props => props.disabled ? `${colors.lightGrey25}` : `${colors.blue}`};

  button {
    display: block;    
    padding: 11px 0px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 600;
    color: #${colors.white};

  }
`;