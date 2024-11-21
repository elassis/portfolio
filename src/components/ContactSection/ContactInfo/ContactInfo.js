import React from "react";
import { v4 as uuidV4 } from "uuid";
import { motion } from "framer-motion";
import { Tag } from "@common";
import { colors } from "@styles/colors";
import Icon from "../../../assets/icons/Icon";
import { TagsData, socialMediaIcons } from "../../../utils/constants";
import {
  StyledInfoBody,
  InfoSection,
  StyledSocialLink,
} from "../ContactSectionStyles";

function ContactInfo(props) {
  const styles = {
    tagStyles: {
      marginBottom: "0px",
    },
    iconStyles: {
      justifyContent: "flex-start",
      width: "16%",
      svg: {
        path: {
          fill: `#${colors.ligthBlue25}`,
        },
      },
    },
    textStyles: {
      margin: "auto 0",
      width: "84%",
      color: `#${colors.blue}`,
      a: {
        textDecoration: "none !important",
        color: `#${colors.blue}`,
      },
    },
    sectionStyles: {
      height: "50%",
      display: "flex",
      gap: "20px",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  };

  return (
    <StyledInfoBody
      as={motion.div}
      initial={{
        y: window.innerWidth > 800 && 400,
        opacity: window.innerWidth > 800 && 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, delay: 0.5 },
      }}
      viewport={{ once: true }}
      $style={{ justifyContent: "space-between" }}
    >
      <InfoSection>
        {TagsData.map((tagData) => (
          <Tag
            key={uuidV4()}
            {...styles}
            iconName={tagData.iconName}
            text={
              <a style={styles.textStyles.a} href={tagData.attribute}>
                {tagData.text}
              </a>
            }
          />
        ))}
      </InfoSection>
      <InfoSection style={styles.sectionStyles}>
        {socialMediaIcons.map((smIcon) => (
          <Icon
            key={uuidV4()}
            name={smIcon.iconName}
            width="40px"
            height="40px"
            viewBox="0 0 35 32"
            strokeColor={colors.blue}
            fillColor={colors.ligthBlue25}
          />
        ))}
      </InfoSection>
    </StyledInfoBody>
  );
}

export default ContactInfo;
