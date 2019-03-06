import React, { Component } from 'react'
import '../smartcard.css'

export default class smartcard extends Component {
  constructor(props) {
    super();
    this.state = {
      weatherInfo: []
      }
  }



  render() {
    const { weatherInfo } = this.state;
    weatherInfo.map(value => {
      console.log(value);
    })
      return (
        <div className="weatherCardBorder">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      )
  }
}



// <div>Sunrise: {sunrise}</div> <br></br>
// <div>Sunset: {sunset}</div><br></br>
// <div>Summary: {summary}</div><br></br>
// <div>Humidity: {humidity}</div><br></br>
// <div>Temperature: {temperature}</div><br></br>
