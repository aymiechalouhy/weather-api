
import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class Fog extends Component {
  render() {
    return (
      <div>
        <img src={fog} alt="fog icon" />
      </div>
    );
  }
}

class Rain extends Component {
  render() {
    return (
      <div>
        <img src={rain} alt="fog rain" />
      </div>
    );
  }
}

class Snow extends Component {
  render() {
    return (
      <div>
        <img src={snow} alt="snow rain" />
      </div>
    );
  }
}

class Storm extends Component {
  render() {
    return (
      <div>
        <img src={storm} alt="storm rain" />
      </div>
    );
  }
}

class Clear extends Component {
  render() {
    return (
      <div>
        <img src={clear} alt="clear icon" />
      </div>
    );
  }
}

class Cloudy extends Component {
  render() {
    return (
      <div>
        <img src={cloudy} alt="cloudy icon" />
      </div>
    );
  }
}

class Unknown extends Component {
  render() {
    return (
      <div>
        <img src={unknown} alt="unknown icon" />
      </div>
    );
  }
}

class Drizzle extends Component {
  render() {
    return (
      <div>
        <img src={drizzle} alt="drizzle icon" />
      </div>
    );
  }
}

class Mostlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={mostlycloudy} alt="mostlycloudy icon" />
      </div>
    );
  }
}

class Partlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={partlycloudy} alt="partlycloudy icon" />
      </div>
    );
  }
}


class Noww extends Component {
  render() {
    return (
      <div className="now">
        <img src={mostlycloudy} alt="mostlycloudy icon" />
        <p className="p0">overcast clouds</p>
        <p className="p1"><span>Temperature</span> 10° to 11°C</p>
        <p className="p2"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
      </div>
    );
  }
}

class Laterr extends Component {
  render() {
    return (
      <div className="laters">
        <div className="later id1">
          <h4>03:00</h4>
          <Mostlycloudy />
          <h4>8°C</h4>
        </div>

        <div className="later id2">
          <h4>06:00</h4>
          <Mostlycloudy />
          <h4>9°C</h4>
        </div>

        <div className="later id3">
          <h4>09:00</h4>
          <Clear />
          <h4>14°C</h4>
        </div>

        <div className="later id4">
          <h4>12:00</h4>
          <Clear />
          <h4>17°C</h4>
        </div>

        <div className="later id5">
          <h4>15:00</h4>
          <Clear />
          <h4>18°C</h4>
        </div>

        <div className="later id6">
          <h4>18:00</h4>
          <Clear />
          <h4>16°C</h4>
        </div>

        <div className="later id7">
          <h4>21:00</h4>
          <Mostlycloudy />
          <h4>13°C</h4>
        </div>

      </div>
    );
  }
}



class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Mostafa_Aymie"
  //   };
  // }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/*<SayHi />
          <SayHello color="black" name={this.state.name} /> */}
        <div className="app__header">

          <Search handleInput={this.handleInputChange} />
        </div>

        <div className="app__main">
          <div className="all">

            <Noww />

            <Laterr />

          </div>

        </div>

      </div>
    );
  }
}

export default App;

{/* <Fog />
<Rain />
<Snow />
<Storm />
<Clear />
<Cloudy />
<Unknown />
<Drizzle />
<Mostlycloudy />
<Partlycloudy /> */}