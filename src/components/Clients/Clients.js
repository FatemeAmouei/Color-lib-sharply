import './Clients.css'
import '../default/default.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function Clients(){
  return (
      <section>
      <div className="Clients-container">
        <p className="Clients-text__title">Our Main Clients</p>
        <div className="Clients-slider">
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={1}
            grabCursor={false}
            autoplay={{
              deley:3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/colorlib-logo.png" alt="colorlib-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/js-logo.png" alt="js-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/html5-logo.png" alt="html15-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/css-logo.png" alt="css-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/less-logo.png" alt="less-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/sass-logo.png" alt="sass-logo" />
              </SwiperSlide>
              <SwiperSlide> 
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/bootstrap-logo.jpg" alt="bootstrap-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/adobe-logo.png" alt="adobe-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='clients-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/facebook-logo.png" alt="facebook-logo" />
              </SwiperSlide>
          </Swiper>
        </div>
      </div>            
    </section>
  )
}


export default Clients;

