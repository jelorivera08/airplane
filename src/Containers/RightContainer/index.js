import React, { Component } from "react";
import Airplane from "../../Components/Airplane";
import { connect } from "react-redux";
import selectors from "./selectors";
import actions from "./actions";

class RightContainer extends Component {
  render() {
    const {
      leftSideSeats,
      rightSideSeats,
      middleSideSeats,
      index,
      transferSeatNumber
    } = this.props;
    middleSideSeats.passengerCountLeft > 0 &&
      alert(
        `there are ${
          middleSideSeats.passengerCountLeft
        } passengers who can't fit anymore!`
      );

    if (index) {
      transferSeatNumber(index);
    }
    return (
      <Airplane
        middleSideSeats={middleSideSeats}
        leftSideSeats={leftSideSeats}
        rightSideSeats={rightSideSeats}
      />
    );
  }
}

const mapStateToProps = state => ({
  leftSideSeats: selectors.getLeftSideSeats(state),
  rightSideSeats: selectors.getRightSideSeats(state),
  middleSideSeats: selectors.getMiddleSideSeats(state),
  passengers: selectors.getPassengerCount(state),
  index: selectors.getIndexCount(state)
});

const mapDispatchToProps = dispatch => ({
  transferSeatNumber: index =>
    dispatch(actions.transferSeatNumberToReducer(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightContainer);
