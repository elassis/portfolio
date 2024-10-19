import React from "react";
import { Section, Title, Text, MainPhoto } from "@common";

const HeroSection = (props) => {
  return (
    <Section sectionHeight={"fit-content"} sectionId="hero">
      <MainPhoto />
      <div>
        <Title showShadow children={"Hi There!, I'm Enmanuel"} />
        <Text isDynamic />
      </div>
    </Section>
  );
};

export default HeroSection;
