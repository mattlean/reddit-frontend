export const errVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

export const postVariants = {
  ...errVariants,
  hover: {
    backgroundColor: '#c3dafe',
    scale: 1.1,
  },
  initial: {
    opacity: 0,
    backgroundColor: '#c6f6d5',
  },
  visible: {
    opacity: 1,
    backgroundColor: '#fff',
  },
}
