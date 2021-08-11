import React from 'react';
import CartComponent from '../cart/cart';
import SeatChartComponent from '../seatchart/seatchart';
import './layout.scss';

const Layout: React.FC = () => {
  const title = 'Seat chart';
  return (
        <div className="seatChartLayout">
            <h1>{title}</h1>
            <SeatChartComponent restrictSelectionForSection={[]} />
            <CartComponent />
        </div>
  );
};

export default Layout;
