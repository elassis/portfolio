import styled from "styled-components";

export const NavigationButton = styled.div`
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:${props => props.selected ? `#${props.$active}` : `#${props.$inactive}`};
`;

export const NavigationContainer = styled.div`
  display:flex;
  gap:20px;

  @media(min-width:1000px){
    display:${props => props.$displayOnMobile ? 'flex' : 'none'};
  }
`;