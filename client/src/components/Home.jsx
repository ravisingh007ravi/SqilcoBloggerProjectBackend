import imgBG from '../images/4.jpg'
import React from 'react'

function Home() {
  return (
    <div>
      <div className='h-screen w-full'>
        <img className='h-full w-full object-cover' src={imgBG} alt="bodyImg" />
    </div>
    </div>
  )
}

export default Home
