import React from 'react'

import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'


const Gallery = () => {
  return (
    <section className='px-3'>
      <div className='grid grid-cols-3 auto-rows-auto w-full max-w-[56.25rem] gap-x-3 gap-y-2 desktop:gap-x-8 desktop:gap-y-[1.125rem]'>

        <picture className='col-span-1'>
          <img src={photo1} alt='photo1'  className='w-full h-full rounded-xl shadow-2xl' />
        </picture>

        <picture className='col-span-2'>
          <img src={photo2} alt='photo2'  className='w-full h-full rounded-xl shadow-2xl' />
        </picture>
        
        <picture className='col-span-2'>
          <img src={photo3} alt='photo3' className='w-full h-full rounded-xl shadow-2xl' />
        </picture>

        <picture className='row-span-2'>
          <img src={photo4} alt='photo4' className='w-full h-full rounded-xl shadow-2xl' />
        </picture>

        <picture>
          <img src={photo5} alt='photo5' className='w-full h-full rounded-xl shadow-2xl' />
        </picture>

        <picture>
          <img src={photo6} alt='photo6' className='w-full h-full rounded-xl shadow-2xl' />
        </picture>
      </div>

    </section>
  )
}

export default Gallery