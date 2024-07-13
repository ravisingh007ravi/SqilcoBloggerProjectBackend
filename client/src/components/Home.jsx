import TrainVideos from '../Videos/2023-04-24 20-54-54.mp4';
import React from 'react'

function Home() {
  return (
    <div>
      <div className='h-screen w-full'>
      <iframe class=" w-full aspect-video hover:aspect-square" src={TrainVideos} title='BGVideos'/>
    </div>
    </div>
  )
}

export default Home
