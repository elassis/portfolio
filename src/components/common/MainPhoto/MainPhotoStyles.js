import styled from "styled-components";

export const StyledMainPhoto = styled.div`
.container {  
  width: 100vw;
  height:395px;
  padding: 20px;
  box-sizing:border-box;
}

.circle {
  border-radius: 50%; 
} 

.outer {
  position:relative;
  width: 320px;
  height: 320px;
  margin:30px auto;
  background-color: #ffffff69;
}

 .middle {
  position:absolute;
  width: 310px;
  height: 310px;
  margin: 5px 10px 0 0;
  background-color: #ffffff94;
  
}

.inner {
  position:absolute;
  width: 300px;
  height: 300px;
  margin: 5px 5px 0 0;
  background-color: #fff;
}
 

@media(min-width:800px){
  .container {
    width:350px;
  }
  
}

`;