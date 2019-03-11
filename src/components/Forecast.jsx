import React, { Component } from 'react';
import '../smartcard.css';
import '../forecast.css';


export default class Forecast extends Component {
  state = {

  }

  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  render() {
    const { forecast } = this.props;

    return (
      <div className="forecastContainer">
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
        <div className="flexContainer">
          <div className="forecastCard">
          <p>Max: 6</p>
          <p>min: -3</p>
          <p>Cloudy</p>
          </div>
          <div className="forecastCard">
          <p>Max: 6</p>
          <p>min: -3</p>
          <p>Cloudy</p>
          </div>
          <div className="forecastCard">
          <p>Max: 6</p>
          <p>min: -3</p>
          <p>Cloudy</p>
          </div>
          <div className="forecastCard">
          <p>Max: 6</p>
          <p>min: -3</p>
          <p>Cloudy</p>
          </div>
          <div className="forecastCard">
          <p>Max: 6</p>
          <p>min: -3</p>
          <p>Cloudy</p>
          </div>
        </div>
      </div>
    )
  }

}