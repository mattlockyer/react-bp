import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// router
import { BrowserRouter as Router, Route } from "react-router-dom";
// imports
import {
  //redux
  appState,
  appDispatch,
  //paths
  Home, About,
  //components
  AppBar, AppDrawer, AppDialog, AppPopover, TapBar,
} from './imports'

export default connect(
  (state) => ({ appState: appState(state) }),
  (dispatch) => ({ appDispatch: appDispatch(dispatch) })
)(function App(props) {

  const {
    appState: { drawerState, dialogState, popoverState },
    appDispatch: { onMount },
  } = props

  //on mount
  useEffect(() => {
    onMount()
  }, [onMount])

  //pass props to route components
  const route = (Component, routeProps) => {
    props = { ...routeProps, ...props }
    return <Component {...props} />
  }

  return (
    <Router>
      <AppBar />
      <AppDrawer {...drawerState} />
      <Route exact path="/" render={(rp) => route(Home, rp)} />
      <Route exact path="/about" render={(rp) => route(About, rp)} />
      <TapBar />
      <AppDialog {...dialogState} />
      <AppPopover {...popoverState} />
    </Router>
  )
})