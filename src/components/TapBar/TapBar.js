import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {root} from './TapBar.module.scss'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={root}
    >
      <BottomNavigationAction label="Settings" icon={<i className={'fas fa-sliders-h'}></i>} />
      <BottomNavigationAction label="Favorites" icon={<i className={'far fa-heart'}></i>} />
      <BottomNavigationAction label="Recents" icon={<i className={'fas fa-history'}></i>} />
    </BottomNavigation>
  );
}