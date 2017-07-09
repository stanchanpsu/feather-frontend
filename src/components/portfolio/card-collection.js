import React from 'react';
import CardPanel from './card-panel';
import './card-collection.scss';

export default function CardCollection(props) {
  return (
    <div className='card collection card-collection'>
      <CardPanel />
      <CardPanel />
    </div>
  );
}