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
    this.state = {
      'positions': FakePositions
    };

    // this.getChartData().then((results) => {
    //   var dataArrays = [];
    //   var data = new Array(391);
    //   lodash.fill(data, null);
    //   lodash.each(results, (result) => {
    //     console.log(result);
    //     // console.log(result);
    //     // let tmpArray = lodash.values(result['Time Series (1min)']);
    //     // console.log(tmpArray);
    //     // let cleanArray = [];
    //     // lodash.each(tmpArray, (timeStamp) => {
    //     //   cleanArray.push(Number(timeStamp['4. close']));
    //     // });
    //     // dataArrays.push(cleanArray);
    //     // console.log(cleanArray);
    //   });
    //   // var result = lodash.zipWith(dataArrays, lodash.add);
    //   // console.log(result);
    // });

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
        {/* <InfoCard /> */}
        <div className='row'>
          <Positions positions={FakePositions} />
          <Watchlist watchlist={FakeWatchlist} />
        </div>
      </div>
    );
  }
}