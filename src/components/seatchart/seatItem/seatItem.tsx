import React, { useState } from 'react';
import { SeatItem } from '../../../types/types';
import './seatItem.scss';

interface SeatChartProps {
   seatItem : SeatItem
}

const SeatItemComponent: React.FC<SeatChartProps> = ({ seatItem }) => {
  const [seat, setSeat] = useState(seatItem);
  const toggleSelectSeat = () => {
    const { status } = seat;
    if (status !== 'unavailable') {
      const toggledStatus = seat.status === 'selected' ? 'available' : 'selected';
      setSeat({ ...seat, status: toggledStatus });
    }
  };
  return (
    seat.type === 'seat'
      ? (
        <button type="button" onClick={toggleSelectSeat} className={`seat-item seat-${seat.status} `} key={seat.seatLabel}>
            { seat.seatNo }
        </button>
      )
      : <span className="seat-item seat-gap">{ seat.seatNo }</span>
  );
};
export default SeatItemComponent;
