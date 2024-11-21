import React from "react";
import { Link } from "@common";
import { v4 as uuidv4 } from "uuid";
import { StyledMenu } from "../NavbarStyles";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ Links, clickHandler }) => {
  return (
    <AnimatePresence>
      <StyledMenu
        as={motion.div}
        initial={{ x: -400 }}
        animate={{
          x: 0,
          transition: {
            type: "tween",
            stiffness: "100",
          },
        }}
      >
        {Links.map((link) => (
          <div key={uuidv4()} onClick={() => clickHandler(false)}>
            <Link key={uuidv4()} {...link} />
          </div>
        ))}
      </StyledMenu>
    </AnimatePresence>
  );
};

export default MobileMenu;
