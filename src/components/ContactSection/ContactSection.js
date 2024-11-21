import React from "react";
import { Section } from "@common";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import { StyledSectionContainer } from "./ContactSectionStyles";
import { CONTACT_EXCERT } from "../../utils/constants";

const ContactSection = (props) => {
  const sectionProps = {
    displayText: true,
    sectionText: "contact",
    sectionSubtext: CONTACT_EXCERT,
    sectionHeight: "fit-content",
    sectionId: "contact",
  };

  return (
    <Section {...sectionProps}>
      <StyledSectionContainer>
        <ContactForm />
        <ContactInfo />
      </StyledSectionContainer>
    </Section>
  );
};

export default ContactSection;
