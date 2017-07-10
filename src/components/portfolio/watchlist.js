import React from 'react';
import lodash from 'lodash';
import CardCollection from './card-collection';
import StockPanel from './stock-panel';
import './card-collection.scss';
import FakeWatchlist from '../../../mock-data/watchlist';

export default class Watchlist extends React.Component {

  constructor() {
    super();
    this.state = {
      'stocks': FakeWatchlist
    };
  }

  renderStock(stock) {
    return (<StockPanel ticker={stock.ticker} watchlist={true} price={stock.price} />);
  }

  render() {
    var stockPanels = [];

    if (lodash.isEmpty(this.state.stocks)) {
      stockPanels = (
        <p className='card-content collection-item grey darken-3 white-text'>
          You aren't watching anything right now.
        </p>);
    } else {
      lodash.forOwn(this.state.stocks, (stock) => {
        stockPanels.push(this.renderStock(stock));
      });
    }

    return (
      <div className='col s12 l6'>
        <p className='grey-text text-darken-3'>Watchlist</p>
        <CardCollection>
          {stockPanels}
        </CardCollection>
      </div>
    );
  }
}