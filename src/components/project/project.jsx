import React from 'react'
import ProjectCard from '../project-card/project-card'
import { arrayOfObject1 } from '../../../data'


const Project = () => {
  return (
    <section className='lg:my-[2rem['>
      <h3 className='sticky top-[3.5rem] mb-[1.5rem] bg-black text-white py-4 lg:top-[-1rem] lg:py-7 lg:mb-[0.2rem]'>Project</h3>
        {
          arrayOfObject1.map(arr => <ProjectCard arrObj={arr} key={arr.id}/> )
        }
    </section>
  )
}

export default Project
