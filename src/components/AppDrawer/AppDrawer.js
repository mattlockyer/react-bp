import React from 'react';
import { useDispatch } from 'react-redux'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  setDrawerState
} from '../../imports'

export default function AppDrawer({open}) {

  const dispatch = useDispatch()
  const handleClose = () => dispatch(setDrawerState({ open: false }))

  return (
    <div>
      <SwipeableDrawer 
        open={open} 
        onClose={handleClose}
        onOpen={() => {}}
      >
      <div
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
      </SwipeableDrawer>
      
    </div>
  );
}