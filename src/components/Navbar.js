import React from 'react'
import R from "../images/R.jpeg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar flex-wrap">
        <div className='logo-container'>
        <img src={R} alt='name' className='logo'></img>
        <div className='logo-text'>itesh Wadhwani</div>
        </div>
        <div>
        <ul className='nav-items'>
        <li className="text-[20px] font-medium cursor-pointer hover:font-bold"><Link to='/'>Home</Link></li>
          <li className="text-[20px] font-medium cursor-pointer hover:font-bold"><Link to='/projects'>Projects</Link></li>
          <li  className="text-[20px] font-medium cursor-pointer hover:font-bold"><Link to='/skills'>Skills</Link></li>
          <li  className="text-[20px] font-medium cursor-pointer hover:font-bold"><Link to='/contactme'>Contact ME</Link></li>
        </ul>
        </div>
    </div>
  )
}
