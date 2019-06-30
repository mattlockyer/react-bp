import React from 'react';
import { useDispatch } from 'react-redux'
import Popover from '@material-ui/core/Popover';
import {
  setPopoverState
} from '../../imports'
import { root } from './AppPopover.module.scss'

export default function AppPopover({open, anchor}) {

  const dispatch = useDispatch()
  const handleClose = () => dispatch(setPopoverState({ open: false }))

  return (
    <Popover
      className={root}
      open={open}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <div>
        The content of the Popover.
      </div>
    </Popover>
  );
}