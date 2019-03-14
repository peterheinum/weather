import React, { Component } from 'react';
import '../styles/smartcard.css';
import '../styles/forecast.css';
import Matchicon from '../matchicon'


export default class Forecast extends Component {
  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  uppercaseFirst = (string) =>
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  render() {
    const { forecast } = this.props;
    const { unit } = this.props;
    let { location } = this.props;
    if(location.split(',')[1] !== undefined) location = 'your location';
    

    return (
      <div className="forecastContainer">
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
        <div className="midflex alignCenter"><h3>Forecast of weather in <b>{this.uppercaseFirst(location)}</b></h3></div>
        <div className="midflex">
          {forecast.map(item => {
            return <div className="weatherCard">
              <div className="weatherInfoP alignCenter headerOfCard">{item.weather.day} <b className="flexRight alignCenter pl-1"><div className="iconContainer"><Matchicon icon={item.weather.icon} /></div></b></div>
              <div className="weatherInfoP">Summary:  <b className="pl-1 overauto">{item.weather.summary}</b></div><br></br>
              <div className="weatherInfoP">Max:  <b className="pl-1"> {item.weather.temperatureMax}° {unit}</b></div><br></br>
              <div className="weatherInfoP">Min:  <b className="pl-1"> {item.weather.temperatureMin}° {unit}</b></div><br></br>
              <div className="weatherInfoP">Windspeed:  <b className="pl-1"> {item.weather.windSpeed}</b></div> <br></br>
              <div className="weatherInfoP">Humidity:   <b className="pl-1"> {item.weather.humidity}</b></div><br></br>
              <br></br>
              <br></br>
              <div className="weatherInfoP alignCenter">Sunrise: <b className="flexRight alignCenter pl-1"> {item.weather.sunrise}<div className="iconContainer"><Matchicon icon="sunrise" /></div></b></div>
              <div className="weatherInfoP alignCenter">Sunset: <b className="flexRight alignCenter pl-1"> {item.weather.sunset} <Matchicon icon="sunset" /></b></div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

