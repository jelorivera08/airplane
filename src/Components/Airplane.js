import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import LeftSeats from "./LeftSeats";
import RightSeats from "./RightSeats";
import MiddleSeats from "./MiddleSeats";

const styles = () => ({
  detailsPane: {
    width: "100%",
    height: "500px"
  },
  panes: {
    textAlign: "center"
  }
});

const Airplane = props => (
  <Paper className={props.classes.detailsPane}>
    <Grid
      container
      style={{ height: "100%" }}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        <LeftSeats
          columns={props.leftSideSeats.columnArray}
          rows={props.leftSideSeats.rowArray}
          seatsTaken={props.leftSideSeats.seatsTaken}
        />
      </Grid>
      <Grid item xs={4}>
        <MiddleSeats
          columns={props.middleSideSeats.columnArray}
          rows={props.middleSideSeats.rowArray}
          seatsTaken={props.middleSideSeats.seatsTaken}
        />
      </Grid>
      <Grid item xs={4}>
        <RightSeats
          columns={props.rightSideSeats.columnArray}
          rows={props.rightSideSeats.rowArray}
          seatsTaken={props.rightSideSeats.seatsTaken}
        />
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Airplane);
