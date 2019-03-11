import React, { Component } from 'react';
import './App.css';
import Smartcard from "./components/smartcard";
import Forecast from "./components/Forecast";
import Matchicon from './matchicon';


class App extends Component {
  state = {
    items: [],
    searchValue: "",
    weatherInfo: [],
    loading: false,
    unit: "C",
    location: null,
    typeOFContent: "start",
    forecast: [],
  }

  handleSearchQuery = (event) => {
    this.setState({ searchValue: event.target.value });

  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.fetchCity();
    }
  }


  switchUnit = (event) => {
    event.preventDefault();
    if (this.state.unit === 'C') this.setState({ unit: 'F' })
    if (this.state.unit === 'F') this.setState({ unit: 'C' })
  }

  checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
      this.fetchCity();
    } else {
      console.log("no")
    }
  }

  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({ location: `${lat},-${lng}` })
  }

  fetchCity = () => {
    this.setState({ loading: false })
    let searchValue = null;
    let location = "your location";
    if (this.state.searchValue != null) {
      searchValue = this.state.searchValue;
      location = searchValue;
    }
    else if (this.state.location != null) {
      searchValue = this.state.location;
    }
    if (searchValue.length > 1) {
      this.setState({ loading: true })
      fetch(`https://weatherbackend.herokuapp.com/api/currently/${searchValue}/${this.state.unit}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(data => data.json()).then(result => {
        this.setState({
          weatherInfo: [
            result.Humidity,
            result.Temperature,
            result.summary,
            result.sunrise,
            result.sunset,
            result.windSpeed,
            location,
            result.icon,
            this.state.unit,
          ]
        })
        this.setState({ loading: false, typeOFContent: "currentweather" })
      });
    }
  }

  fetchForecast = () => {
    let searchValue = null;
    let location = "your location";
    if (this.state.searchValue != null) {
      searchValue = this.state.searchValue;
      location = searchValue;
    }
    else if (this.state.location != null) {
      searchValue = this.state.location;
    }
    this.setState({ loading: true })
    fetch(`https://weatherbackend.herokuapp.com/api/forecast/${searchValue}/${this.state.unit}`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(data => data.json()).then(result => {
      let tempArray = [];
      result.forEach(e => {
        let weather = {
          day: e.dayNr,
          windSpeed: e.windSpeed,
          summary: e.summary,
          temperatureMin: e.temperatureMin,
          temperatureMax: e.temperatureMax,
          humidity: e.humidity,
          sunrise: e.sunrise,
          sunset: e.sunset,
          icon: e.icon,
          apparentTemperatureMin: e.apparentTemperatureMin,
          apparentTemperatureMax: e.apparentTemperatureMax,
        }
        tempArray.push({ weather: weather });
      });
      this.setState({ forecast: tempArray, loading: false, typeOFContent: "forecast" })
    })
  }

  gobackToMainMenu = () => {
    this.setState({ typeOFContent: "start" });
  }

  componentDidMount() {
    this.checkGeolocation();
  }

  render() {
    let loader = null;
    if (this.state.loading) {
      loader = "lds-facebook";
    }
    if (!this.state.loading) {
      loader = "";
    }

    if (this.state.typeOFContent == "start") {
      return (
        <div className="App">
          <div className="rainy"></div>
          <div className="BigContainer">
            <div className="Container">
              <input className="searchCityInput" value={this.state.searchValue} onChange={this.handleSearchQuery} onKeyPress={this.handleKeyPress} placeholder="Weather, where?"></input>
              <button className="searchWeatherButton" onClick={this.fetchCity}>now</button>
              <button className="searchWeatherButton" onClick={this.fetchForecast}>forecast</button>
              <div className="ml-1">
                <p><b>C/F</b></p>
                <label className="switch">
                  <input type="checkbox" onChange={this.switchUnit} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>
                <div className={loader}><div></div><div></div><div></div></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.typeOFContent === "currentweather") {
      return (
        <Smartcard weatherInfo={this.state.weatherInfo} goback={this.gobackToMainMenu} />
      )
    }

    if (this.state.typeOFContent === "forecast") {
      return (
        <Forecast forecast={this.state.forecast} goback={this.gobackToMainMenu} />
      )
    }

  }
}

export default App;

