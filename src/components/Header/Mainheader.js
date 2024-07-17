import './Mainheader.css'
import '../default/default.css'

function Mainheader(){
  return (
    <div className='header-container'>
      <div className="mainheader-container">
        <img  class='mainheader-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-1.jpg" alt="header img" />
        <div className="mainheader-text">
          <p className="mainheader-text__title">We Change Everything WordPress</p>
          <p className="mainheader-text__subtitle">This is the only WordPress theme you will ever want to use.</p>
          <div className="mainheader-btns">
            <a className='mainheader-btn btn-left active' href='#'>READ MORE</a>
            <a className='mainheader-btn btn-right' href='#'>DOWNLOAD NOW</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Mainheader;

