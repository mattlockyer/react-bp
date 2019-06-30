import React from 'react'
import {useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button';
import { 
  setDialogState
} from '../../imports';
import {root} from './Home.module.scss'

export default function Home () {

  const dispatch = useDispatch()

  return (
    <div className={root}>
      <h1>
        Home
      </h1>
      <p>
        Welcome
      </p>
      <Button
        variant="outlined"
        onClick={() => dispatch(setDialogState({open: true, title: 'Test'}))}
      >Open Dialog</Button>
    </div>
  )
}