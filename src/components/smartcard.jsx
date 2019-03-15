import React, { Component } from 'react'
import '../styles/smartcard.css'
import Matchicon from '../matchicon';


export default class smartcard extends Component {
  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  render() {
    const { weatherInfo } = this.props;
    if (weatherInfo[0] != undefined) {
      return (
        <div className="WholeBody">
          <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
          <div className="FlexMiddle">
            <div className="weatherCardBorder">
              <div className="weatherInfoP alignCenter headerOfCard">Weather in  <b className="flexRight alignCenter pl-1">{weatherInfo[6]}<div className="iconContainer"><Matchicon icon={weatherInfo[7].toString()} /></div></b></div>
              <div className="weatherInfoP">Summary:  <b className="pl-1">{weatherInfo[2]}</b></div><br></br>
              <div className="weatherInfoP">Temperature:  <b className="pl-1"> {weatherInfo[1]}° {weatherInfo[8]}</b></div><br></br>
              <div className="weatherInfoP">Windspeed:  <b className="pl-1"> {weatherInfo[5]}</b></div> <br></br>
              <div className="weatherInfoP">Humidity:   <b className="pl-1"> {weatherInfo[0]}</b></div><br></br>
              <br></br>
              <br></br>
              <div className="weatherInfoP alignCenter">Sunrise: <b className="flexRight alignCenter pl-1"> {weatherInfo[3]}<div className="iconContainer"><Matchicon icon="sunrise" /></div></b></div>
              <div className="weatherInfoP alignCenter">Sunset: <b className="flexRight alignCenter pl-1"> {weatherInfo[4]} <Matchicon icon="sunset" /></b></div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }

  }
}




