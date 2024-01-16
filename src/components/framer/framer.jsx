import { motion } from 'framer-motion'

const list = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        mass:0.4,
        damping: 8,
        when:"beforeChildren",
        staggerChildren: 0.4
      },
    },
    hidden: {
      opacity: 0,
      x: "100vw"
    }
  }
  const childrenVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }

const Framer = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={list}>
        <h2>welcome`</h2>
      <motion.p variants={childrenVariants}>hello</motion.p>
      <motion.p variants={childrenVariants}>hello</motion.p>
      <motion.p variants={childrenVariants}>hello</motion.p>
    </motion.div>
  )
}

export default Framer
