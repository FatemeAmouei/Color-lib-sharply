import './Portfolio.css'
import '../default/default.css'

function Portfolio(){
  return (
    <div className='Portfolio-section'>
      <div className="Portfolio-container">
        <div className="Portfolio-container__left">
          <h2 className="Portfolio-container__left__title">Portfolio Section</h2>
          <p className="Portfolio-container__left__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.</p>
          <a className='Portfolio-container__left-btn' href='#'>SEE IT IN ACTION</a>
        </div>
        <div className="Portfolio-container__right">
          <img  class='Portfolio-container__right-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png" alt="Portfolio img" />
        </div>
      </div> 
    </div>
  )
}


export default Portfolio;

