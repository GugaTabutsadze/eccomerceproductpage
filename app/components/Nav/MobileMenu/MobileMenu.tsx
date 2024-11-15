import React from 'react'

interface MobileMenuProps {
    handleMobileMenu: () => void;
  }

const MobileMenu = ({handleMobileMenu}:MobileMenuProps) => {
  return (
    <div className='absolute border  top-[-32px] left-[-16px] z-[10]
       bg-white w-[230px] h-[1000px] md:hidden'>
      <div className='flex flex-col space-y-12 p-6 items-start'>
        <img 
             className='cursor-pointer'
             onClick={handleMobileMenu}
             src='/images/icon-close.svg'
             alt='icon-close.svg'
         />
        <ul className='flex flex-col space-y-6 font-bold'>
            <li className='cursor-pointer'>Collections</li>
            <li className='cursor-pointer'>Men</li>
            <li className='cursor-pointer'>Women</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
