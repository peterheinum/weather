import React, { Component } from 'react'
import '../smartcard.css'

export default class smartcard extends Component {
  render() {
    const { weatherInfo } = this.props;
    console.log(weatherInfo);
    if(weatherInfo[0] != undefined) {
      return (
        <div className="weatherCardBorder">
        <h3>Todays weather in {weatherInfo[6]}</h3>
          <div>Sunrise: {weatherInfo[0]}</div> <br></br>
          <div>Sunset: {weatherInfo[1]}</div><br></br>
          <div>Summary: {weatherInfo[2]}</div><br></br>
          <div>Humidity: {weatherInfo[3]}</div><br></br>
          <div>Temperature: {weatherInfo[4]}</div><br></br>
          <div>Windspeed: {weatherInfo[5]}</div>
        </div>
      )
    } else {
      return null;
    }
  
  }
}




