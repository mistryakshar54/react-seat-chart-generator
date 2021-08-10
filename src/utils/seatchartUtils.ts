import {
  SeatItem,
  SeatMap, ProcessedSeatLayout, SeatChartJson, seatGap, SectionRow,
} from '../types/types';

export const buildSeatChart = (seatChart : SeatChartJson[], bookedSeats : string) : ProcessedSeatLayout[] => {
  const bookedSeatsSet = new Set(bookedSeats.split(','));

  const processedLayout = seatChart.map<ProcessedSeatLayout>((seatChartItem : SeatChartJson) => {
    const { sectionTitle, seatPrice, seatMap } = seatChartItem;
    const sectionRows = seatMap.map<SectionRow>((seatMapItem : SeatMap) => {
      const { seatLabel, layout } = seatMapItem;
      let seatNumber = 0;
      const seatsForRow = layout.split('').map<SeatItem>((item) => {
        if (item === '_') {
          return seatGap;
        }
        seatNumber++;
        const key = `${seatLabel}_${seatNumber}`;
        return {
          key,
          price: seatPrice,
          status: bookedSeatsSet.has(key) ? 'unavailable' : 'available',
          seatLabel: `${seatLabel} ${seatNumber}`,
          seatNo: seatNumber < 10 ? `0${seatNumber}` : `${seatNumber}`,
          type: 'seat',
        };
      });
      return {
        rowLabel: seatLabel,
        seats: seatsForRow,
        rowPrice: seatPrice,
      };
    });
    return {
      sectionTitle,
      sectionRows,
      sectionPricingInformation: seatPrice,
    };
  });
  return processedLayout;
};

export const calculatePricing = () => {

};
