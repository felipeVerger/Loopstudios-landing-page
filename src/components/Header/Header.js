import React from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'
import Logo from '../../assets/images/logo.svg'
import { useStyles } from './styles'
import './header.css'

const data = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Header = () => {
  const classes = useStyles();
  
  return (
    <div className='container'>
        <Container maxWidth='lg'>
            <Stack direction='row' justifyContent='space-between' mt='2rem'>
                <img src={Logo} alt='logo'/>
                <Box className={classes.itemsContainer}>
                    <Stack direction='row' gap='1rem'>
                        {data.map((item, index) => (
                            <Typography key={index} variant='h6' fontSize='18px' color='white' className={classes.navItems}>{item}</Typography>
                        ))}
                    </Stack>
                </Box>
            </Stack>
            <Box className={classes.headingContainer}>
                <Typography variant='h1' className={classes.heading}>Immersive <br/> experiences <br/> that deliver</Typography>
            </Box>
        </Container>
    </div>
  )
}

export default Header