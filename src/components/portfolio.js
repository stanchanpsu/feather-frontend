import React from 'react';
import Value from './value';
import MainChart from './main-chart';
import InfoCard from './info-card';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className='container'>
        <div class='row'>
          <Value />
        </div>
        <div className='row'>
          <MainChart />
          <InfoCard />
        </div>
      </div>
    );
  }
}