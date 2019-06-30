import React from 'react'
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker'
//redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//theme
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import customTheme from './theme/theme'
//imports
import reducers from './redux/reducers'
import { App } from './imports'
//store
const theme = createMuiTheme(customTheme)
const store = createStore(reducers, applyMiddleware(thunk))
//app with store
const AppWrapped = ({ fromCache }) => (
  <Provider store={ store }>
    <ThemeProvider theme={theme}>
      <App fromCache={fromCache} />
    </ThemeProvider>
  </Provider>
)
//root element
const rootElement = document.getElementById('root')
//render
if (rootElement.hasChildNodes()) {
  hydrate(<AppWrapped fromCache={true} />, rootElement)
} else {
  render(<AppWrapped fromCache={false} />, rootElement)
} 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//material jss insertion point (enables css module overrides)
// import JssProvider from 'react-jss/lib/JssProvider';
// import { create } from 'jss';
// import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// const generateClassName = createGenerateClassName();
// const jss = create({
//   ...jssPreset(),
//   insertionPoint: document.getElementById('jss-insertion-point'),
// });
{/* <JssProvider jss={jss} generateClassName={generateClassName}>
      
    </JssProvider> */}