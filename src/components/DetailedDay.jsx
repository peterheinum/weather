import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../styles/smartcard.css';
import '../styles/DetailedDay.css';

export default class DetailedDay extends Component {
  state = {

  }

  gotomain = () => {
    const { goback } = this.props;
    goback();
  }

  componentWillMount() {

  }

  render() {
    const data = [];
    const { hourlyDetails } = this.props;
    const { unit } = this.props;
    hourlyDetails.forEach(e => {
      data.push({ name: e.time, uv: e.temperature, pv: e.apparentTemperature, amt: 2400 })
    });
    const renderLineChart = (
      <ResponsiveContainer>
        <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="darkslateblue" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    );
    return (
      <div>
        <div className="topnav"> <button className="backButton" onClick={this.gotomain}>Back</button></div>
        <h1 className="flexbox">Data for {this.props.location}</h1>
        <div className="flexbox bigheight">
       
          <div className="flexColumn">
            <p className="temperature">Temperature °{unit}</p>
            <p className="apparentTemperature">Apparent Temperature °{unit}</p>
          </div>
          <div className="boxForChart">
            {renderLineChart}
          </div>
          <div className="smallcardContainer">
            {hourlyDetails.map(e => {
              return (
                <div className="smallcard">
                  <p> {e.time}</p>
                  <p>{e.temperature}°{unit}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
