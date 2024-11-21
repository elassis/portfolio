import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  NavigationButton,
  NavigationContainer,
} from "./NavigationButtonsStyles";
import { motion } from "framer-motion";

function NavigationButtons({ buttonsAmount, buttonsHandler }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickHandler = (index) => {
    setSelectedIndex(index);
    buttonsHandler(index);
  };

  const setControls = useCallback(
    (elementsLength) => {
      let buttonsArr = [];
      let initialId = 0;

      while (initialId < elementsLength) {
        buttonsArr.push({ id: initialId });
        initialId++;
      }

      return buttonsArr;
    },
    [buttonsAmount]
  );

  const buttons = setControls(buttonsAmount);

  return (
    <NavigationContainer
      as={motion.div}
      initial={{ x: window.innerWidth > 400 && -400, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { delay: 1, duration: 1 } }}
      viewport={{ once: true }}
    >
      {buttons.map((button) => (
        <NavigationButton
          key={button.id}
          selected={selectedIndex == button.id}
          onClick={() => onClickHandler(button.id)}
        />
      ))}
    </NavigationContainer>
  );
}

NavigationButtons.propTypes = {
  buttonsHandler: PropTypes.func.isRequired,
  showMobile: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
};

export default NavigationButtons;
