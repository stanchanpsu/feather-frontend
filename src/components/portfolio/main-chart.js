import React from 'react';
import './main-chart.scss';
import Chart from 'chart.js';
import colors from '../../color';
import lodash from 'lodash';
import stockApi from '../../stock-api';

export default class MainChart extends React.Component {
  
  createChart(context) {
    var labelArray = new Array(12);
    lodash.fill(labelArray, '*');
    var chart = new Chart(context, {
      // The type of chart we want to create
      'type': 'line',

      // The data for our dataset
      'data': {
        'labels': labelArray,
        'datasets': [
          {
            'borderColor': colors.featherGreen,
            'data': [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, null, null, null, null],
            'fill': false,
            'pointRadius': 0,
            'lineTension': 0
          }
        ]
      },

      // Configuration options go here
      'options': {
        'maintainAspectRatio': false,
        'legend': {
          'display': false
        },
        'layout': {
          'padding': {
            'top': 30
          }
        },
        'scales': {
          'xAxes': [
            {
              'gridLines': {
                'display': false
              },
              'display': false
            }
          ],
          'yAxes': [
            {
              'gridLines': {
                'display': false
              },
              'display': false
            }
          ]
        }
      }
    });
    this.setState({ 'chart': chart });
  }

  componentDidMount() {
    var context = this.refs.canvas;
    console.log(context);
    this.createChart(context);
  }

  render() {
    return (
      <div className='col s12'>
        <div className='card grey darken-3' id='main-chart-card'>
          <div className='card-content container' id='main-chart-card-content'>
            <div id='main-chart-wrapper'>
              <canvas id='main-chart' ref='canvas' />
            </div>
            {/*<div className='row'>
              <div className='col s2'>1D</div>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}