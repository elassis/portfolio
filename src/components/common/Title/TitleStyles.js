import styled from "styled-components";
import { fonts } from "@styles/fonts";

export const StyledTitle = styled.p`
  margin:0;
  text-transform: capitalize;
  text-align:justify;
  font-size: ${(props) => props.$fontSize};
  font-family: ${fonts.defaultFont};
  color: #${(props) => props.$color};
  font-weight: ${(props) => props.$weight};
  padding:0;
  ${(props) =>
    props.$showShadow &&
    `
    text-shadow: 5px 2px 15px #2b282b;
    
    `}

    > span {
      display:flex;
      justify-content:flex-start;
      gap:20px;

      @media (max-width:800px){
        justify-content:center;
      }
    }
    
    @media (max-width:800px){
      text-align:center;
      margin: 10px 0px;
    
    }
`;
