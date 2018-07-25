import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = () => ({
  detailsPane: {
    width: "100%",
    height: "500px"
  },
  panes: {
    textAlign: "center"
  }
});

const DetailsPane = props => (
  <Paper className={props.classes.detailsPane}>
    <Grid container style={{ paddingTop: "10px" }}>
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          <TextField
            id="rows"
            label="Rows"
            value={props.data.rows}
            onChange={props.handleChangeRows}
            margin="normal"
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          <TextField
            id="middle-seats"
            label="Middle Block"
            value={props.data.middleSeats}
            onChange={props.handleChangeMiddleSeats}
            margin="normal"
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          <TextField
            id="side-seats"
            label="Side Block"
            value={props.data.sideSeats}
            onChange={props.handleChangeSideSeats}
            margin="normal"
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          <TextField
            id="number-of-passengers"
            label="No. of Passengers"
            value={props.data.passengerCount}
            onChange={props.handleChangePassengerCount}
            margin="normal"
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          <TextField
            id="index_number"
            label="Index"
            value={props.data.seatIndex}
            onChange={props.handleChangeSeatIndex}
            margin="normal"
          />
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "30px" }}>
        <Typography className={props.classes.panes} component="div">
          Your seat number is {props.seatNumber}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(DetailsPane);
