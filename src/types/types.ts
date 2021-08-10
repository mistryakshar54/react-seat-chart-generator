export type SeatChartJson = {
    sectionTitle : string,
    seatPrice : number,
    seatMap : SeatMap[]
}

export type SeatMap = {
    seatLabel : string,
    layout : string
}

export type ProcessedSeatLayout = {
    sectionTitle : string,
    sectionRows : SectionRow[],
    sectionPricingInformation : number
}

export type SectionRow = {
    rowLabel : string,
    seats : SeatItem[],
    rowPrice : number
}

export type SeatItem = {
    key : string,
    price : number,
    seatNo : string,
    seatLabel : string,
    status : 'available' | 'unavailable' | 'selected',
    type : 'seat' | 'gap'
}

export const seatGap : SeatItem = {
  key: '',
  price: 0,
  seatNo: '',
  seatLabel: '',
  status: 'unavailable',
  type: 'gap',
};
