import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LeftContainer from "./Containers/LeftContainer";
import RightContainer from "./Containers/RightContainer";
import BottomContainer from './Components/BottomContainer';

class App extends Component {
  render() {
    return (
      <Grid container justify="center" style={{ marginTop: "50px" }}>
        <Grid item xs={10}>
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <LeftContainer />
            </Grid>
            <Grid item xs={8}>
              <RightContainer />
            </Grid>
            <Grid item xs={12}>
              <BottomContainer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
