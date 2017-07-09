import React from 'react';
import Value from './value';
import MainChart from './main-chart';
import InfoCard from './info-card';
import Positions from './positions';
import Watchlist from './watchlist';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className='container'>
        <Value />
        <MainChart />
        <InfoCard />
        <Positions />
        <Watchlist />
      </div>
    );
  }
}