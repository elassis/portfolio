import styled from "styled-components";
import { colors } from "@styles/colors";
import { fonts } from "@styles/fonts";

export const StyledFormBody = styled.div`
  width:80vw;
  display:flex;
  flex-direction:column;
  padding: 30px 20px;
  height: 456px;
  border-radius: 24px;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  -moz-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  ${props => props.$style}

  @media (min-width:900px){
   width: 60%;

  }
`;

export const StyledInfoBody = styled.div`
  width:80vw;
  display:flex;
  flex-direction:column;
  padding: 30px 20px;
  height: 456px;
  border-radius: 24px;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  -moz-box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  box-shadow: 0px 7px 24px -10px rgba(99,94,99,1);
  ${props => props.$style}

  @media (min-width:900px){
   width: 40%;
  }
`;

export const StyledSectionContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  gap:30px;
  @media (min-width:900px){  
    width:92%;
    flex-direction:row-reverse;

  }
`;

export const StyledContactForm = styled.form`
  width:100%;
  height:100%;
  display:flex;
  gap:15px;
  flex-direction:column;
  justify-content: space-between;
  input, textarea {
    border: 1px solid #eee;
    padding: 24px;
    box-sizing: border-box;
    font-size:1rem;
    font-family: ${fonts.default};  
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

export const StyledButton = styled.div`
  display:flex;
  width:100px;
  justify-content: flex-start;
  gap: 6px;
  align-self: flex-end;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color:#${colors.blue};

  button {
    display: block;    
    padding: 11px 0px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 600;
    color: #${colors.white};

  }
`;

export const StyledSocialLink = styled.a`
  padding: 8px 10px;
  background-color: #${colors.blue};
  border-radius: 50%;
`;

export const InfoSection = styled.div`
  width:100%;
  height:180px;
`;

export const InfoSeparator = styled.div`
  width:100%;
  height:1px;
  background-color:#${colors.lightGrey25};
`;

export const FormFooter = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:flex-end;
  gap:10px;
`;

export const Response = styled.div`
  max-width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  padding:10px;
  border-radius:30px;
  text-transform:capitalize;
  background-color:#${props => props.$status === 200 ? `${colors.green25}` : `${colors.red25}`};
  color:#${props => props.$status === 200 ? `${colors.green100}` : `${colors.red100}`};
  `;


