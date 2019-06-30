import React from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {root} from './TapBar.module.scss'

export default withRouter(function TapBar({history}) {
  const [value, setValue] = React.useState(2);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        switch(newValue) {
          case 0: history.push('/about'); break;
          case 1: 
          case 2: history.push('/'); break;
          default: break;
        }
        setValue(newValue);
      }}
      showLabels
      className={root}
    >
      <BottomNavigationAction label="About" icon={<i className={'fas fa-info'}></i>} />
      <BottomNavigationAction label="Settings" icon={<i className={'fas fa-sliders-h'}></i>} />
      <BottomNavigationAction label="Favorites" icon={<i className={'far fa-heart'}></i>} />
    </BottomNavigation>
  );
})