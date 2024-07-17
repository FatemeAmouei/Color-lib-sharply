import './Parallax.css'
import '../default/default.css'

function Parallax(){
  return (
    <div className='header-container'>
      <div className="Parallax-container">
        <img  class='Parallax-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1452723312111-3a7d0db0e024.jpg" alt="Parallax img" />
        <div className="Parallax-text">
          <p className="Parallax-text__title">Small Parallax Section</p>
          <p className="Parallax-text__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.</p>
          <a className='Parallax-btn active' href='#'>MORE INFO</a>
        </div>
      </div>
    </div>
  )
}


export default Parallax;

