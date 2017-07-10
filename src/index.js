import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/portfolio';
import './index.scss';

class Feather extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Portfolio />
      </div>
    );

  }
}

ReactDOM.render(
  <Feather />,
  document.getElementById('root')
);
