import './Seosection.css'
import '../default/default.css'

function Seosection(){
  return (
    <section>
      <div className="Seo-container">
        <div className="Seo-container__left">
          <img  class='Seo-container__left-img' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png" alt="Seo img" />
        </div>
        <div className="Seo-container__right">
          <h2 className="Seo-container__right__title">SEO Friendly</h2>
          <p className="Seo-container__right__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
          <a className='Seo-container__right-btn' href='#'>RAED MORE</a>
        </div>
      </div> 
    </section>
  )
}


export default Seosection;

