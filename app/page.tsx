"use client"
import Navigation from "./components/Nav/Navigation";
import Herosection from "./components/Herosection/Herosection";
import { useState } from "react";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  img: string;
}

export default function Home() {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item:Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
       const updateQuantity = (id:string, increment:number) => {
        console.log(`Updating quantity for id: ${id} with increment: ${increment}`);
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.title === id
              ? { ...item, quantity: Math.max(1, (item.quantity || 1) + increment) }
              : item
          )
        );
      };

  return (
    <div className="container relative w-full mx-auto max-w-[1440px]">
      <Navigation cartItems={cartItems} setCartItems={setCartItems}/>
      <Herosection cartItems={cartItems} addToCart={addToCart} updateQuantity={updateQuantity}/>
    </div>
  );
}
