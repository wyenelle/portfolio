import React from 'react'
import About from '../about/about'
import Experience from '../experience/experience'
import './sec.css'
import Project from '../project/project'
import Volunteer from '../volunteer/volunteer'


const SecCol = () => {
  return (
    <section className='col-span-2 lg:col-span-1 sec '>
        <About />
        <Experience />
        <Project />
        <Volunteer />
    </section>
  )
}

export default SecCol