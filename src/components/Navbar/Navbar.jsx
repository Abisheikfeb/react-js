import React from 'react'
import './Navbar.css'
import logo from '../../assets/settings.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='setting' />
        <ul className='nav-menu'>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            

        </ul>
        <div className="nav-contact">connect with me</div>


    </div>
  )
}

export default Navbar