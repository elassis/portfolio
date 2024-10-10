import styled from "styled-components";

export const StyledSection = styled.div`
  width: 100%;
  height: ${(props) => props.$sectionHeight};
  background-color: #${(props) => props.$backgroundColor};
  padding: 50px 0;
`;

export const ChildrenContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 20px;
  flex-direction: ${props => props.direction ? props.direction : 'row'};

  @media (max-width: 800px) {
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    @media(min-width:800px){
      .section-header{
        width: 92%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .section-paragraph{
        max-width: 100%;
        margin-top:20px !important;
        line-height:1.8rem;
      }
    }
    
  ${(props) => props.$containerStyles};
`;
