import React, { Component } from 'react';
import './App.css';
import Smartcard from "./components/smartcard";



class App extends Component {
  state = {
    items: [],
    searchValue: "",
  }

  handleSearchQuery = (event) => {
    this.setState({searchValue: event.target.value});
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
  
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  fetchCity = () => {
    fetch(`https://weatherbackend.herokuapp.com/api/currently/${this.state.searchValue}`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(data => data.json()).then(result => {
      this.setState({
        humidity: result.Humidity,
        temperature: result.Temperature,
        summary: result.summary,
        sunrise: result.sunrise,
        sunset: result.sunset,
        windspeed: result.windSpeed,
      })
      console.log(result);
    });
  }


  render() {
    const humidity = this.state.humidity;
    const temperature = this.state.temperature;
    const summary = this.state.summary;
    const sunrise = this.state.sunrise;
    const sunset = this.state.sunset;

    return (
      <div className="App">
        <div className="BigContainer">
          <div className="Container">
            <input className="searchCityInput" value={this.state.searchValue} onChange={this.handleSearchQuery} placeholder="Weather, where?"></input>
            <button className="searchWeatherButton" onClick={this.checkGeolocation}>Search</button>
          </div>
        </div>
      <Smartcard />
      </div>
    );
  }
}

export default App;


// <div>Sunrise: {sunrise}</div> <br></br>
// <div>Sunset: {sunset}</div><br></br>
// <div>Summary: {summary}</div><br></br>
// <div>Humidity: {humidity}</div><br></br>
// <div>Temperature: {temperature}</div><br></br>

 // fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapquest_key}&location=stockholm, SE`).then(data => data.json())
    //   .then(result => {
    //     let latLng;
    //     result.results.forEach(element => {
    //       element.locations.forEach(e => {
    //         latLng = `${e.latLng.lat},${e.latLng.lng}`
    //       });
    //     });
    //     fetch(`https://api.darksky.net/forecast/${darksky_key}/${latLng}?lang=sv&units=si`).then(res => res.json())
    //       .then(weatherData => {
    //         // let sunsetTime = convertUnixToTime(weatherData.daily.data[0].sunsetTime);
    //         // let sunriseTime = convertUnixToTime(weatherData.daily.data[0].sunriseTime);
    //         let weather = {
    //           windSpeed: weatherData.currently.windSpeed,
    //           summary: weatherData.currently.summary,
    //           Temperature: weatherData.currently.temperature,
    //           Humidity: weatherData.currently.humidity,
    //           // sunrise: sunriseTime,
    //           // sunset: sunsetTime
    //         }
    //         this.setState({weather})
    //       })
    //   })