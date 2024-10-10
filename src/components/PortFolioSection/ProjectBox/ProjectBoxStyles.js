import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Title, Text } from "@common";

export const StyledProjectContainer = styled.div`
  position:relative;
  width:270px;
  min-width:270px;
  height:350px;
  display:flex;
  flex-direction:column;
  justify-content:space-between; 
  background-color:#${colors.white};
  border-radius: 20px;
  box-sizing:border-box;
  overflow:hidden;
  -webkit-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  -moz-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  z-index:10;
`;

export const ImageRow = styled.img`
width:100%;
height:40%;
border-bottom:1px solid #eee;
`;

export const ProjectTitle = styled(Title)`
  display:flex;
  align-items:center;
  max-height:55px;
  padding:0 20px;
  margin:0;
  font-size:1.2rem;
  text-align:left;
  color:#${colors.blue};
  overflow:auto;
`;

export const ProjectDescription = styled(Text)`
  text-align:left;
  font-size:1rem;
  height:80px;
  overflow:auto;
  margin-top:0;
  margin-bottom:0px;
  padding:0 20px;
  color:#${colors.lightGrey};
`;

export const TechRow = styled.div`
height:10%;
display:flex;
align-items:center;
gap:30px;
padding:0 20px 10px 20px;

.tech-icons, .links {
  display:flex;
}

.tech-icons{
  width:65%;
  gap:10px;

  img {
    width:30px;
    height:30px;
  }
}

.links {
  width:35%;
  gap:0;
  justify-content: space-between;
  cursor:pointer;

  svg:hover {
    transform:scale(1.2);
    transition:all 1s ease;
  }
}



`;
