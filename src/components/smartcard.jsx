import React, { Component } from 'react'
import '../smartcard.css'
import Matchicon from '../matchicon';


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
              <div className="flexRight">
                <h3>Weather in {weatherInfo[6]}</h3> <div className="iconContainer"><Matchicon icon={weatherInfo[7].toString()} /></div>
              </div>
              <div className="weatherInfoP">Temperature: <b>{weatherInfo[1]}° {weatherInfo[8]}</b></div><br></br>
              <div className="flexRight">
                <div className="weatherInfoP"> Sunrise: <b>{weatherInfo[3]}<div className="iconContainer"><Matchicon icon="sunrise" /></div></b></div> <br></br>
              </div>
              <div className="flexRight">
                <div className="weatherInfoP"> Sunset: <b>{weatherInfo[4]} <div className="iconContainer"><Matchicon icon="sunrise" /></div></b></div><br></br>
              </div>
              <div className="weatherInfoP">Summary: <b>{weatherInfo[2]}</b></div><br></br>
              <div className="weatherInfoP">Humidity: <b>{weatherInfo[0]}</b></div><br></br>
              <div className="weatherInfoP">Windspeed: <b>{weatherInfo[5]}</b></div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }

  }
}




