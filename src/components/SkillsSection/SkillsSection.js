import React from "react";
import { Section, Title, Text, Carousel } from "@common";
import { colors } from "@styles/colors";
import { SKILL_EXCERT, SKILLS } from "../../utils/constants.js";
import SkillsBox from "./SkillsBox/SkillsBox.js";

const SkillsSection = (props) => {
  const sectionProps = {
    direction: "column",
    sectionHeight: "fit-content",
    backgroundColor: colors.white,
    sectionId: "skills"
  };

  const paragraphProps = {
    children: SKILL_EXCERT,
    color: '#000000',
    className: "section-paragraph",
    style: { marginTop: 0, marginBottom: '20px', fontWeight: 300, color: `#${colors.lightGrey}` },
  };

  const titleProps = {
    color: colors.blue,
    ontSize: "2.5rem",
    children: "My Skills",
    style: { marginBottom: '30px' }
  };

  const controls = [
    { id: 1, margin: '0px' },
    { id: 2, margin: '350px' },
    { id: 3, margin: '690px' },
  ];

  return (
    <Section {...sectionProps} >
      <div className="section-header">
        <Title {...titleProps} />
        <Text {...paragraphProps} />
      </div>
      <Carousel controlButtons={controls}>
        {SKILLS.map(skill => <SkillsBox key={skill.title} {...skill} />)}
      </Carousel>
    </Section>
  );
};

export default SkillsSection;
