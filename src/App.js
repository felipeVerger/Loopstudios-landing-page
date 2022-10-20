import React from 'react'
import { Container, Stack, ThemeProvider } from '@mui/material'
import {theme} from './assets/theme.js';

import Header from './components/Header/Header'
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Stack height='100%' position='relative'>
            <Header/>
            <Container maxWidth='lg'>
                <Main/>
            </Container>
            <Footer/>
        </Stack>
    </ThemeProvider>
  )
}

export default App