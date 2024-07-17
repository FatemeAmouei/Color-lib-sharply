import './Customers.css'
import '../default/default.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

function Customers(){
  return (
    <section>
      <div className="Customers">
        <div className="Customers-content">
          <p className="Customers-text__title">What Our Customers Say</p>
          <div className="Clients-slider">
            <Swiper
            slidesPerView={1}
            autoplay={{
              deley:3000,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
              <SwiperSlide>
                <p className="slider-text">Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper</p>
                <img class='slider-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns.jpg" alt="" />
                <p className='slider-text' href='#'>Aigars Silkalns</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="slider-text">Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.</p>
                <img class='slider-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/mike-muller-150x150.jpg" alt="" />
                <p className='slider-text' href='#'>John Doe</p>
              </SwiperSlide>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div> 
    </section>
  )
}


export default Customers;

