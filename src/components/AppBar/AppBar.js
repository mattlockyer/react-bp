import React from 'react';
import {useDispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  setDrawerState
} from '../../imports'
import {root} from './AppBar.module.scss'

export default function SimpleAppBar() {

  const dispatch = useDispatch()

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <i 
            onClick={() => dispatch(setDrawerState({open: true}))}
            className="fas fa-bars"
          ></i>
          <h3>Welcome</h3>
        </Toolbar>
      </AppBar>
    </div>
  );
}