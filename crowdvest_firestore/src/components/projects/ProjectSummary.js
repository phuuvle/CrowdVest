// This is a function that defines a ProjectList in a modular way

import React from 'react'



const ProjectSummary = ({project}) => {
  return (
    <div className= "card z-depth-0 project-summary">
      <div className= "card-content grey-text text-darken-3">
        <span className= "card-title">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p >
        {/* <p className = "grey-text">{moment(project.createdAt.toDate()).calendar()}</p> */}
      </div>
    </div>
  )
}

export default ProjectSummary
