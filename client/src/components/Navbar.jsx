import React from 'react'
import Test from './Test'

function Navbar() {
  return (
    <>

    <nav className='flex bg-slate-500'>
      <div className="text-red-950 text-lg mx-2">
      My Site
    </div>
    
    <div>
      <ul className='flex mx-8'>
        <li className='mx-2'>Home</li>
        <li className='mx-2'>Home</li>
        <li className='mx-2'>Home</li>
        <li className='mx-2'>Home</li>
      </ul>
    </div>

    </nav>
    <Test/>
    </>
  )
}

export default Navbar
