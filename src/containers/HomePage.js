import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ListActions from '../actions/list'
import wrapActionCreators from '../utils/wrapActionCreators'
import {Helmet} from "react-helmet"

const mapStateToProps = (state) => {
  const {list} = state

  return {
    ...list
  }
}

@connect(mapStateToProps, wrapActionCreators(ListActions))

export default class HomePage extends Component {

  componentDidMount() {
    const {getListData} = this.props

    getListData()
  }

  get items(){
    const {items} = this.props
    if(!items) {
      return null
    }
    return items.map((item, index) => <li key={index}>{item.title}</li>)
  }

  render() {
    const {isFetching} = this.props

    return (
      <div>
        <Helmet>
           <title>React Redux Starter Kit | Counter Page</title>
        </Helmet>
        { isFetching ? <div>Loading...</div> : null}
        <ul>
          {this.items}
        </ul>
      </div>
    )
  }
}
