import './App.css';
import Navbar from './components/Header/Navbar.js'
import Mainheader from './components/Header/Mainheader.js'
import Seosection from './components/Seosection/Seosection.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import Parallax from './components/Parallax/Parallax.js'
import Limitless from './components/Limitless/Limitless.js'
import Project from './components/Project/Project.js'
import Customers from './components/Customers/Customers.js'
import Clients from './components/Clients/Clients.js'
import WordPress from './components/WordPress/WordPress.js'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainheader />
      <Seosection />
      <Portfolio />
      <Parallax />
      <Limitless />
      <Project>
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg" alt="Projectcomponent img16" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1-1024x714.jpg" alt="Projectcomponent img15" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1-1024x728.jpg" alt="Projectcomponent img14" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1-1024x728.jpg" alt="Projectcomponent img13" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1-1024x728.jpg" alt="Projectcomponent img12" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1-1-1024x714.jpg" alt="Projectcomponent img11" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449057528837-7ca097b3520c-1-1-1024x728.jpg" alt="Projectcomponent img10" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1-1-1024x714.jpg" alt="Projectcomponent img9" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1-1024x714.jpg" alt="Projectcomponent img8" />
        <img className='Projectcomponent-img' src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1-1024x714.jpg" alt="Projectcomponent img7" />
      </Project>
      <Customers/>
      <Clients/>
      <WordPress/>
      <Footer/>

    </div>
  );
}

export default App;
