import React from 'react';
import './value.scss';

export default class Value extends React.Component {
  render() {
    return (
      <div className='center-align col s12' id='value-wrapper'>
        <h3 className='no-margin white-text portfolio-value'>$3163.11</h3>
        <p className='no-margin daily-change'>+$85.56 (+2.78%) Jul 07, 2017</p>
        <p className='no-margin after-hours-change'>-0.24 (-0.01%) After Hours</p>
      </div>
    );
  }
}