import React, { useState } from "react";
import { Section, Title, Carousel, Text } from "@common";
import { colors } from "../../styles/colors";
import ProjectBox from "./ProjectBox/ProjectBox.js";
import { PROJECTS, SKILL_EXCERT } from "../../utils/constants.js";


const PortfolioSection = (props) => {

  const controlsDesktop = [
    { id: 1, margin: '0px' },
    { id: 2, margin: '300px' },
  ];

  const controlsMobile = [
    { id: 1, margin: '0px' },
    { id: 2, margin: '280px' },
    { id: 3, margin: '580px' },
    { id: 4, margin: '880px' },
  ];

  const paragraphProps = {
    children: SKILL_EXCERT,
    color: colors.white,
    className: "section-paragraph",
    style: { marginTop: 0, marginBottom: '20px', fontWeight: 300 },
  };

  const sectionProps = {
    direction: "column",
    sectionHeight: "fit-content",
    backgroundColor: colors.blue,
    sectionId: "portfolio"
  };

  return (
    <Section {...sectionProps}>
      <div className="section-header">
        <Title color={colors.white} style={{ marginBottom: '30px' }} children={"Portfolio"} />
        <Text {...paragraphProps} />
      </div>
      <Carousel
        showMobile
        activeColor={colors.white}
        inativeColor={colors.lightGrey25}
        controlButtons={window.innerWidth > 400 ? controlsDesktop : controlsMobile}
        childrenLength={PROJECTS.length}>
        {PROJECTS.map(
          project => <ProjectBox
            key={project.projectName}
            {...project}
          />
        )}
      </Carousel>
    </Section>
  );
};

export default PortfolioSection;