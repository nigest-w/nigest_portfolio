import React from 'react'
import './navbar.css';
import logo from '../../asset/logo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
   <nav className='navbar'>
   <img src={logo} alt="Logo" className='logo1'/>
   <div className='menu'>
   <Link activeClass='active' to='landing' spy='true' smooth='true' offset={-100} duration={400}  className='menuitem'>Home</Link>
   <Link activeClass='active' to='aboutpage' spy='true' smooth='true' offset={-100} duration={400} className='menuitem'>About</Link>
   <Link activeClass='active' to='skillpage' spy='true' smooth='true' offset={-100} duration={400} className='menuitem'>Skill</Link>
   <Link activeClass='active' to='projectpage' spy='true' smooth='true' offset={-100} duration={400} className='menuitem'>Project</Link>
   <Link activeClass='active' to='contact-page' spy='true' smooth='true' offset={-100} duration={400} className='menuitem'>Contact me</Link>
   </div>

   </nav>
  )
}

export default Navbar