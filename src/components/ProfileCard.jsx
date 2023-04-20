import React from 'react'
import profilePhoto from '../assets/profilePhoto.png'

const ProfileCard = () => {
  return (
    <section className='flex flex-col  items-center gap-3'>
      <picture className='w-[6.36rem] aspect-square'>
        <img src={profilePhoto} alt="user avatar" className='w-full h-full rounded-2xl' />
      </picture>

      <div className='text-center'>
        <h1 className='text-username leading-[17.7px] font-semibold text-primary desktop:leading-[29.26px]'>Rodney Cotton</h1>
        <p className='text-location text-secondary leading-[12.9px] desktop:leading-[17.07px] mt-1'>Helsinki, Finland</p>
      </div>

      <ul className='grid grid-cols-3 gap-3 desktop:gap-6'>
        <li className='bg-[#E5E5E5] rounded-xl px-3 py-[0.625rem]'>
          <p className='text-center text-stats text-primary font-semibold leading-[14.63px] desktop:leading-[24.94px]'>100<span className='block text-tertiary desktop:mt-[3px]'>Posts</span></p>
        </li>
        <li className='bg-[#E5E5E5] rounded-xl px-3 py-[0.625rem]'>
          <p className='text-center text-stats text-primary font-semibold leading-[14.63px] desktop:leading-[24.94px]'>2,242<span className='block text-tertiary desktop:mt-[3px]'>Followers</span></p>
        </li>
        <li className='bg-[#E5E5E5] rounded-xl px-3 py-[0.625rem]'>
          <p className='text-center text-stats text-primary font-semibold leading-[14.63px] desktop:leading-[24.94px]'>1,432<span className='block text-tertiary desktop:mt-[3px]'>Following</span></p>
        </li>
        
      </ul>
    </section>
  )
}

export default ProfileCard