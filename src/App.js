import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

import { lightTheme } from './theme/theme'
import { darkTheme } from './theme/darktheme'
import HomePage from './pages/Home.page'
import AnimeAppBar from './components/Appbar/Appbar.component'

import './App.css'

const App = () => {
	const [darkMode, setDarkMode] = React.useState(true)

	const toggleDarkMode = () => setDarkMode(!darkMode)

	return (
		<ThemeProvider
			theme={darkMode ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme)}
		>
			<Paper style={{ minHeight: '100vh' }}>
				<AnimeAppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<Container spacing={3}>
					<HomePage />
				</Container>
			</Paper>
		</ThemeProvider>
	)
}

export default App
