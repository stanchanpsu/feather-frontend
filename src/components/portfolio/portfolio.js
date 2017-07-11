import React from 'react';
import Value from './value';
import MainChart from './main-chart';
import InfoCard from './info-card';
import Positions from './positions';
import Watchlist from './watchlist';
import FakePositions from '../../../mock-data/positions';
import FakeWatchlist from '../../../mock-data/watchlist';

import lodash from 'lodash';
import Chart from 'chart.js';
import StockApi from '../../stock-api';


export default class Portfolio extends React.Component {

  constructor() {
    super();
    // var chartContext = document.getElementById('main-chart').getContext('2d');
    this.state = {
      'positions': FakePositions,
      'chartData': {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        'datasets': [{
          'label': 'My First dataset',
          'backgroundColor': 'rgb(255, 99, 132)',
          'borderColor': 'rgb(255, 99, 132)',
          'data': [0, 10, 5, 2, 20, 30, 45],
        }]
      },
      'chartOptions': {}
    };

    this.getChartData().then((results) => {
      lodash.each(results, (results) => {
        console.log(results);
      });
    });

  }

  getChartData() {
    var getIntradayPromises = [];
    lodash.each(this.state.positions, (position) => {
      getIntradayPromises.push(StockApi.getIntraday(position.ticker));
    });
    return Promise.all(getIntradayPromises);
  }

  render() {
    return (
      <div className='container'>
        <Value />
        <MainChart currentStockDisplayed={this.state.positions} chartData={this.state.chartData} chartOptions={this.state.chartOptions} createChart={(context) => this.createChart(context)}/>
        <InfoCard />
        <div className='row'>
          <Positions positions={FakePositions} />
          <Watchlist watchlist={FakeWatchlist} />
        </div>
      </div>
    );
  }
}