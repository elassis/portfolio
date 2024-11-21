import React from "react";
import {
  StyledProjectContainer,
  TechContainer,
  ButtonsContainer,
  ProjectTitle,
  ProjectDescription,
} from "./ProjectBoxStyles";
import { boxVariants } from "./Variants";
import { motion } from "framer-motion";
import { colors } from "@styles/colors";
import { Tag, Link } from "@common";
import { v4 as uuid } from "uuid";

const ProjectBox = ({
  projectName,
  description,
  technologies,
  links,
  isSelected,
}) => {

  const techStyles = {
    tagStyles: {
      marginBottom: "0px",
    },
    iconStyles: {
      width: "fit-content",
      height: "auto",
    },
    textStyles: {
      height: "auto",
      margin: "0",
      textTransform: "capitalize",
      color: `#${colors.black}`,
    },
  };

  const linkStyles = {
    width: "130px",
    height: "30px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    backgroundColor: `#${colors.blue}`,
    fontSize: "12px",
    fontWeight: "600",
    transition: "all 0.3s ease",

    "&:hover": {
      marginTop: "-5px",
    },

    svg: {
      margin: "0 !important",
      path: {
        fill: `#${colors.blue}`,
        stroke: `#${colors.white}`,
      },
    },
  };

  const newStyles = {
    ...linkStyles,
    backgroundColor: `#${colors.white}`,
    color: `#${colors.blue}`,
    svg: {
      path: {
        fill: `#${colors.white}`,
        stroke: `#${colors.blue}`,
      },
    },
  };

  return (
    <StyledProjectContainer
      as={motion.div}
      variants={boxVariants}
      initial="init"
      whileInView="end"
      exit={{ y: -400 }}
      $isSelected={isSelected}
    >
      <ProjectTitle children={projectName} />
      <TechContainer>
        {technologies.map((tech) => (
          <Tag key={uuid()} {...tech} {...techStyles} />
        ))}
      </TechContainer>
      <ProjectDescription children={description} />
      <ButtonsContainer>
        {links.map((link) => (
          <Link
            key={uuid()}
            {...link}
            linkStyles={link.text.includes("github") ? newStyles : linkStyles}
          />
        ))}
      </ButtonsContainer>
    </StyledProjectContainer>
  );
};

export default ProjectBox;
