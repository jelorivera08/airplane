import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// max columns is 21
// max rows is 9
const middleSeat = props => (
  <Grid
    container
    style={{ height: "100%" }}
    justify="center"
    alignItems="center"
  >
    {props.columns.map((bar, idCol) => {
      return (
        <div key={idCol} style={{ marginLeft: "2px" }}>
          {props.rows.map((foo, idRow) => {
            return (
              <div
                key={idRow}
                style={{
                  backgroundColor: props.seatsTaken.includes(`${idRow}${idCol}`)
                    ? "red"
                    : "green",
                  height: "20px",
                  width: "20px",
                  borderRadius: "8px",
                  marginTop: "2px"
                }}
              />
            );
          })}
        </div>
      );
    })}
  </Grid>
);

export default middleSeat;
