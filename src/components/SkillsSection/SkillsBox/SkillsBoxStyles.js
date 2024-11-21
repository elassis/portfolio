
import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const StyledBox = styled.div`
width:270px;
min-width:270px;
height:350px;
margin:auto;
padding: 30px 20px 80px 20px;
background-color:#${colors.ligthBlue25};
border-radius: 20px;
box-sizing:border-box;
overflow:hidden;
z-index:10;

> .box_title {
font-size:1.625rem;
font-weight:600;
text-align:center;
margin-top:0;
text-align:left;
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
overflow-x:hidden;
overflow-y:auto;
`;

