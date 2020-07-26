import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness5Icon from '@material-ui/icons/Brightness5'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

export default function AnimeAppBar({ darkMode, toggleDarkMode }) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Anime App
					</Typography>
					<Button color='inherit' onClick={toggleDarkMode}>
						{darkMode ? <Brightness3Icon /> : <Brightness5Icon />}
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}
