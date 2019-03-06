import React, { Component } from 'react'
import '../smartcard.css'

export default class smartcard extends Component {
  render() {
    const { weatherInfo } = this.props;
    // console.log({weatherInfo});
    console.log(weatherInfo);
    const humidity = weatherInfo[0];
    const temperature = weatherInfo[1];
    const summary = weatherInfo[2];
    const sunrise = weatherInfo[3];
    const sunset = weatherInfo[4];
    const windspeed = weatherInfo[5];
    return (
      <div className="weatherCardBorder">
        <div>Sunrise: {sunrise}</div> <br></br>
        <div>Sunset: {sunset}</div><br></br>
        <div>Summary: {summary}</div><br></br>
        <div>Humidity: {humidity}</div><br></br>
        <div>Temperature: {temperature}</div><br></br>
        <div>Windspeed: {windspeed}</div>
      </div>
    )
  }
}




