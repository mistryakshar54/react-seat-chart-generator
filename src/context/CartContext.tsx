import React, { useState, createContext } from 'react';
import { CartContextType, CartItem, SeatItem } from '../types/types';

const initialCartData : CartItem = {
  selectedSeats: [],
  totalAmount: 0,
};
// @ts-ignore
export const CartContext = createContext<CartContextType>();
export const CartContextProvider : React.FC = ({ children }) => {
  const [cartData, setCartData] = useState(initialCartData);

  const selectSeat = (seatItem : SeatItem) => {
    const updatedSeats = [...cartData.selectedSeats, seatItem.seatLabel];
    const updatedAmout = cartData.totalAmount + seatItem.price;
    setCartData({ selectedSeats: updatedSeats, totalAmount: updatedAmout });
  };
  const unSelectSeat = (seatItem : SeatItem) => {
    const updatedSeats = cartData.selectedSeats.filter((seatKey: string) => seatKey !== seatItem.seatLabel);
    const updatedAmout = cartData.totalAmount - seatItem.price;
    setCartData({ selectedSeats: updatedSeats, totalAmount: updatedAmout });
  };

  return (
      <CartContext.Provider value={{
        cartData,
        selectSeat,
        unSelectSeat,
      }}
      >
        { children }
      </CartContext.Provider>
  );
};
