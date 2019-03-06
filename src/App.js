import React, { Component } from 'react';
import './App.css';
import Smartcard from "./components/smartcard";



class App extends Component {
  state = {
    items: [],
    searchValue: "",
    weatherInfo: []
  }

  handleSearchQuery = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  checkGeolocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(this.displayLocationInfo));
    } else {
      console.log("no")
    }
  }

  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(`longitude: ${lng} | latitude: ${lat}`);
  }

  fetchCity = () => {
    fetch(`https://weatherbackend.herokuapp.com/api/currently/${this.state.searchValue}`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(data => data.json()).then(result => {
      this.setState({
        weatherInfo: [
          {
            humidity: result.Humidity,
            temperature: result.Temperature,
            summary: result.summary,
            sunrise: result.sunrise,
            sunset: result.sunset,
            windspeed: result.windSpeed,
          }
        ]
      })
      console.log(result);
    });
  }


  render() {
    this.state.weatherInfo.forEach(value => {
      console.log(value);
      
    })



    return (
      <div className="App">
        <div className="BigContainer">
          <div className="Container">
            {/* {this.state.weatherInfo.forEach(value => {
              console.log(value);
            })} */}
            <Smartcard weatherInfo={this.state.weatherInfo} />
            <input className="searchCityInput" value={this.state.searchValue} onChange={this.handleSearchQuery} placeholder="Weather, where?"></input>
            <button className="searchWeatherButton" onClick={this.fetchCity}>Search</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

