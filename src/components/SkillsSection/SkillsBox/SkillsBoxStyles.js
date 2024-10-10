
import styled from "styled-components";

export const StyledBox = styled.div`
width:270px;
height:350px;
margin:auto;
padding: 30px 20px 80px 20px;
background-color:white;
border-radius: 20px;
box-sizing:border-box;
overflow:hidden;
-webkit-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
-moz-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
z-index:10;

> .box_title {
font-size:1.8rem;
font-weight:600;
text-align:center;
margin-top:0;
}

> p {
    text-transform:capitalize;
    text-align:left;
  }

  @media(min-width:1000px){
    margin:auto 0;
  }


`;

export const DataContainer = styled.div`
width:100%;
height:100%;
overflow:auto;
`;

