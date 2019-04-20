//redux
export { connect } from 'react-redux'
export { SERVER } from './util/redux-util'
export { default as reducers } from './redux/reducers'
export { appState, appDispatch } from './redux/app'
//routes
export { default as App } from './App'
export { default as Home } from './routes/Home/Home'
export { default as About } from './routes/About/About'
//components
export { default as TapBar } from './components/TapBar/TapBar'