import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/colors";
import { StyledSection, ChildrenContainer } from "./SectionStyles";

const Section = ({
  children,
  backgroundColor = colors.blue,
  sectionHeight = "600px",
  containerStyles = {},
  styles = {},
  direction = 'row',
}) => {
  return (
    <StyledSection
      $backgroundColor={backgroundColor}
      $sectionHeight={sectionHeight}
      data-testid="section"
      style={styles}
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
