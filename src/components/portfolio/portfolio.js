import React from 'react';
import Value from './value';
import MainChart from './main-chart';
import InfoCard from './info-card';
import Positions from './positions';
import Watchlist from './watchlist';
import FakePositions from '../../../mock-data/positions';
import FakeWatchlist from '../../../mock-data/watchlist';


export default class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      'currentStockDisplayed': FakePositions[0]
    };
  }
  render() {
    return (
      <div className='container'>
        <Value />
        <MainChart currentStockDisplayed={this.state.currentStockDisplayed}/>
        <InfoCard />
        <div className='row'>
          <Positions positions={FakePositions} />
          <Watchlist watchlist={FakeWatchlist}/>
        </div>
      </div>
    );
  }
}