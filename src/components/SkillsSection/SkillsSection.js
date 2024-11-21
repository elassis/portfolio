import React from "react";
import { Section } from "@common";
import { SKILL_EXCERT, SKILLS } from "../../utils/constants.js";
import SkillsBox from "./SkillsBox/SkillsBox.js";
import { InnerContainer } from "./SkillsStyles.js";

const SkillsSection = (props) => {
  const sectionProps = {
    displayText: true,
    sectionText: "skills",
    sectionSubtext: SKILL_EXCERT,
    sectionHeight: window.innerWidth < 400 && '645px',
    sectionId: "skills"
  };

  return (
    <Section {...sectionProps}>
      <InnerContainer>
        {SKILLS.map((skill) => (
          <SkillsBox key={skill.title} {...skill} />
        ))}
      </InnerContainer>
    </Section>
  );
};

export default SkillsSection;
