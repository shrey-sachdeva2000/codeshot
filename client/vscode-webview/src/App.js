import React, { Component } from 'react';
import './App.css';
import QueryParamsRouter from './components/GetParams'

class App extends Component {
  render() {
    return (
      <div className="App">
       <QueryParamsRouter />
      </div>
    );
  }
}

export default App;
