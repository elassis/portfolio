import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { colors } from "@styles/colors";
import { StyledBox, DataContainer } from "./SkillsBoxStyles";
import { Tag, Text } from "@common";

const SkillsBox = ({ title, tags, durationTime = 1 }) => {
  const styling = {
    imgStyles: { width: "100%" },
    iconStyles: { width: "40px", height: "40px" },
    tagStyles: { width: "230px", height: "40px", gap: "0px" },
  };

  return (
    <StyledBox
      as={motion.div}
      initial={{ y: window.innerWidth > 800 && 400 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", duration: durationTime }}
      viewport={{ once: true }}
    >
      <Text className={"box_title"} color={colors.blue}>
        {title}
      </Text>
      <DataContainer>
        {tags.map((tag) => (
          <Tag key={tag.text} {...styling} {...tag} />
        ))}
      </DataContainer>
    </StyledBox>
  );
};

SkillsBox.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default SkillsBox;
