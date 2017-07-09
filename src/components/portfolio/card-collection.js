import React from 'react';
import StockPanel from './stock-panel';
import './card-collection.scss';

export default function CardCollection(props) {
  return (
    <div className='card collection card-collection'>
      <StockPanel />
      <StockPanel />
    </div>
  );
}