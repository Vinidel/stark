import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PredictionComponent from './components/PredictionComponent';
import { Provider as ReduxProvider } from "react-redux";
import store from "./state-management/store";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ReduxProvider store={store}>
            <PredictionComponent/>
          </ReduxProvider>
        </div>
    );
  }
}

export default App;
