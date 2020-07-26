import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		boxShadow:
			'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
		transition: 'all .3s ',
		'&:hover': {
			transform: 'translate(5px, -5px)',
		},
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		color: theme.palette.primary,
		fontSize: 20,
	},
	media: {
		width: '100%',
		height: 0,
		paddingTop: '56.25%',
		marginBottom: '15px',
	},
}))

const CardComponent = ({ anime }) => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					{anime.title.userPreferred}
				</Typography>

				<CardMedia
					className={classes.media}
					image={anime.coverImage.extraLarge}
					title='Movie Image'
				/>
				<Typography variant='body2' component='p'>
					Episode: {anime.episodes}
				</Typography>
				<Typography variant='body2' component='p'>
					Status: {anime.status}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardComponent
