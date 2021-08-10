import React from 'react';
import { SeatItem, SectionRow } from '../../../types/types';
import SeatItemComponent from '../seatItem/seatItem';

import './seatSection.scss';

interface SeatSectionProps {
    sectionRows : SectionRow[]
}

const SeatSection: React.FC<SeatSectionProps> = ({ sectionRows }) => (
        <div>
          {sectionRows.map((sectionRow : SectionRow) => {
            const { rowLabel, seats } = sectionRow;
            return (
                <div key={rowLabel} className="d-flex">
                    <span className="section-pricing-label">{rowLabel}</span>
                    {seats.map((seatItem : SeatItem) => (
                        <SeatItemComponent seatItem={seatItem} />
                    ))}
                </div>
            );
          })}
        </div>
);
export default SeatSection;
