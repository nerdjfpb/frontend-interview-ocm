import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ALL_ANIMES } from '../services/AnimesData'
import CardComponent from '../components/Card/Card.component'
import Typography from '@material-ui/core/Typography'

const HomePage = () => {
	const { loading, error, data } = useQuery(ALL_ANIMES)

	const [cureentPage, setCurrentPage] = useState(1)

	const handlePageChange = (_, page) => {
		setCurrentPage(page)
	}

	if (loading) return <CircularProgress />
	if (error) return `Error! ${error.message}`

	const itemPerPage = 6
	const totalPage = Math.ceil(data.Page.media.length / itemPerPage)

	const filterData = data.Page.media.slice(
		(cureentPage - 1) * itemPerPage,
		cureentPage * itemPerPage
	)

	return (
		<div style={{ padding: '40px 0' }}>
			<Typography variant='h3' component='h2' gutterBottom align='center'>
				Anime List
			</Typography>

			<Grid container spacing={4} justify='center'>
				{filterData.map((item) => (
					<Grid item lg={4} md={6} xs={12} key={item.id}>
						{/* <Paper elevation={3}> */}
						<CardComponent anime={item} />
						{/* </Paper> */}
					</Grid>
				))}
			</Grid>

			<Grid container spacing={6} justify='center'>
				<Grid item>
					<Pagination
						count={totalPage}
						page={cureentPage}
						color='primary'
						onChange={(_, page) => handlePageChange(_, page)}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default HomePage
