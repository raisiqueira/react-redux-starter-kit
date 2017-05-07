import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>react-redux-starter-kit</h2>

        <Link to="/">Home Page</Link> -&nbsp;
        <Link to="/another">Another Page</Link>
      </div>
    );
  }
}
