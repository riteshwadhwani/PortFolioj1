import React from 'react'
import { ProjectCard } from './ProjectCard'
import { datas } from '../components/datas'
export const Projects = () => {
    let a =1;
  return (
    <div className='project-section' id='projects'>
    <h2 className='page-header'>Projects</h2>
    <div className='project-container'>
        {
            datas.map((data)=>{
                return <ProjectCard key={data.number} {...data} ide={`project${a++}`}></ProjectCard>
            })
        }
    </div>
      
    </div>
  )
}
