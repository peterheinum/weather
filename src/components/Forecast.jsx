import React, { Component } from 'react';
import '../smartcard.css';
import '../forecast.css';
import { matchicon } from '../matchicon'


export default class Forecast extends Component {
  state = {

  }

  gotomain = () => {
    const { goback } = this.props;
    // goback();
    
  }

  render() {
    const { forecast } = this.props;

    return (
      <div className="forecastContainer">
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
        <div className="flexContainer">
          <div className="forecastCard">
          
            <p>Max: <b>6</b></p>
            <p>min: <b>-3</b></p>
            <p>Status: <b>Cloudy</b></p>
          </div>
          <div className="forecastCard">
            <p>Max: <b>6</b></p>
            <p>min: <b>-3</b></p>
            <p>Status: <b>Cloudy</b></p>
          </div>
          <div className="forecastCard">
            <p>Max: <b>6</b></p>
            <p>min: <b>-3</b></p>
            <p>Status: <b>Cloudy</b></p>
          </div>
          <div className="forecastCard">
            <p>Max: <b>6</b></p>
            <p>min: <b>-3</b></p>
            <p>Status: <b>Cloudy</b></p>
          </div>
        </div>
      </div>
    )
  }

}