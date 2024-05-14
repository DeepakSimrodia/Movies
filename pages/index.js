import MoviesCard from '@/components/MoviesCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full h-96 front flex items-center justify-center font-semibold'>
          <h1 className='text-7xl heading text-center'>
            Welcome to <br/>WORLD OF CINEMATIC
            </h1>
      </div>
      <MoviesCard/>
    </div>
  )
}

export default index