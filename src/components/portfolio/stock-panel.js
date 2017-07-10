import React from 'react';
import './card-collection.scss';


export default function StockPanel(props) {
  return (
    <div className='card-panel card-content collection-item grey darken-3 row valign-wrapper'>
      <div className='col s4 white-text'>
        <p>{props.ticker}</p>
        <p className='grey-text darken-2-text'>{props.shares} Shares</p>
      </div>
      <div className='col s4 white-text'></div>
      <div className='col s4 center-align feather-green-text'>${props.price}</div>
    </div>
  );
}