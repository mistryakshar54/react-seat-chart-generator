import React from 'react';
import SeatChartComponent from '../seatchart/seatchart';
import './layout.scss';

const Layout: React.FC = () => {
  const title = 'Seat chart';
  return (
        <div className="seatChartLayout">
            <h1>{title}</h1>
            <SeatChartComponent restrictSelectionForSection={[]} />
        </div>
  );
};

export default Layout;
