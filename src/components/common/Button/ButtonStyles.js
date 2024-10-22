import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const StyledButton = styled.div`
  display:flex;
  width:100px;
  justify-content: center;
  gap: 6px;
  align-self: flex-end;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 30px;
  transition:all .5s ease-out;
  background-color:#${props => props.disabled ? `${colors.lightGrey25}` : `${colors.blue}`};
  cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover{
    transform:${props => props.disabled ? 'none' : 'scale(1.1)'};
  }
  

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
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;