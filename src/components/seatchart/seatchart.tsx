import React from 'react';
import seatChartJson from '../../data/theater.json';
import { ProcessedSeatLayout } from '../../types/types';
import { buildSeatChart } from '../../utils/seatchartUtils';
import './seatchart.scss';
import SeatSection from './seatSection/seatSection';

// TODO : Future support to hide show section labels
//       and restrict for certain section. For ex allow secletion of only section having Row A,B,C etc..
interface SeatChartProps {
    showSectionLabels? : boolean;
    restrictSelectionForSection : string[];
}

const bookedSeats = 'AA_1,AA_2,AA_3,W_1,W_2';
const SeatChartComponent: React.FC<SeatChartProps> = () => {
  const data : ProcessedSeatLayout[] = buildSeatChart(seatChartJson, bookedSeats);

  return (
      <div className="seat-container">
          {
            data.map((seatLayoutItem : ProcessedSeatLayout) => {
              const { sectionTitle, sectionPricingInformation, sectionRows } = seatLayoutItem;
              return (
              <div>
                  <h5 className="section-pricing-label label-border-bottom mt-3">
                        {sectionTitle}
                        -
                        {sectionPricingInformation}
                  </h5>
                  <SeatSection sectionRows={sectionRows} />
              </div>
              );
            })
          }
      </div>
  );
};
export default SeatChartComponent;
