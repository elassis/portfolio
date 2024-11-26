import styled from "styled-components";


export const InnerContainer = styled.div`
  max-width:900px;
  display:flex;
  gap:40px;

  @media(max-width:800px){
    width:100%;
    overflow:auto;
    gap:20px;
    justify-content:space-evenly;
  }


`;