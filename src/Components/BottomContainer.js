import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = () => ({
  detailsPane: {
    width: "100%",
    height: "180px"
  },
  panes: {
    textAlign: "center"
  }
});

const BottomContainer = props => (
  <Paper className={props.classes.detailsPane}>
    <Grid container style={{ paddingTop: "10px" }} justify="center">
      <Grid item xs={12}>
        <Typography className={props.classes.panes} component="div">
          Welcome to the plane seat arrangement app
        </Typography>
      </Grid>
      <Grid item xs={10} style={{ marginTop: "10px" }} justify="justify">
        <Typography className={props.classes.panes} component="div">
          Input the number of rows of the plane, number of the seats in the
          middle and in the side. You can also put the number of passengers that
          will board the plane and the app will automatically render where they
          will be seated. If you put a number in the index text form, your
          corresponding seat number will be displayed for you. Enjoy!
        </Typography>
      </Grid>
      <Grid item xs={10} style={{ marginTop: "10px" }} justify="justify">
        <Typography className={props.classes.panes} component="div">
          RED color means the seat is taken <br />
          GREEN color means the seat is available<br />
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(BottomContainer);
