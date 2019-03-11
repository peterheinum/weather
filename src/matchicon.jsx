import React from 'react';
import cloudyday from './images/cloudyday.svg';
import cloudynight from './images/cloudynight.svg';
import fog from './images/fog.svg';
import rain from './images/rain.svg';
import snow from './images/snow.svg';
import sunrise from './images/rain.svg';
import sunset from './images/moon.svg';
import clearday from './images/clearday.svg';
import clearnight from './images/clearnight.svg';
import wind from './images/wind.svg';
import sleet from './images/sleet.svg';
import cloudy from './images/cloudy.svg';






const matchicon = (props) => {
  let matchedIcon = null;
  switch (props.icon) {
    case "clear-day": matchedIcon = clearday;
      break;
    case "clear-night": matchedIcon = clearnight;
      break;
    case "partly-cloudy-day": matchedIcon = cloudyday;
      break;
    case "partly-cloudy-night": matchedIcon = cloudynight;
      break;
    case "cloudy": matchedIcon = cloudy;
      break;
    case "rain": matchedIcon = rain;
      break;
    case "sleet": matchedIcon = sleet;
      break;
    case "snow": matchedIcon = snow;
      break;
    case "wind": matchedIcon = wind;
      break;
    case "fog": matchedIcon = fog;
      break;
    case "sunrise": matchedIcon = sunrise;
      break;
    case "sunset": matchedIcon = sunset;
      break;
    default: return null;
  }

  return <img alt="weathericon" src={matchedIcon} height="50vh" width="50vw" />
}

export default matchicon;



