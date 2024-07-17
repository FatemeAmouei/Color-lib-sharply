import './Navbar.css'
import '../default/default.css'

function Navbar(){
  const portofilioClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 1300,
      left: 0,
      behavior: "smooth",
    })
  }

  const projectClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 3500,
      left: 0,
      behavior: "smooth",
    })
  }

  const logoClickHandler = ()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }) 
 }
  return (
    <div className='header-container'>
      <div className="section-navbar">
        <div className="section-navbar__left">
          <h2 className="logo"><a href='#' PORTFOLIO onClick={logoClickHandler}>Shapely Demo</a></h2>
        </div>
        <div className="section-navbar__right">
          <ul className="navbar-list">
            <li className='navbar-list-li'><a href='Home' class='navbar-list-link' >HOME</a></li>
            <li className='navbar-list-li'> <a href='BLOG' class='navbar-list-link'onClick={projectClickHandler}>PROJECT</a></li>
            <li className='navbar-list-li'> <a href='PORTFOLIO' class='navbar-list-link' onClick={portofilioClickHandler}>PORTFOLIO</a></li>
            <li className='navbar-list-li'>
              <a href='ABOUTTHETESTES' class='navbar-list-link'>ABOUTTHETESTES</a>
              <i class="fas fa-angle-down navbar-list__link-icon"></i>
              <ul class="navbar-list__dropdown">
                <li class="navbar-list__dropdown-item">
                  <a href="#" class="navbar-list__dropdown-link">Page Image Alignment</a>
                </li>
                <li class="navbar-list__dropdown-item">
                  <a href="#" class="navbar-list__dropdown-link"> Page Markup And Formatting</a>
                </li>
                <li class="navbar-list__dropdown-item">
                  <a href="#" class="navbar-list__dropdown-link">Clearing Float  </a>
                </li>
                <li class="navbar-list__dropdown-item">
                  <a href="#" class="navbar-list__dropdown-link">PPAge with comments </a>
                </li>
                <li class="navbar-list__dropdown-item">
                  <a href="#" class="navbar-list__dropdown-link">Page with comments disabled  </a>
                </li>
              </ul>
          </li>
          <li className='navbar-list-li'>
            <a href='lEVEL1' class='navbar-list-link'>lEVEL1</a>
            <i class="fas fa-angle-down navbar-list__link-icon"></i>
            <ul class="navbar-list__dropdown">
              <li class="navbar-list__dropdown-item navbar-list__dropdown-subitem">
                <a href="#" class="navbar-list__dropdown-link"> LEVEL2</a>
                <i class="fas fa-angle-right navbar-list__link-icon"></i>
                <ul class="dropdown-list">
                  <li class="dropdown-item__subitem">
                    <a href="#" class="navbar-list__dropdown-link"> LEVEL3</a>  
                  </li>
                  <li class="dropdown-item__subitem">
                    <a href="#" class="navbar-list__dropdown-link"> LEVEL3a</a>  
                  </li>
                  <li class="dropdown-item__subitem">
                    <a href="#" class="navbar-list__dropdown-link"> LEVEL3b</a>  
                  </li>
                </ul> 
              </li>
              <li class="navbar-list__dropdown-item">
                <a href="#" class="navbar-list__dropdown-link">LEVEL2a </a>
              </li>
              <li class="navbar-list__dropdown-item">
                <a href="#" class="navbar-list__dropdown-link"> LEVEL2b </a>
              </li>                
            </ul>
          </li>
          <li className='navbar-list-li'> <a href='SHOP' class='navbar-list-link'>SHOP</a></li>
          </ul>
          <button className='navbar-search'> 
            <i className='fas fa-search navbar-search__icon'></i>
            <div className="navbar-li__subitem">
              <input type="text" className='navbar-li__subitem-input'placeholder='TYPE HERE'/>
              <button className='navbar-li__subitem-btn'>search</button>
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}


export default Navbar;

