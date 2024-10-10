import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavigationButton, NavigationContainer } from "./NavigationButtonsStyles";
import { colors } from "@styles/colors";


function NavigationButtons({ scrollControl, buttonsData, showMobile = false, activeColor = colors.blue, inactiveColor = colors.lightGrey }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickHandler = (id, margin) => {
    setSelectedIndex(id);
    scrollControl(margin);
  }

  return (
    <NavigationContainer $displayOnMobile={showMobile}>
      {buttonsData.map(
        button => <NavigationButton
          selected={selectedIndex == button.id ||
            (selectedIndex == 0 && button.id == 1)}
          onClick={() => onClickHandler(button.id, button.margin)}
          key={button.id}
          $active={activeColor}
          $inactive={inactiveColor}
        />
      )}
    </NavigationContainer>
  );
}

NavigationButtons.propTypes = {
  scrollControl: PropTypes.func.isRequired,
  showMobile: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
}

export default NavigationButtons;