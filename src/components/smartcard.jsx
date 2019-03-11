import React, { Component } from 'react'
import '../smartcard.css'


export default class smartcard extends Component {
  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  render() {
    const { weatherInfo } = this.props;
    console.log(weatherInfo);
    if (weatherInfo[0] != undefined) {
      return (
        <div className="WholeBody">
          <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
          <div className="FlexMiddle">
            <div className="weatherCardBorder">
              <h3>Weather in {weatherInfo[6]}</h3>
              <div className="weatherInfoP">Temperature: {weatherInfo[1]}° {weatherInfo[7]} </div><br></br>
              <div className="weatherInfoP">Sunrise: {weatherInfo[3]}</div> <br></br>
              <div className="weatherInfoP">Sunset: {weatherInfo[4]}</div><br></br>
              <div className="weatherInfoP">Summary: {weatherInfo[2]}</div><br></br>
              <div className="weatherInfoP">Humidity: {weatherInfo[0]}</div><br></br>
              <div className="weatherInfoP">Windspeed: {weatherInfo[5]}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }

  }
}




