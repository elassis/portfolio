import styled from "styled-components";
import { fonts } from "@styles/fonts";
import { colors } from "@styles/colors";

export const StyledTag = styled.div`
  width: 100%;
  height:fit-content;
  display:flex;
  gap: 10px;  
  margin-bottom:20px;
`;

export const TagIcon = styled.div`
  width: 30%;
  height: 60px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50px;
  overflow:hidden;

  img {
    width:75%;
    height:auto;
  }
    
  ${props => props.$style} 
`;

export const TagText = styled.div`
  width: 70%;
  height: 40px;
  margin: auto;
  display:flex;
  align-items:center;
  font-size:1rem;
  font-family:${fonts.defaultFont};
  color: #${colors.lightGrey};
  ${props => props.$style} 
`;