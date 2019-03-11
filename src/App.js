import React, { Component } from 'react';
import './App.css';
import Smartcard from "./components/smartcard";
import Forecast from "./components/Forecast";

class App extends Component {
  state = {
    items: [],
    searchValue: "",
    weatherInfo: [],
    loading: false,
    unit: "C",
    location: null,
    typeOFContent: "start",
  }

  handleSearchQuery = (event) => {
    this.setState({ searchValue: event.target.value });

  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.fetchCity();
    }
  }

  switchUnit = (event) => {
    this.setState({ typeOFContent: "forecast" })
    // if (this.state.unit === 'C') this.setState({ unit: 'F' })
    // if (this.state.unit === 'F') this.setState({ unit: 'C' })
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
    if(this.state.searchValue != null){
      searchValue = this.state.searchValue;
      location = searchValue;
    }
    else if (this.state.location != null) {
      searchValue = this.state.location;
    }
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
                <label className="switch">
                  <input type="checkbox" onChange={this.switchUnit} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className={loader}><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.typeOFContent == "currentweather") {
      return (
        <Smartcard weatherInfo={this.state.weatherInfo} goback={this.gobackToMainMenu} />
      )
    }

    if (this.state.typeOFContent == "forecast") {
      return (
        <Forecast forecast={this.state.forecastInfo} goback={this.gobackToMainMenu} />
      )
    }

  }
}

export default App;

