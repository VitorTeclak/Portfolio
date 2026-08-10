import './Navbar.css'

//dependencias
import { Link } from 'react-router-dom'


//pages
import Home from '../../pages/home/Home'
import Sobre from '../../pages/sobre/Sobre'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <span>vitor.dev</span>
      </div>
      <div className='links-navbar'>
        <Link to="/" >Home</Link>
        <Link to="/sobre" >Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
      </div>
    </div>
  )
}

export default Navbar