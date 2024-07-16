import './Clients.css'
import '../default/default.css'





function Clients(){
  return (
    <div className="Clients">
      <div className="Clients-container">
        <p className="Clients-text__title">Our Main Clients</p>
        <div className="Clients-icon">
          <a className='clients-link' href='#'>
            <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/less-logo.png" alt="less-logo" />
          </a>
          <a className='clients-link' href='#'>
            <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/sass-logo.png" alt="sass-logo" />
          </a>
          <a className='clients-link' href='#'>
            <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/bootstrap-logo.jpg" alt="bootstrap-logo" />
          </a>
          <a className='clients-link' href='#'>
            <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/adobe-logo.png" alt="adobe-logo" />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Clients;

