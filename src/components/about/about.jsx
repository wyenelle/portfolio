import React from 'react'
import { motion } from 'framer-motion'
import About_Large from './about-large'
import About_Small from './about-sm'
// import { containerVariants, ChildVariants } from '../../helper'


const About = () => { 
  return (
    <section>
      <About_Large />
      <About_Small />
    </section>
  )
}

export default About
