import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Trips from './components/Trips/Trips';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'


class App extends Component {
  render() {
    return (
      <div className="background" >
        <Navbar />
        <div >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips" component={Trips} />
          </Switch>
        </div>
    </div>
    );
  }
}

export default App;
