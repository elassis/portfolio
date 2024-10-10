import React from "react";
import { StyledMainPhoto } from "./MainPhotoStyles";

const MainPhoto = () => {
  return (
    <StyledMainPhoto data-testid="photo-container">
      <div className="container">
        <div className="outer circle">
          <div className="middle circle">
            <div className="inner circle">
            </div>
          </div>
        </div>
      </div>
    </StyledMainPhoto>
  );
};


export default MainPhoto;