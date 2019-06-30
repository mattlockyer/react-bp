import React from 'react'
import {useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button';
import { 
  setDialogState, setPopoverState,
} from '../../imports';
import {root} from './../common/Page.module.scss'

export default function Home () {

  const dispatch = useDispatch()

  return (
    <div className={root}>
      <h2>
        Home
      </h2>
      <p>
        Welcome
      </p>

      <Button
        variant="outlined"
        onClick={() => dispatch(setDialogState({open: true, title: 'Test'}))}
      >
        Open Dialog
      </Button>

      <Button
        variant="outlined"
        onClick={(e) => dispatch(setPopoverState({open: true, anchor: e.target}))}
      >
        Open Popover
      </Button>
    </div>
  )
}