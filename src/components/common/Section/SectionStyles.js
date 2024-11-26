import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const StyledSection = styled.div`
  width: 100%;
  height: ${(props) => props.$sectionHeight};
  margin: auto;
  background-color: #${colors.white};
  padding: 50px 30px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 400px) {
    padding: 50px 20px;
    box-sizing: border-box;
  }

  .section-header {
    max-width: 900px;
    margin: auto;

    @media (max-width: 800px) {
      max-width: 600px;
      height: fit-content;
      p:first-child {
        text-align: left;
      }
    }

    .section-paragraph {
      font-weight: 300;
      margin-bottom: 30px;
    }
  }
`;

export const ChildrenContainer = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 20px;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};

  @media (max-width: 800px) {
    max-width: 600px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 400px) {
    padding: 0px;
  }

  ${(props) => props.$containerStyles};
`;
