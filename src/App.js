import React, { Component } from 'react';
import './App.css';
import Smartcard from "./components/smartcard";




class App extends Component {
  state = {
    items: [],
    searchValue: "",
    weatherInfo: [],
    loading: false

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
    this.setState({ loading: true })
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
          result.windSpeed,
          this.state.searchValue
        ]
      })
      this.setState({ loading: false })
    });
  }


  render() {
    let loader = null;
    if(this.state.loading){
      loader = "lds-facebook";
    }
    if(!this.state.loading){
      loader = "";
    }



    return (
      <div className="App">
      <div className="rainy"></div>
        <div className="BigContainer">
      
          <div className="Container">


            <input className="searchCityInput" value={this.state.searchValue} onChange={this.handleSearchQuery} placeholder="Weather, where?"></input>
            <button className="searchWeatherButton" onClick={this.fetchCity}>Search</button>
            <div className={loader}><div></div><div></div><div></div></div>
          </div>
          
          <Smartcard weatherInfo={this.state.weatherInfo} />
        </div>

      </div>
    );
  }
}

export default App;

