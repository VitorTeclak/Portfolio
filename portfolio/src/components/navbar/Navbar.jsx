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
        <Link to="/" className='link'>Home</Link>
        <Link to="/sobre" className='link'>Sobre</Link>
        <Link to="/portfolio" className='link'>Portfólio</Link>
        <Link to="/contato" className='link'>Contatos</Link>

      </div>
    </div>
  )
}

export default Navbar