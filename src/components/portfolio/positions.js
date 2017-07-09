import React from 'react';
import CardCollection from './card-collection';
import './card-collection.scss';

export default function Positions() {
  return (
    <div className='col s12 l6'>
      <p className='grey-text text-darken-3'>Positions</p>
      <CardCollection />
    </div>
  );
}