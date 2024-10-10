import styled from "styled-components";

export const SkillComponentContainer = styled.div`
  position:relative;
  width:310px;
  height:390px;
  padding:20px;
  overflow:hidden;
  
  @media(min-width:1000px){
   width:835px;
  }
`;

export const InnerContainer = styled.div`
  position:absolute;
  width:1000px;
  display:flex;
  gap:20px;
  transition: all 1000ms ease;
  margin-left: ${props => props.$scroll ? `-${props.$scroll}` : '0px'};
 
  @media(min-width:1000px){ 
    
  }
`;