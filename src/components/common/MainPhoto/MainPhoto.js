import React from "react";
import { StyledMainPhoto } from "./MainPhotoStyles";
import { motion } from "framer-motion";
import { enmaImage } from "../../../assets/images";

const MainPhoto = (props) => {
  return (
    <StyledMainPhoto
      data-testid="photo-container"
      children={<img alt="main-photo" src={enmaImage} />}
      as={motion.div}
      initial={{ y: -650 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 2 }}
    />
  );
};

export default MainPhoto;
