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
      <Project />
      <Customers/>
      <Clients/>
      <WordPress/>
      <Footer/>
    </div>
  );
}

export default App;
