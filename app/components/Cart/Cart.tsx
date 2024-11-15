import React from 'react'

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  img: string;
}
interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Cart = ({cartItems, setCartItems}:CartProps) => {

  const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deleteItem = (title: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };


    return (
      <div className='w-[350px] h-[300px] fixed md:h-[250px] right-[3px] top-[120px] md:top-[90px] md:right-[-100px]
            custom-shadow rounded-[20px] z-10 bg-white md:absolute'>
        <div className='border-b'>
          <h2 className='px-8 py-4 font-bold'>Cart</h2>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <p className='mt-16 px-8 py-4 text-center'>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.title} className='flex flex-col space-y-8 p-6'>
                 <div  className='flex space-x-4'>
                   <img className='rounded-[7px]' width={50} height={50} src={item.img} />
                   <div className='flex flex-col'>
                     <p className='text-darkGrayishBlue'>{item.title}</p>
                     <div className='flex items-center space-x-1'>
                       <span className='text-darkGrayishBlue'>${item.price}.00</span>
                       <span className='text-darkGrayishBlue'>x</span>
                       <span className='text-darkGrayishBlue'>{item.quantity}</span>
                       <span className='font-bold'>${totalSum}.00</span>
                       <div onClick={() => deleteItem(item.title)} className='absolute cursor-pointer right-6 top-[100px]'>
                       <img src='/images/icon-delete.svg'
                            alt='/icon-delete.svg'
                            />
                       </div>
                    </div>
                  </div>
                </div>
              <button className='px-10 py-4 bg-orange rounded-[10px] font-bold'>Checkout</button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default Cart;
