"use client"
import React, { useState } from 'react'
import Cart from '../Cart/Cart';
import MobileMenu from './MobileMenu/MobileMenu';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
  }

  interface CartItem {
    title: string;
    price: number;
    quantity: number;
    img: string;
  }
  interface CartProps {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  }

  const NavLink = ({ href, children }:NavLinkProps) => (
    <a
      className="text-darkGrayishBlue border-b-4 border-transparent 
      hover:border-b-4 py-10 hover:border-b-orange hover:text-black"
      href={href}
    >
      {children}
    </a>
  )

const Navigation = ({cartItems, setCartItems}:CartProps) => {

  const [cart, setCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)
  

  // Toggle cart display
  const handleCart = () => {
    setCart((prev) => !prev);
  };
  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev)
  }

  return (
    <div className='container  relative flex px-6 max-w-7xl mx-auto gap-12 mt-8 md:mt-0
      md:justify-between md:border-b md:px-0 md:border-gray'>
  <div className='flex items-center justify-between space-x-16'>
    <div className='flex items-center space-x-4'>
         <img onClick={handleMobileMenu} className='md:hidden cursor-pointer' src='/images/icon-menu.svg' alt='/' />
         {mobileMenu ? <MobileMenu handleMobileMenu={handleMobileMenu}/> : mobileMenu}
         <img src='/images/logo.svg' alt='/' />
    </div>
    <div className='hidden space-x-10 md:flex'>
         <NavLink href="#">Collections</NavLink>
         <NavLink href="#">Men</NavLink>
         <NavLink href="#">Women</NavLink>
         <NavLink href="#">About</NavLink>
         <NavLink href="#">Contact</NavLink>
    </div>
  </div>
  <div className='flex items-center gap-4 md:gap-8'>
     {cart && <Cart cartItems={cartItems} setCartItems={setCartItems}/>}
     <img onClick={handleCart} className='cursor-pointer' src='/images/icon-cart.svg' alt='/' />
     <div className='rounded-full hover:outline hover:outline-2 hover:outline-orange'>
         <img className='w-12 h-12 cursor-pointer' src='/images/image-avatar.png' alt='/' />
     </div>
  </div>
</div>
  )
}

export default Navigation
