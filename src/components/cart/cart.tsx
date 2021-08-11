import React, { useContext } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
// import { CartContextType } from '../../types/types';
import './cart.scss';

const CartComponent : React.FC = () => {
  const { cartData: { selectedSeats, totalAmount } } = useContext(CartContext);
  return (
    totalAmount > 0
      ? (
        <div className="booking-bar">
            <div className="booking-summary">
                <h5>
                    Total Selected :
                    { selectedSeats.length }
                </h5>
                <h5>
                    Total Amount : Rs
                    {totalAmount}
                </h5>
                {selectedSeats.map((seat, i) => <Badge key={i} className="m-1" bg="secondary">{seat}</Badge>)}
            </div>
            <Button className="book-btn" size="lg" variant="dark">Book Now</Button>
        </div>
      ) : null
  );
};

export default CartComponent;
