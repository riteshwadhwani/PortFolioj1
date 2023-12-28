import React from 'react'

export const ProjectCard = ({number,images,heading,subHeading,projectURL,ide}) => {
let a =1;
  return (
   <div className='project-card' id={ide}>
    <div className='project-number project-number-right'>{number}</div>
    <div className='project-content project-content-left'>
        <div className='project-skills-container'>
            {
                images.map((image)=>{
                    return <img key={a++} src={image} alt=''></img>
                })
            }
        </div>
        <h2 className='project-heading'>{heading}</h2>
        <p className='project-heading'>{subHeading}</p>
        <div className='btn-grp'>
            <button className='btn-pink btn-project'><a href={projectURL}> Check</a></button>
            <a href='https://github.com/riteshwadhwani'>
                <i title='GitHubLink' className='fa-brands fa-github icon'></i>
            </a>
          
        </div>
    </div>
   </div>
  )
}
