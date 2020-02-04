import React, {Fragment} from 'react';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';

class MainLayout extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <TopBar />
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
