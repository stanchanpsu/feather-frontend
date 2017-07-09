import React from 'react';
import CardPanel from './card-panel';
import './card-collection.scss';

export default class Positions extends React.Component {
  render() {
    return (
      <div className='col s12'>
        <p className='grey-text text-darken-3'>Positions</p>
        <div className='card collection card-collection'>
          <CardPanel />
          <CardPanel />
        </div>
      </div>
    );
  }
}