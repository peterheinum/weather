import React, { Component } from 'react';
import './styles/App.css';
import Smartcard from './components/Smartcard';
import Forecast from './components/Forecast';
import DetailedDay from './components/DetailedDay.jsx';
import Matchicon from './matchicon';


class App extends Component {
  state = {
    icon: 'cloud',
    searchValue: '',
    weatherInfo: [],
    loading: false,
    unit: 'C',
    location: null,
    typeOFContent: 'start',
    forecast: [],
    hourlyDetails: [],
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
    this.state.unit === 'C' ? this.setState({ unit: 'F' }) : this.setState({ unit: 'C' });
    console.log(this.state.unit);
  }

  checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    } else {
      console.log("no")
    }
  }

  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({ location: `${lat},${lng}`, searchValue: `${lat},${lng}` })
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
        if (location.split(',')[1] !== undefined) location = 'your location';
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
    if (searchValue.length > 1) {
      this.setState({ loading: true })
      fetch(`https://weatherbackend.herokuapp.com/api/forecast/${searchValue}/${this.state.unit}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(data => data.json()).then(result => {
        let tempArray = [];
        let weekArray = this.getWeekFromNow();

        result.forEach(e => {
          let weather = {
            day: weekArray[e.dayNr],
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
  }

  fetchOneDetailedDay = () => {
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
      fetch(`https://weatherbackend.herokuapp.com/api/24h/${searchValue}/${this.state.unit}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(data => data.json()).then(result => {
        if (location.split(',')[1] !== undefined) location = 'your location';
        this.setState({ hourlyDetails: result, loading: false, typeOFContent: "detail" })
      });
    }
  }


  getWeekFromNow = () => {
    let date = new Date();
    let counter = date.getDay();
    let start = date.getDay();
    let weekArray = [];
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let i = 0; i < 6; i++) {
      weekArray.push(weekday[counter])
      counter++;
      if (counter == 6) {
        for (let j = 0; j < 6; j++) {
          weekArray.push(weekday[j]);
        }
      }
    }
    console.log(weekArray);
    return weekArray;
  }

  getRandomIcon = () => {
    let icons = [
      'rainy',
      'cloud',
      'sun'
    ]
    let randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    let weatherDiv;
    if (randomIcon === 'sun') {
      weatherDiv = (
        <div className="sunContainer">
          <div className="theSun">
            <div className="centerSun"></div>
            <div className="rays">
              <div className="ray1">
                <div className="sunbeam"></div>
              </div>
              <div className="ray2">
                <div className="sunbeam"></div>
              </div>
              <div className="ray3">
                <div className="sunbeam"></div>
              </div>
              <div className="ray4">
                <div className="sunbeam"></div>
              </div>
              <div className="ray5">
                <div className="sunbeam"></div>
              </div>
              <div className="ray6">
                <div className="sunbeam"></div>
              </div>
              <div className="ray7">
                <div className="sunbeam"></div>
              </div>
              <div className="ray8">
                <div className="sunbeam"></div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      weatherDiv = (<div className="sunContainer"> <div className={randomIcon} /></div>)
    }

    this.setState({
      icon: weatherDiv
    })

  }

  gobackToMainMenu = () => {
    this.setState({ typeOFContent: "start", unit: 'C', weatherInfo: [], forecast: [] });
  }

  componentDidMount() {
    let _element = React.createRef();
    console.log(_element);
    this.checkGeolocation();
    this.getRandomIcon();
  }

  render() {
    let loader = null;
    if (this.state.loading) {
      loader = "lds-facebook";
    }
    if (!this.state.loading) {
      loader = "";
    }

    if (this.state.typeOFContent === "start") {
      return (
        <div className="App">
          {this.state.icon}
          <div className="BigContainer">
            <div className="Container">
              <input className="searchCityInput" value={this.state.searchValue} onChange={this.handleSearchQuery} onKeyPress={this.handleKeyPress} placeholder="Weather, where?"></input>
              <button className="searchWeatherButton" onClick={this.fetchCity}>now</button>
              <button className="searchWeatherButton" onClick={this.fetchForecast}>forecast</button>
              <button className="searchWeatherButton" onClick={this.fetchOneDetailedDay}>24h details</button>
              <div className="ml-1">
                <p><b>Celsius/Fahrenheit</b></p>
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
        <Forecast forecast={this.state.forecast} goback={this.gobackToMainMenu} location={this.state.searchValue} unit={this.state.unit} />
      )
    }

    if (this.state.typeOFContent === 'detail') {
      return (
        <DetailedDay hourlyDetails={this.state.hourlyDetails} goback={this.gobackToMainMenu} location={this.state.searchValue} unit={this.state.unit} />
      )
    }

  }
}

export default App;

