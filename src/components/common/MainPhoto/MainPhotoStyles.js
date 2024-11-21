import styled from "styled-components";

export const StyledMainPhoto = styled.div`
  width: 446px;
  height: 446px;
  box-sizing:border-box;
  border-radius: 50%;
  overflow:hidden;
  -webkit-box-shadow: 0px 0px 52px -29px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 52px -29px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 52px -29px rgba(0,0,0,0.75);

  > img {
    width:100%;
    height:auto;
  }

  @media (max-width:400px){
    width: 340px;
    height: 337px;
  }
`;