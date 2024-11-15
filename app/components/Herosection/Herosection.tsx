import React, { useState } from 'react'
import Heroimages from './Heroleft/Heroimages'
import Heroproduct from './Heroright/Heroproduct'

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  img: string;
}

interface HerosectionProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, increment: number) => void;
  cartItems: CartItem[];
}

const Herosection = ({addToCart, updateQuantity, cartItems}:HerosectionProps) => {


  return (
    <div className=' flex-col items-center md:flex md:flex-row'>
      <Heroimages />
      <Heroproduct cartItems={cartItems}  addToCart={addToCart} updateQuantity={updateQuantity}/>
    </div>
  )
}

export default Herosection
