import React, { Component } from "react";
import Search from "./components/Search";
import WeatherFetch from "./weatherFetch.js"
import "./App.css";

class All extends Component {
  render(){
    return <WeatherFetch />;
  }
}

class App extends Component {
  
  //     name: "Mostafa_Aymie"

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="app__main">
          <All />
        </div>
      </div>
    );
  }
}

export default App;