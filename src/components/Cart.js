import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from "./ItemList";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center px-4 py-6 sm:m-4 sm:p-4'>
      
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Cart</h1>

      <div className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>

        <button
          className='w-full sm:w-auto px-4 py-2 my-4 bg-black text-white rounded-lg hover:bg-gray-800 transition'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h1 className="text-sm sm:text-base md:text-lg">
            Cart is empty. Add Items to the Cart
          </h1>
        )}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
