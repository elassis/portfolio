import React, { useState } from "react";
import { SkillComponentContainer, InnerContainer } from './CarouselStyles';
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import { colors } from "@styles/colors";

function Carousel({ controlButtons = [], startLeftMargin = '0px', children, showMobile = false, childrenLength = 3, activeColor = colors.blue, inactiveColor = colors.lightGrey }) {
  const [scroll, setScroll] = useState(startLeftMargin);

  const scrollHandler = (margin) => {
    setScroll(margin);
  }

  return (
    <>
      <SkillComponentContainer>
        <InnerContainer $scroll={scroll} $setToStart={childrenLength > 3}>
          {children}
        </InnerContainer>
      </SkillComponentContainer>
      {controlButtons.length > 1 &&
        <NavigationButtons
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          showMobile={showMobile}
          buttonsData={controlButtons}
          scrollControl={scrollHandler}
        />
      }
    </>
  );
};

export default Carousel;