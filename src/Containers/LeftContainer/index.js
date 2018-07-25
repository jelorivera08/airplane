import React, { Component } from "react";
import { connect } from "react-redux";
import selectors from "./selectors";
import actions from "./actions";
import DetailsPane from "../../Components/DetailsPane";
import action from "./actions";

class LeftContainer extends Component {
  render() {
    const {
      data,
      changeRows,
      changeMiddleSeats,
      changeSideSeats,
      changePassengerCount,
      changeSeatIndex,
      seatNumber
    } = this.props;
    
    return (
      <DetailsPane
        data={data}
        handleChangeRows={changeRows}
        handleChangeMiddleSeats={changeMiddleSeats}
        handleChangeSideSeats={changeSideSeats}
        handleChangePassengerCount={changePassengerCount}
        handleChangeSeatIndex={changeSeatIndex}
        seatNumber={seatNumber}
      />
    );
  }
}

const mapStateToProps = state => ({
  // get all data from reducer using reselect
  data: selectors.getPlaneData(state),
  seatNumber: selectors.getSeatNumber(state)
});

const mapDispatchToProps = dispatch => ({
  // STRING.replace(/\D/g,'') rejects all non-numeric characters
  changeRows: event => dispatch(actions.changeRows(event.target.value.replace(/\D/g,''))),
  changeMiddleSeats: event =>
    dispatch(actions.changeMiddleSeats(event.target.value.replace(/\D/g,''))),
  changeSideSeats: event =>
    dispatch(action.changeSideSeats(event.target.value.replace(/\D/g,''))),
  changePassengerCount: event =>
    dispatch(action.changePassengerCount(event.target.value.replace(/\D/g,''))),
  changeSeatIndex: event => dispatch(action.changeSeatIndex(event.target.value.replace(/\D/g,'')))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftContainer);
