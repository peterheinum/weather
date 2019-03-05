import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super();
    this.state = {
      data: null
    }
  }

  render(){
    const {items} = this.props;
    console.log({items})
    return (
      <div>Hello world but again</div>
    )
  }
}

export default Weather;
