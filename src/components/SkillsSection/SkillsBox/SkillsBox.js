import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/colors";
import Text from "../../common/Text/Text";
import { StyledBox, DataContainer } from "./SkillsBoxStyles";
import { Tag } from "@common";

const SkillsBox = ({ title, tags }) => {

  return (
    <StyledBox>
      <Text className={"box_title"} color={colors.blue}>{title}</Text>
      <DataContainer>
        {tags.map(tag => <Tag key={tag.text} {...tag} />)}
      </DataContainer>
    </StyledBox>
  );
};

SkillsBox.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

export default SkillsBox;