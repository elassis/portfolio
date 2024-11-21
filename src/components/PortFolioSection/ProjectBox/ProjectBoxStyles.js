import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Title, Text } from "@common";
import { projectImg } from "../../../assets/images";

export const StyledProjectContainer = styled.div`
  display: ${(props) => (props.$isSelected ? "flex" : "none")};
  position: relative;
  width: 500px;
  height: 392px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
  background-color: #${colors.ligthBlue25};
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 375px;
  height: 396px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: url(${projectImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;

  > div > div > img {
    width: 25px;
    height: 24px;
    border-radius: 50%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 380px;
  height: 45px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  gap: 10px;

  > a {
    &:hover {
      -webkit-box-shadow: 0px 7px 24px -10px rgba(99, 94, 99, 1);
      -moz-box-shadow: 0px 7px 24px -10px rgba(99, 94, 99, 1);
      box-shadow: 0px 7px 24px -10px rgba(99, 94, 99, 1);
    }
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

//

export const ProjectTitle = styled(Title)`
  color: #${colors.blue};
  height: 44px;
  width: 100%;
  font-size: 2.188rem;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProjectDescription = styled(Text)`
  text-align: left;
  font-size: 1rem;
  height: 88px;
  overflow: auto;
  margin-top: 0;
  margin-bottom: 0px;
  padding: 0px;
  max-width: 440px;
  color: #${colors.lightGrey};
`;
