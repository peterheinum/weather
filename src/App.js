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
          result.Humidity,
          result.Temperature,
          result.summary,
          result.sunrise,
          result.sunset,
          result.windSpeed 
        ]
      })
    });
  }


  render() {
   



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

