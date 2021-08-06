import React from 'react';
import './layout.scss';

const Layout: React.FC = () => {
  const title = 'Seat chart';
  return (
        <div className="seatChartLayout">
            <h1>{title}</h1>
        </div>
  );
};

export default Layout;
