import Logo from './logo'
import Navlinks from './Nav_links'

function Header(){
    return(
      <div className='header'>
        <Logo/>
        <div className="nav_items">
          <Navlinks/>
        </div>
        <div>
  
        </div>
      </div>
    )
  }
  export default Header;