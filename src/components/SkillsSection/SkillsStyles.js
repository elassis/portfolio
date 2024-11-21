import styled from "styled-components";


export const InnerContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;

  @media(max-width:768px){
    width:600px;
    overflow:auto;
    gap:20px;
    justify-content:space-evenly;
  }

  @media(max-width:400px){
    width:325px;
  }
`;