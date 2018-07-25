const transferSeatNumberToReducer = seatNumber => ({
  type: "PUT_INDEX_TO_REDUCER",
  payload: seatNumber
});

const action = {
  transferSeatNumberToReducer
};

export default action;
