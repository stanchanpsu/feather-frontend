import React from 'react';
import './main-chart.scss';
import Chart from 'chart.js';
import colors from '../../color';
import lodash from 'lodash';
import stockApi from '../../stock-api';

export default class MainChart extends React.Component {
  
  createChart(context, plotPoints) {
    var chart = new Chart(context, {
      // The type of chart we want to create
      'type': 'line',

      // The data for our dataset
      'data': {
        'labels': lodash.map(plotPoints, 'time'),
        'datasets': [
          {
            'borderColor': colors.featherGreen,
            'data': lodash.map(plotPoints, 'close'),
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
        },
        'tooltips': {
          'enabled': true,
          'mode': 'index',
          'intersect': false,
          'titleFontFamily': 'Roboto',
          'bodyFontFamily': 'Roboto',
          'displayColors': false
        }
      }
    });
    this.setState({ 'chart': chart });
  }

  componentDidMount() {
    var context = this.refs.canvas;
    // console.log(context);
    stockApi.getIntraday('TSLA', '5min')
      .then((result) => {
        var timeSeries = result['Time Series (5min)'];
        console.log(timeSeries);
        var todayTimeSeries = lodash.pickBy(timeSeries, (value, key) => {
          return new Date(key).getDate() == new Date().getDate();
        });
        console.log(todayTimeSeries);
        var todayCloseTimeSeries = lodash.reverse(lodash.map(todayTimeSeries, (timeData, key) => {
          var dateTime = new Date(key);
          return {'time': dateTime.getHours() + ':' + ('0' + dateTime.getMinutes()).slice(-2), 'close': parseFloat(timeData['4. close']).toFixed(2)};
        }));
        console.log(todayCloseTimeSeries);
        this.createChart(context,todayCloseTimeSeries);
      });
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='card grey darken-3' id='main-chart-card'>
            <div className='card-content container' id='main-chart-card-content'>
              <div id='main-chart-wrapper'>
                <canvas id='main-chart' ref='canvas' />
              </div>
            </div>
            <div className="card-action" id='main-chart-card-action'>
              <a className="chart-btn waves-effect white-text feather-green waves-white btn-flat">1D</a>
              <a className="chart-btn waves-effect white-text btn-flat">1W</a>
              <a className="chart-btn waves-effect white-text btn-flat">1M</a>
              <a className="chart-btn waves-effect white-text btn-flat">3M</a>
              <a className="chart-btn waves-effect white-text btn-flat">1Y</a>
              <a className="chart-btn waves-effect white-text btn-flat">5Y</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}