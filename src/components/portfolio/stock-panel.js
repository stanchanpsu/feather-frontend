import React from 'react';
import './card-collection.scss';


export default function StockPanel(props) {
  var subtext = (props.watchlist ? 'Watchlist' : props.shares + ' Shares');
  return (
    <div className='card-panel card-content collection-item grey darken-3 row valign-wrapper waves-effect waves-light'>
      <div className='col s4 white-text'>
        <p>{props.ticker}</p>
        <p className='grey-text darken-2-text'>{subtext}</p>
      </div>
      <div className='col s4 white-text'></div>
      <div className='col s4 right-align feather-green-text'>${props.price}</div>
    </div>
  );
}