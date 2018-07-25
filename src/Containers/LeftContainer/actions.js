// change row value of reducer based from user input
const changeRows = numberOfRows => ({
  type: "CHANGE_ROW_VALUE",
  payload: numberOfRows
});
// change middle seats value of reducer based from user input
const changeMiddleSeats = numberOfMiddleSeats => ({
  type: "CHANGE_MIDDLE_SEATS_VALUE",
  payload: numberOfMiddleSeats
});
// change side seats of reducer based from user input
const changeSideSeats = numberOfSideSeats => ({
  type: "CHANGE_SIDE_SEATS_VALUE",
  payload: numberOfSideSeats
})
// change passenger count of reducer based from user input
const changePassengerCount = numberOfSideSeats => ({
  type: "CHANGE_PASSENGER_COUNT_VALUE",
  payload: numberOfSideSeats
})
// change seat index of reducer based from user input
const changeSeatIndex = index => ({
  type: "CHANGE_SEAT_INDEX",
  payload: index
})

const action = {
  changeRows,
  changeMiddleSeats,
  changeSideSeats,
  changePassengerCount,
  changeSeatIndex
};

export default action;
