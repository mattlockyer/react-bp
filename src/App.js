import React, { Component } from 'react'
// router
import { BrowserRouter as Router, Route } from "react-router-dom";
// imports
import {
  //redux
  connect, appState, appDispatch,
  //paths
  Home, About,
  //components
  TapBar,
} from './imports'

class App extends Component {

  componentDidMount() {
    this.props.appDispatch.onMount()
  }

  route = (Component, props) => {
    props = { ...props, ...this.props }
    return <Component {...props} />
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Route exact path="/" render={(props) => this.route(Home, props)} />
            <Route exact path="/about" render={(props) => this.route(About, props)} />
          </div>
          <TapBar />
        </div>
      </Router>
    )
  }
}

export default connect(
  (state) => ({ appState: appState(state) }),
  (dispatch) => ({ appDispatch: appDispatch(dispatch) })
)(App);