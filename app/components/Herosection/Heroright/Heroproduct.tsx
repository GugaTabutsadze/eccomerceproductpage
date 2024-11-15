import React, { useState } from 'react'
import Buttons from './Buttons'

// Define types for the cart item
interface CartItem {
  title: string;
  price: number;
  quantity: number;
  img: string;
}

// Define props for Heroproduct
interface HeroproductProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, increment: number) => void;
  cartItems: CartItem[];
}



const Heroproduct = ({addToCart, updateQuantity, cartItems}:HeroproductProps) => {

const sneaker = [
  {
    id: 'Fall Limited Edition Sneakers',
    src: "/images/image-product-1-thumbnail.jpg",
    title: 'Fall Limited Edition Sneakers',
    text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: 125,
    sale: 50,
    originalPrice: 250
  }
]
      
  return (
    <div className='container max-w-sm px-3 md:px-0 md:max-w-md space-y-6 h-full mt-8 md:mt-[170px] mr-[150px] md:flex md:flex-col'>
      {
        sneaker.map((item, index) => (
          <div key={index} className='flex flex-col space-y-3 md:space-y-8'>
             <h3 className='text-darkGrayishBlue font-bold text-sm tracking-wider'>SNEAKER COMPANY</h3>
             <h1 className='text-3xl md:text-5xl font-bold max-w-md'>{item.title}</h1>
             <p className='leading-snug font-medium text-darkGrayishBlue'>
               {item.text}
             </p>
              <div className='flex justify-between px-1 md:px-0 md:flex-col gap-0 md:gap-4'>
               <div className='flex items-center gap-4'>
                 <div className='text-2xl font-bold'>${item.price}</div>
                  <div className='text-center px-2 py-[2px] bg-black font-bold 
                       rounded-[7px] text-white'>
                   {item.sale}%
                  </div>
                 </div>
              <div>
                 <span className='line-through text-darkGrayishBlue font-bold'>${item.originalPrice}</span>
              </div>
          </div>
      </div>
        ))
      }
      <div>
      <Buttons
         addToCart={() =>
           addToCart({
           img: sneaker[0].src,
           title: sneaker[0].title,
           price: sneaker[0].price,
           })
         }
          updateQuantity={updateQuantity}
         id={sneaker[0].id} // Pass the correct ID
         quantity={
         cartItems.find((item) => item.title === sneaker[0].title)?.quantity || 1
         } // Get the current quantity from cartItems
      />
      </div>
    </div>
  )
}

export default Heroproduct
