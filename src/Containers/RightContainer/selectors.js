import { createSelector } from "reselect";
import { converter } from "./utilities";

const getRows = state => state.leftContainer.rows;
const getSideSeats = state => state.leftContainer.sideSeats;
const getMiddleSeats = state => state.leftContainer.middleSeats;
const getPassengerCount = state => state.leftContainer.passengerCount;
const getIndex = state => state.leftContainer.seatIndex;

const getLeftSideSeats = createSelector(
  getRows,
  getSideSeats,
  getPassengerCount,
  (row, col, pas) => {
    let leftSideSeats = {};
    let rowArray = [];
    let columnArray = [];
    let passengerCountLeft = pas;
    let seatsTaken = [];
    let i, k;
    for (i = 0; i < row; i++) {
      rowArray.push(0);
    }
    for (k = 0; k < col; k++) {
      columnArray.push(0);
    }
    // number of side seats can accomodate (i*k-k)
    for (i = 0; i < row; i++) {
      for (k = 0; k < col; k++) {
        if (k !== 0 && passengerCountLeft > 0) {
          seatsTaken = [...seatsTaken, `${i}${k}`];
          passengerCountLeft--;
        }
      }
    }
    passengerCountLeft = passengerCountLeft - (i * k - k);
    if (passengerCountLeft > 0) {
      for (i = 0; i < row; i++) {
        for (k = 0; k < col; k++) {
          if (k === 0 && passengerCountLeft > 0) {
            seatsTaken = [...seatsTaken, `${i}${k}`];
            passengerCountLeft--;
          }
        }
      }
    }
    leftSideSeats = { ...leftSideSeats, rowArray, columnArray, seatsTaken };
    return leftSideSeats;
  }
);

const getRightSideSeats = createSelector(
  getRows,
  getSideSeats,
  getPassengerCount,
  (row, col, pas) => {
    let rightSideSeats = {};
    let rowArray = [];
    let columnArray = [];
    let passengerCountLeft = pas;
    let seatsTaken = [];
    let i, k;
    for (i = 0; i < row; i++) {
      rowArray.push(0);
    }
    for (k = 0; k < col; k++) {
      columnArray.push(0);
    }
    // number of side seats can accomodate (i*k-k)
    passengerCountLeft = passengerCountLeft - (i * k - k);
    for (i = 0; i < row; i++) {
      for (k = 0; k < col; k++) {
        if (k !== col - 1 && passengerCountLeft > 0) {
          seatsTaken = [...seatsTaken, `${i}${k}`];
          passengerCountLeft--;
        }
      }
    }
    passengerCountLeft = passengerCountLeft - k;
    if (passengerCountLeft > 0) {
      for (i = 0; i < row; i++) {
        for (k = 0; k < col; k++) {
          if (k === col - 1 && passengerCountLeft > 0) {
            seatsTaken = [...seatsTaken, `${i}${k}`];
            passengerCountLeft--;
          }
        }
      }
    }
    rightSideSeats = { ...rightSideSeats, rowArray, columnArray, seatsTaken };
    return rightSideSeats;
  }
);

const getMiddleSideSeats = createSelector(
  getRows,
  getMiddleSeats,
  getPassengerCount,
  getSideSeats,
  (row, col, pas, sides) => {
    let middleSeats = {};
    let rowArray = [];
    let columnArray = [];
    let passengerCountLeft = pas;
    let seatsTaken = [];
    let i, k;
    for (i = 0; i < row; i++) {
      rowArray.push(0);
    }
    for (k = 0; k < col; k++) {
      columnArray.push(0);
    }
    passengerCountLeft =
      passengerCountLeft - 2 * (i * sides - sides) - 2 * sides;
    for (i = 0; i < row; i++) {
      for (k = 0; k < col; k++) {
        if (passengerCountLeft > 0) {
          seatsTaken = [...seatsTaken, `${i}${k}`];
          passengerCountLeft--;
        }
      }
    }
    middleSeats = {
      ...middleSeats,
      rowArray,
      columnArray,
      seatsTaken,
      passengerCountLeft
    };
    return middleSeats;
  }
);

const getIndexCount = createSelector(
  getRows,
  getMiddleSeats,
  getSideSeats,
  getIndex,
  (row, mid, sides, index) => {
    let i, k;
    let counter = 0;
    let indexResult = 0;

    for (i = 0; i < row; i++) {
      for (k = 0; k < sides; k++) {
        if (k !== 0) {
          counter++;
          if (counter == +index) {
            indexResult = converter(i, k);
          }
        }
      }
    }

    for (i = 0; i < row; i++) {
      for (k = 0; k < sides; k++) {
        if (k !== sides - 1) {
          counter++;
          if (counter == +index) {
            indexResult = converter(i, +sides + +mid + k);
          }
        }
      }
    }

    for (i = 0; i < row; i++) {
      for (k = 0; k < sides; k++) {
        if (k === 0) {
          counter++;
          if (counter == +index) {
            indexResult = converter(i, k);
          }
        }
      }
    }

    for (i = 0; i < row; i++) {
      for (k = 0; k < sides; k++) {
        if (k === sides - 1) {
          counter++;
          if (counter == +index) {
            indexResult = converter(i, +sides + +mid + k);
          }
        }
      }
    }

    for (i = 0; i < row; i++) {
      for (k = 0; k < mid; k++) {
        if (indexResult === 0) {
          counter++;
          if (counter == +index) {
            indexResult = converter(i, +sides + k);
          }
        }
      }
    }

    return indexResult;
  }
);

const selectors = {
  getLeftSideSeats,
  getRightSideSeats,
  getMiddleSideSeats,
  getPassengerCount,
  getIndexCount
};

export default selectors;
