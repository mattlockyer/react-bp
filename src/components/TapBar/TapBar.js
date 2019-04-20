import React from 'react'
import { withRouter } from "react-router";
import classNames from 'classnames'
// router
//import { Link } from 'react-router-dom';
// material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/QuestionAnswer';
// styles
import { tapbar } from './TapBar.module.scss'

const TapBar = ({history}) => {

	
	return (
		<div>
			<AppBar
				className={classNames(tapbar)}
				position="fixed"
			>
				<Toolbar>
					<IconButton onClick={() => history.push('/')} color="inherit" aria-label="Open drawer">
						<HomeIcon />
					</IconButton>
					<IconButton onClick={() => history.push('/about')} color="inherit" aria-label="Open drawer">
						<AboutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default withRouter(TapBar)