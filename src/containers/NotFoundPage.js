import React, { Component } from 'react';
import {Helmet} from "react-helmet";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
           <title>React Redux Starter Kit | Not Found</title>
        </Helmet>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }
}
