import './App.css';
import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from 'react-router-dom';

import { Grid, Button } from '../elements/index';
import Header from "../components/Header"

import PostList from '../pages/PostList';
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'
import Permit from './Permit'
import Search from './Search'

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid width="40%" margin="0 auto">
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/write" component={PostWrite} />
          <Route exact path="/edit/:id" component={PostWrite} />
          <Route exact path="/detail/:id" component={PostDetail} />
          <Route exact path="/search" component={Search} />
        </ConnectedRouter>
      <Permit>
        <Button
            is_float
            text="+"
            _onClick={() => {
                history.push("/write");
              }}      
        ></Button>
      </Permit>
      </Grid>
    </React.Fragment>
  );
}

export default App;
