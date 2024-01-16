export const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1,
    transition: {duration: 1, delay: 2, when: "beforeChildren", staggerChildren: 0.4}}
  }
  export const ChildVariants = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1},

  }