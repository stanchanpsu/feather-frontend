import React from 'react';
import lodash from 'lodash';
import CardCollection from './card-collection';
import StockPanel from './stock-panel';
import './card-collection.scss';
import FakePositions from '../../../mock-data/positions';

export default class Positions extends React.Component {

  constructor() {
    super();
    this.state = {
      'stocks': FakePositions
    };
  }

  renderStock(stock) {
    return (<StockPanel ticker={stock.ticker} shares={stock.shares} price={stock.price} />);
  }

  render() {
    var stockPanels = [];

    if (lodash.isEmpty(this.state.stocks)) {
      stockPanels = (
        <p className='card-content collection-item grey darken-3 white-text'>
          You have no positions right now.
        </p>);
    } else {
      lodash.forOwn(this.state.stocks, (stock) => {
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