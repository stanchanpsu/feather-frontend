import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper green accent-2">
          <div className='container'>
            <a href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}