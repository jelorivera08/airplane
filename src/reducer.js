import { combineReducers } from "redux";
import { reducer as leftContainer } from "./Containers/LeftContainer/reducer";
import { reducer as rightContainer } from "./Containers/RightContainer/reducer";

const rootReducer = combineReducers({
  leftContainer: leftContainer,
  rightContainer: rightContainer
});

export default rootReducer;
