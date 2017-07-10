import React from 'react';
import CardCollection from './card-collection';
import StockPanel from './stock-panel';
import './card-collection.scss';

export default class Positions extends React.Component {

  constructor() {
    super();
    this.state = {
      'stocks': ['TSLA', 'MSFT', 'CLDR', 'NFLX']
    };
  }

  renderStock(stock) {
    return (<StockPanel stock={stock} />);
  }

  render() {
    var stockPanels = [];

    if (this.state.stocks.length === 0) {
      stockPanels = <p className='card-content collection-item grey darken-3 white-text'>You have no positions.</p>;
    } else {
      this.state.stocks.forEach((stock) => {
        stockPanels.push(this.renderStock(stock));
      });
    }

    return (
      <div className='col s12 l6'>
        <p className='grey-text text-darken-3'>Positions</p>
        <CardCollection>
          {stockPanels}
        </CardCollection>
      </div>
    );
  }
}