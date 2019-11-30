import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from '../container/Home';
import MainLayout from "../container/MainLayout";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" {...this.props} component={MainLayout} />
      </Switch>
    );
  }
}

export default connect(null, null)(AppRouter);
