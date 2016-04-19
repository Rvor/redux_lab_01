import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart color="orange" data={temps} unit="C"/>
        </td>
        <td>
          <Chart color="blue" data={pressures} unit="hPa"/>
        </td>
        <td>
          <Chart color="red" data={humidities} unit="%"/>
        </td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
function mapStateToProps(state){
  return { weather: state.weather };
}
*/

function mapStateToProps({ weather }){

  return { weather }; // ~ return { weather: weather } => es6 syntax
}

export default connect(mapStateToProps)(WeatherList);
