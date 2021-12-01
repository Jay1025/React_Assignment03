import './App.css';
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from 'react-router-dom';

import { Grid, Button } from '../elements/index';
import Header from "../components/Header"

import PostList from '../pages/PostList';
import Login from '../pages/Login'

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      <Button
          is_float
          text="+"
          // _onClick={() => {
            //   history.push("/write");
            // }}
            ></Button>
      </Grid>
    </React.Fragment>
  );
}

export default App;
