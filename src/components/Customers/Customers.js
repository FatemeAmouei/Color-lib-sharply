import './Customers.css'
import '../default/default.css'





function Customers(){
  return (
    <div className='header-container'>
        <div className="Customers">
          <div className="Customers-container">
            <img  class='Customers-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1451417379553-15d8e8f49cde.jpg" alt="Customers img" />
            <div className="Customers-text">
              <p className="Customers-text__title">What Our Customers Say</p>
              <p className="Customers-text__subtitle">Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper</p>
              <img class='slider-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns.jpg" alt="" />
              <p className='slider-text' href='#'>Aigars Silkalns</p>
            </div>
          </div>
        </div> 
    </div>
  )
}


export default Customers;

