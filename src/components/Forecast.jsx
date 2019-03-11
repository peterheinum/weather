import React, { Component } from 'react';
import '../smartcard.css';
import '../forecast.css';
import { matchicon } from '../matchicon'


export default class Forecast extends Component {
  state = {
  }

  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  render() {
    const { forecast } = this.props;
    //  console.log(forecast);
    //const forecast = [{ "dayNr": 0, "windSpeed": 5.33, "summary": "Måttlig vind och lätt molnighet som startar under eftermiddagen, fortsätter fram till kvällen.", "temperatureMin": -7.62, "temperatureMax": -0.21, "humidity": 0.51, "apparentTemperatureMin": -13.93, "apparentTemperatureMax": -6.24, "sunrise": "5:18", "sunset": "16:40", "icon": "wind" }, { "dayNr": 1, "windSpeed": 1.24, "summary": "Molnigt som startar under kvällen.", "temperatureMin": -7.94, "temperatureMax": -0.38, "humidity": 0.51, "apparentTemperatureMin": -13.98, "apparentTemperatureMax": -0.38, "sunrise": "5:18", "sunset": "16:40", "icon": "partly-cloudy-night" }, { "dayNr": 2, "windSpeed": 5.37, "summary": "Snöby (2–6 cm.) och måttlig vind fram till eftermiddagen.", "temperatureMin": -2.01, "temperatureMax": 3.96, "humidity": 0.51, "apparentTemperatureMin": -7.18, "apparentTemperatureMax": 0.92, "sunrise": "5:18", "sunset": "16:40", "icon": "snow" }, { "dayNr": 3, "windSpeed": 3.29, "summary": "Dimma på morgonen.", "temperatureMin": 1.53, "temperatureMax": 2.87, "humidity": 0.51, "apparentTemperatureMin": -1.78, "apparentTemperatureMax": 0.73, "sunrise": "5:18", "sunset": "16:40", "icon": "fog" }, { "dayNr": 4, "windSpeed": 1.24, "summary": "Molnigt under dagen.", "temperatureMin": -0.32, "temperatureMax": 4.42, "humidity": 0.51, "apparentTemperatureMin": -1.87, "apparentTemperatureMax": 4.03, "sunrise": "5:18", "sunset": "16:40", "icon": "partly-cloudy-day" }, { "dayNr": 5, "windSpeed": 3.97, "summary": "Molnigt under dagen och hård vind under kvällen.", "temperatureMin": 1.46, "temperatureMax": 5.78, "humidity": 0.51, "apparentTemperatureMin": -2.73, "apparentTemperatureMax": 2.81, "sunrise": "5:18", "sunset": "16:40", "icon": "wind" }, { "dayNr": 6, "windSpeed": 3.27, "summary": "Dimma fram till eftermiddagen.", "temperatureMin": 1.64, "temperatureMax": 5.2, "humidity": 0.51, "apparentTemperatureMin": -2.18, "apparentTemperatureMax": 1.7, "sunrise": "5:18", "sunset": "16:40", "icon": "fog" }, { "dayNr": 7, "windSpeed": 2.29, "summary": "Molnigt under dagen.", "temperatureMin": 1.6, "temperatureMax": 5.07, "humidity": 0.51, "apparentTemperatureMin": -2.38, "apparentTemperatureMax": 2.38, "sunrise": "5:18", "sunset": "16:40", "icon": "partly-cloudy-day" }];
    forecast.map(item => {
    })


    return (
      <div className="forecastContainer">
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
         
        </div>
    )
  }

}