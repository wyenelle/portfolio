import React from 'react'
import ProjectCard from '../project-card/project-card'
import { arrayOfObject2 } from '../../../data'


const Volunteer = () => {
  return (
    <section className='lg:my-[2rem['>
      <h3 className='sticky top-[3rem] mb-[1.5rem] bg-black text-white py-3 lg:top-[-1rem] lg:py-7 lg:mb-[0.2rem]'>Volunteer</h3>
      {
          arrayOfObject2.map(arr => <ProjectCard  arrObj={arr} key={arr.id}/> )
        }
    </section>
  )
}

export default Volunteer
