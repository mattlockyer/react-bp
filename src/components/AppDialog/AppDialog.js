import React from 'react';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  setDialogState
} from '../../imports'
import { root } from './AppDialog.module.scss'

export default function AppDialog({ open, title, content }) {

  const dispatch = useDispatch()
  const handleClose = () => dispatch(setDialogState({ open: false }))

  return (
    <Dialog
      className={root}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {
        content &&
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
      }
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">
          Disagree
          </Button>
        <Button variant="outlined" onClick={handleClose} color="primary" autoFocus>
          Agree
          </Button>
      </DialogActions>
    </Dialog>
  );
}