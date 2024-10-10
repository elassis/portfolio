import React from "react";
import { v4 as uuidV4 } from "uuid";
import { Tag } from "@common";
import { colors } from "@styles/colors";
import Icon from "../../../assets/icons/Icon";
import { TagsData, socialMediaIcons } from "../../../utils/constants";
import { StyledInfoBody, InfoSection, InfoSeparator, StyledSocialLink } from "../ContactSectionStyles";

function ContactInfo(props) {

  const styles = {
    iconStyles: {
      justifyContent: 'flex-start',
      width: '16%',
    },
    textStyles: {
      margin: 'auto 0',
      width: '84%',
      color: `#${colors.blue}`,
      a: {
        textDecoration: 'none !important',
        color: `#${colors.blue}`
      }
    },
    sectionStyles: {
      height: '100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  }

  return (
    <StyledInfoBody $style={{ justifyContent: 'space-between' }}>
      <InfoSection>
        {TagsData.map(tagData => <Tag key={uuidV4()}
          {...styles}
          iconName={tagData.iconName}
          text={<a
            style={styles.textStyles.a}
            href={tagData.attribute}>
            {tagData.text}</a>}
        />)}
      </InfoSection>
      <InfoSeparator />
      <InfoSection style={styles.sectionStyles}>
        {socialMediaIcons.map(smIcon => <StyledSocialLink key={uuidV4()}
          href={smIcon.href}>{
            <Icon name={smIcon.iconName}
              width="40px"
              height="40px"
              viewBox="0 0 35 32"
            />
          }</StyledSocialLink>)}
      </InfoSection>
    </StyledInfoBody>
  )
}

export default ContactInfo;