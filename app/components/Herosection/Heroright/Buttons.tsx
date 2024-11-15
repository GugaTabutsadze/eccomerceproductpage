import React, { useState } from 'react'

// Define props for the Buttons component
interface ButtonsProps {
  addToCart: () => void;
  updateQuantity: (id: string, increment: number) => void;
  quantity: number;
  id: string;
}

const Buttons = ({addToCart, updateQuantity, quantity, id, }:ButtonsProps) => {


  return (
    <div className='flex flex-col gap-6 px-2 md:px-0 md:flex-row'>
      <div className='flex justify-between items-center space-x-10 bg-lightGrayishBlue px-4 rounded-[10px] py-3'>
        <button onClick={() => updateQuantity(id, -1)}>
           <img 
             src='/images/icon-minus.svg' 
             alt='icon-minus.svg' 
            />
        </button>
        <span>
         {quantity}
        </span>
        <button onClick={() => updateQuantity(id, 1)}>
            <img 
             src='/images/icon-plus.svg' 
             alt='icon-plus.svg' 
            />
        </button>
      </div>
      <button onClick={addToCart} className='flex items-center justify-center space-x-6 bg-orange p-3 px-12 rounded-[10px]'>
         <img 
           src='/images/icon-cart.svg'
           alt='icon-cart.svg'
          />
          <h2 className='font-bold'>Add to cart</h2>
      </button>
    </div>
  )
}

export default Buttons
