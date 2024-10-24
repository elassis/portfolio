import React, { useState } from "react";

const UseScroll = (props) => {
  const [scroll, setScroll] = useState(0);

  document.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  })

  return { scroll };
}

export default UseScroll;