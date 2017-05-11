import React, { Component } from 'react';
import {Helmet} from "react-helmet";

export default class AnotherPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
           <title>React Redux Starter Kit | Another Page</title>
        </Helmet>
        <h3>AnotherPage</h3>
      </div>
    );
  }
}
