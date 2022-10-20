import React, { useState } from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import Logo from '../../assets/images/logo.svg'
import { useStyles } from './styles'
import './header.css'

const data = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                {/* if the screen is small the elements below will be displayed */}
                <BiMenu color='white' fontSize='2em' onClick={() => setIsOpen(true)} className={classes.menuIcon}/>
                {
                    isOpen && (
                        <Box className={classes.mobileMenu}>
                            <Stack p='2rem' gap='12rem'>
                                <Stack direction='row' justifyContent='space-between' >
                                    <img src={Logo} alt='logo' className={classes.mobileLogo}/>
                                    <IoClose color='white' fontSize='2em' onClick={() => setIsOpen(false)}/>
                                </Stack>
                                <Stack gap='2rem' alignItems='flex-start'>
                                {data.map((item, index) => (
                                    <Typography key={index} variant='h6' fontSize='2em' color='white' className={classes.navItemsMobile}>{item}</Typography>
                                ))}
                                </Stack>
                            </Stack>
                        </Box>
                    )
                }
            </Stack>
            <Box className={classes.headingContainer}>
                <Typography variant='h1' className={classes.heading}>Immersive <br/> experiences <br/> that deliver</Typography>
            </Box>
        </Container>
    </div>
  )
}

export default Header