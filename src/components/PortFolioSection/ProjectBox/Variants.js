export const boxVariants = {
  init: { x: 200, opacity: 0 },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay: 0.5
    }
  },
  viewport: { once: true }
};

export const imageVariants = {
  init: {
    y: 400
  },
  end: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
    }
  },

};

export const dataVariants = {
  init: {
    y: 400,
    opacity: 0
  },
  end: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
    }
  },
};




