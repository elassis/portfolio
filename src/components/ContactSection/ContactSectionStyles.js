import styled from "styled-components";
import { colors } from "@styles/colors";
import { fonts } from "@styles/fonts";

export const StyledFormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 415px;
  border-radius: 24px;
  box-sizing: border-box;
  ${(props) => props.$style}

  @media (min-width:900px) {
    width: 60%;
  }

  `;

export const StyledContactForm = styled.form`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  input, textarea {
    padding: 24px;
    box-sizing: border-box;
    font-size:1rem;
    font-family: ${fonts.default};  
    background-color:#${colors.ligthBlue25};
    border:none;
  }

  input {
    height: 44px;
    border-radius: 31px;
  }

  input::placeholder, textarea::placeholder {
    color:#${colors.lightGrey};
    font-family: ${fonts.default}; 
  }

  textarea {
    height:263px;
    border-radius: 20px;
  }
}
`;

export const StyledInfoBody = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 30px 30px;
  height: fit-content;
  border-radius: 24px;
  box-sizing: border-box;
  background-color: #${colors.ligthBlue25};

  @media(max-width:400px){
    margin-top:20px;
    justify-content:center !important;
  }
  
  ${(props) => props.$style}

  
`;

export const StyledSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  @media (min-width: 900px) {
    width: 100%;
    flex-direction: row;
  }

  @media (max-width:400px){
    flex-direction:column-reverse;
    align-items:center;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 50%;
  svg {
    path {
      stroke: #${colors.blue};
    }
  }

  @media (max-width:400px) {
    width: 100%;
    margin-top:20px;
    justify-content: center !important;
  }

`;

export const FormFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Response = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  border-radius: 30px;
  text-transform: capitalize;
  background-color: #${(props) => (props.$status === 200 ? `${colors.green25}` : `${colors.red25}`)};
  color: #${(props) => (props.$status === 200 ? `${colors.green100}` : `${colors.red100}`)};
  font-family: ${fonts.default};
`;
