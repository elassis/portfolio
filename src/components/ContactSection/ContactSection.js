import React from "react";
import { Section, Title } from "@common";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import { colors } from "@styles/colors";
import { StyledSectionContainer } from "./ContactSectionStyles";

const ContactSection = (props) => {

  const sectionProps = {
    direction: "column",
    sectionHeight: "fit-content",
    backgroundColor: colors.white,
    sectionId: "contact"
  };

  return (
    <Section {...sectionProps}>
      <Title color={colors.blue} style={{ marginBottom: '30px' }}>Contact</Title>
      <StyledSectionContainer>
        <ContactForm />
        <ContactInfo />
      </StyledSectionContainer>
    </Section>
  )
}

export default ContactSection;