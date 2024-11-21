import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@common";
import { colors } from "../../styles/colors";
import ProjectBox from "./ProjectBox/ProjectBox.js";
import { PROJECTS, SKILL_EXCERT } from "../../utils/constants.js";
import { ImageContainer } from "./ProjectBox/ProjectBoxStyles.js";
import { imageVariants } from "./ProjectBox/Variants.js";
import { InnerContainer, Row } from "./PortFolioSectionStyles.js";
import NavigationButtons from "../common/Carousel/NavigationButtons/NavigationButtons.js";

const PortfolioSection = (props) => {
  const [index, setIndex] = useState(0);

  const onClickHandler = (number) => {
    setIndex(number);
  };

  const sectionProps = {
    displayText: true,
    sectionText: "portfolio",
    sectionSubtext: SKILL_EXCERT,
    sectionHeight: "fit-content",
    sectionId: "portfolio",
  };

  return (
    <Section {...sectionProps}>
      <InnerContainer>
        <Row>
          <ImageContainer
            as={motion.div}
            variants={imageVariants}
            initial="init"
            whileInView="end"
            viewport={{ once: true }}
          />
          <div className="carousel-container">
            {PROJECTS.map((project) => (
              <ProjectBox
                key={project.id}
                isSelected={index === project.id}
                {...project}
              />
            ))}
          </div>
        </Row>
        {PROJECTS.length > 1 && (
          <NavigationButtons
            buttonsAmount={PROJECTS.length}
            buttonsHandler={onClickHandler}
          />
        )}
      </InnerContainer>
    </Section>
  );
};

export default PortfolioSection;
