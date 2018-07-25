const INITIAL_STATE = { seatNumber: null };

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PUT_INDEX_TO_REDUCER":
      state = { ...state, seatNumber: action.payload };
      break;
    default:
      return state;
  }
  return state;
};
