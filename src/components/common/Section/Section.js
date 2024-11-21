import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/colors";
import { color, motion } from "framer-motion";
import { Title, Text } from "@common";
import { StyledSection, ChildrenContainer } from "./SectionStyles";

const Section = ({
  children,
  sectionId,
  styles = {},
  direction = "row",
  containerStyles = {},
  sectionHeight = "600px",
  backgroundColor = colors.blue,
  displayText = false,
  sectionText = "",
  sectionSubtext = "",
}) => {
  return (
    <StyledSection
      $backgroundColor={backgroundColor}
      $sectionHeight={sectionHeight}
      data-testid="section"
      style={styles}
      id={sectionId}
    >
      {displayText && (
        <motion.div
          whileInView={{ y: 0 }}
          className="section-header"
          transition={{ type: "spring", duration: 1 }}
          initial={{ y: window.innerWidth > 800 && 350 }}
          viewport={{ once: true }}
        >
          <Title color={colors.blue} children={sectionText} />
          <Text
            color={colors.lightGrey}
            className="section-paragraph"
            style={{ maxWidth: "100%", marginBottom: "30px", padding: '0px' }}
          >
            {sectionSubtext}
          </Text>
        </motion.div>
      )}
      <ChildrenContainer
        direction={direction}
        $containerStyles={containerStyles}
      >
        {children}
      </ChildrenContainer>
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string,
  sectionHeight: PropTypes.string,
  containerStyles: PropTypes.object,
  styles: PropTypes.object,
};

export default Section;
