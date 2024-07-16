import './Project.css'
import '../default/default.css'


function Project({children}){
  return (
    <div className="Project">
      <div className="Project-container">
        <p className="Project-text__title">Our Latest Projects</p>
        <p className="Project-text__subtitle">Here is our latest projects. You'll love them!</p>
        <div className="Projectcomponent-container">
          {children}
        </div>   
      </div>
    </div>
  )
}


export default Project;

