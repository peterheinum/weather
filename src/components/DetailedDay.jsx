import React, { Component } from 'react';
import '../smartcard.css';
import '../DetailedDay.css';

export default class DetailedDay extends Component {
  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  render() {
    const { hourlyDetails } = this.props;
    const { unit } = this.props;
    console.log(hourlyDetails);
    return (
      <div>
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
        <div className="flexbox">
          {hourlyDetails.map(hour => {
            return (
              <div className="smallcard">
                {hour.time}  <br></br>
                {hour.temperature} °{unit}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
