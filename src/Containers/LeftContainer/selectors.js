import { createSelector } from "reselect";

const getRows = state => state.leftContainer.rows;
const getMiddleSeats = state => state.leftContainer.middleSeats;
const getSideSeats = state => state.leftContainer.sideSeats;
const getPassengerCount = state => state.leftContainer.passengerCount;
const getIndex = state => state.leftContainer.seatIndex;
const getSeatNumber = state => state.rightContainer.seatNumber;

const getPlaneData = createSelector(
  getRows,
  getMiddleSeats,
  getSideSeats,
  getPassengerCount,
  getIndex,
  (rows, middleSeats, sideSeats, passengerCount, getIndex) => ({
    rows,
    middleSeats,
    sideSeats,
    passengerCount,
    getIndex
  })
);
const selectors = {
  getPlaneData,
  getSeatNumber
};

export default selectors;
