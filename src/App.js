import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CustomTheme from './CustomTheme';
import HomePage from './containers/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(CustomTheme)}>
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
