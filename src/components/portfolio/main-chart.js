import React from 'react';
import './main-chart.scss';
import Chartjs from 'chart.js';

export default class MainChart extends React.Component {
  render() {
    return (
      <div className='col s12'>
        <div className='card grey darken-3' id='main-chart'>
          <div className='card-content'>
          </div>
        </div>
      </div>
    );
  }
}