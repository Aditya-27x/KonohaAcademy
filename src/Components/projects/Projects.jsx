import React from 'react'
import './Projects.css'

export const Projects = ({ projectCard }) => {
  return (
    <div className='ProjectContainer'>
      {projectCard.map((project, index) => (
        <div className="ProjectCard" key={index}>
          <article className='Article'>
            <img className='ProjectImg' src={project.imgsrc} alt={`${project.title}'s project`} />
            <div className="ProjectData">
              <h2 className='Title'>{project.title}</h2>
              <span className='Description'>{project.description}</span>
              <a href="#" className='Btn'>Read More</a>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}
