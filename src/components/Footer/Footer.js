import './Footer.css'
import '../default/default.css'

function Footer(){
  return (
    <>
      <div className="Footer-container">
        <div className="Footer-left">
          <p className="Footer-text__title">Theme by <span>Colorlib</span> designed by <span>Fatemeh Amouie</span></p>
        </div>
        <div className="Footer-right">
          <a className='Footer-right__link' href="facebook">
            <i className='fab fa-facebook Footer-right__icon'></i>
          </a>  
          <a className='Footer-right__link' href="twiter">
            <i className='fab fa-twitter Footer-right__icon'></i>
          </a>
          <a className='Footer-right__link' href="linkedin">
            <i className='fab fa-linkedin Footer-right__icon'></i>
          </a>
          <a className='Footer-right__link' href="youtube">
            <i className='fab fa-youtube Footer-right__icon'></i>
          </a>
          <a className='Footer-right__link' href="instagram">
            <i className='fab fa-instagram Footer-right__icon'></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;

