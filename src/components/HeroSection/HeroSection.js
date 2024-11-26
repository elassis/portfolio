import React from "react";
import { Section, Title, Text, MainPhoto } from "@common";
import { colors } from "../../styles/colors";
import { motion } from "framer-motion";
import { MAIN_EXCERT } from "../../utils/constants";
import { HeroContainer } from "./HeroSectionStyles";

const HeroSection = (props) => {
  return (
    <Section
      sectionId="hero"
      sectionHeight={"fit-content"}
      backgroundColor={colors.white}
      styles={{ padding: window.innerWidth > 400 && "100px 30px" }}
      containerStyles={{ justifyContent: "space-between" }}
    >
      <MainPhoto />
      <HeroContainer
        as={motion.div}
        initial={{ y: 650 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <Title children={"Hi There!, I'm Enmanuel"} color={colors.blue} />
        <Text
          className="hero_text"
          children={MAIN_EXCERT}
        />
      </HeroContainer>
    </Section>
  );
};

export default HeroSection;
