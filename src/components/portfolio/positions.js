import React from 'react';
import CardCollection from './card-collection';
import './card-collection.scss';

export default class Positions extends React.Component {
  render() {
    return (
      <div className='col s12'>
        <p className='grey-text text-darken-3'>Positions</p>
        <CardCollection />
        <p className='grey-text text-darken-3'>Watchlist</p>
        <CardCollection />
      </div>
    );
  }
}