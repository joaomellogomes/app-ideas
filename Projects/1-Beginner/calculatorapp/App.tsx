import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { ButtonsWrapper, Container, InputWrapper } from './src/components/styles/App.style'

const App = () => {
	return (
		<ThemeProvider theme={{}}>
			<Container>
				<InputWrapper />
				<ButtonsWrapper />
			</Container>
		</ThemeProvider>
	)
}

export default App
