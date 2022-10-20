import React from 'react'
import { Container, Box, Stack, Typography } from '@mui/material'
import Logo from '../../assets/images/logo.svg'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

import {useStyles} from './styles.js'

const data = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Container maxWidth='lg'>
            <Stack direction={{ md: 'row', sm: 'column' }} justifyContent='space-between' gap='2rem' className={classes.footerBox}>
                <Stack gap='2rem' alignItems={{md: 'flex-start', sm: 'center'}}>
                    <img src={Logo} alt='logo'/>
                    <Stack direction='row' gap='1rem'>
                        {data.map((item, index) => (
                            <Typography key={index} variant='h6' fontSize='18px' color='white' className={classes.inHover}>{item}</Typography>
                        ))}
                    </Stack>
                </Stack>
                <Stack gap='2rem' alignItems={{md: 'flex-end', sm: 'center'}}>
                    <Stack direction='row' gap='1rem'>
                        <AiFillFacebook color='white' fontSize='2em' className={classes.inHover}/>
                        <AiFillTwitterCircle color='white' fontSize='2em' className={classes.inHover}/>
                        <BsPinterest color='white' fontSize='2em' className={classes.inHover}/>
                        <AiFillInstagram color='white' fontSize='2em' className={classes.inHover}/>
                    </Stack>
                    <Typography variant='body1' color='whitesmoke'>2021 Loopstudios. All rigths reserved.</Typography>
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}

export default Footer