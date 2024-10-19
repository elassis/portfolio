import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/colors";
import { StyledSection, ChildrenContainer } from "./SectionStyles";

const Section = ({
  children,
  sectionId,
  styles = {},
  direction = 'row',
  containerStyles = {},
  sectionHeight = "600px",
  backgroundColor = colors.blue,
}) => {
  return (
    <StyledSection
      $backgroundColor={backgroundColor}
      $sectionHeight={sectionHeight}
      data-testid="section"
      style={styles}
      id={sectionId}
    >
      <ChildrenContainer direction={direction} $containerStyles={containerStyles}>
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
