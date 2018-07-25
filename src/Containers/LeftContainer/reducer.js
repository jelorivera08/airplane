const INITIAL_STATE = {
  rows: 0,
  middleSeats: 0,
  sideSeats: 0,
  passengerCount: 0,
  seatIndex: 0
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_ROW_VALUE":
      state = { ...state, rows: action.payload };
      break;
    case "CHANGE_MIDDLE_SEATS_VALUE":
      state = { ...state, middleSeats: action.payload };
      break;
    case "CHANGE_SIDE_SEATS_VALUE":
      state = { ...state, sideSeats: action.payload };
      break;
    case "CHANGE_PASSENGER_COUNT_VALUE":
      state = { ...state, passengerCount: action.payload };
      break;
    case "CHANGE_SEAT_INDEX":
      state = { ...state, seatIndex: action.payload };
      break;
    default:
      return state;
  }
  console.log(state);
  return state;
};
