import React, { useState } from 'react';
import { Link } from 'react-router-dom'




function NavBar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (

    <div className='h-screen w-full fixed'>

      <nav className='fixed w-full bg-[#ffffff30] flex justify-between items-center px-12 h-16 lg:gap-8'>

        <Link to='/'><div className='relative text-2xl font-bold border-[4px] px-2 py-1 text-white whitespace-nowrap '>
          Ravi Singh</div></Link>

        <div className={`ravi absolute top-[64px] text-white left-0 max-lg:bg-[#ffffff30] w-full flex flex-col 
        gap-6 items-center py-2 text-lg font-bold lg:static lg:flex lg:flex-row lg:justify-between
                ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='baskervville-sc-regular text-xl flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <li className='hover:text-orange-400 '><Link to="/">Home</Link></li>
            <li className='hover:text-orange-400'><Link to="/Blogs">Blogs</Link></li>
            <li className='hover:text-orange-400'><Link to="/About">About</Link></li>
            <li className='hover:text-orange-400'><Link to="/Contact">Contact</Link></li>
            <li className='hover:text-orange-400'><Link to="/TestPage">TestPage</Link></li>
          </ul>

          <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <Link to="/Sign"> <button className='flex justify-center items-center rounded-full h-10 w-[90px] 
            bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px]'>
              <div className='flex text-center justify-center rounded-full bg-gray-900 h-full w-full'>
                Sign</div></button></Link>

            <Link to="/LogIn"><button className='bg-orange-400 rounded-lg px-3 py-1'>Logn</button></Link></div>
        </div>

        <div onClick={toggleMenu} className='lg:hidden sm:*'>
          <i className="fa-solid fa-bars fa-xl" style={{ color: "#edeff2", }} />
        </div>

      </nav>

    </div>

  )
}

export default NavBar


