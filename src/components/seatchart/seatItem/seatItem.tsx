import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { SeatItem } from '../../../types/types';
import './seatItem.scss';

interface SeatChartProps {
   seatItem : SeatItem
}

const SeatItemComponent: React.FC<SeatChartProps> = ({ seatItem }) => {
  const [seat, setSeat] = useState(seatItem);
  const { selectSeat, unSelectSeat } = useContext(CartContext);

  const toggleSelectSeat = () => {
    const { status } = seat;
    switch (status) {
      case 'selected': {
        setSeat({ ...seat, status: 'available' });
        unSelectSeat(seat);
        break;
      }
      case 'available': {
        setSeat({ ...seat, status: 'selected' });
        selectSeat(seat);
        break;
      }
      default: break;
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
