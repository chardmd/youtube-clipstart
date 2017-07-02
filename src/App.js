import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './containers/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
