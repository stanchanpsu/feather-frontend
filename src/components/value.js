import React from 'react';
import './value.scss';

export default class Value extends React.Component {
  render() {
    return (
      <div className='center-align' id='value-wrapper'>
        <h1 className='white-text'>$3163.11</h1>
        <p className='daily-change'>+$85.56 (+2.78%) Jul 07, 2017</p>
        <p className='after-hours-change'>-0.24 (-0.01%) After Hours</p>
      </div>
    );
  }
}