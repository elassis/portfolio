import React from "react";
import {
  ProjectTitle,
  ProjectDescription,
  ImageRow,
  TechRow,
  StyledProjectContainer
} from "./ProjectBoxStyles";
import Lists from "./Lists";

const ProjectBox = ({
  thumbnail,
  projectName,
  description,
  technologies,
  links
}) => {
  return (
    <StyledProjectContainer>
      <ImageRow src={thumbnail} />
      <ProjectTitle>{projectName}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechRow>
        <Lists className="tech-icons" list={technologies} />
        <Lists className="links" list={links} />
      </TechRow>
    </StyledProjectContainer>
  )
}

export default ProjectBox;