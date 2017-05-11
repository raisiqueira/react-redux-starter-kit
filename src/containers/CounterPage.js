import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import wrapActionCreators from '../utils/wrapActionCreators';
import {Helmet} from "react-helmet";

@connect(state => ({
  counter: state.counter
}), wrapActionCreators(CounterActions))
export default class CounterPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
           <title>React Redux Starter Kit | Counter Page</title>
        </Helmet>
        <Counter {...this.props} />
      </div>
    );
  }
}
