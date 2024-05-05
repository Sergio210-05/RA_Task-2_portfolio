// import projectsData from '../ProjectsData/projectsData';

export const ProjectList = ({projects}) => {

  return (
    <div className="project-list">
      {projects.map((project, index) => {
        return(
          <img className='project-card' key={index} src={project['img']}/>
        )

      })}
    </div>
  )
}
