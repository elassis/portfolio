import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;

  @media (max-width:800px){
    gap:10px !important;
  }

  @media (max-width:500px){
    .carousel-container {
      width:320px;
    }
  }

`;
