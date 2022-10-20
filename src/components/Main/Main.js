import React from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'
import { Button, Grid, Card } from '@material-ui/core';

import VrImage from '../../assets/images/desktop/image-interactive.jpg';
import { images } from '../../constants/images';

import { useStyles } from './styles'

const data = [
    {
        title: 'Deep earth',
        image: images.deepEarth,
    },
    {
        title: 'Night arcade',
        image: images.nightArcade,
    },
    {
        title: 'Soccer team vr',
        image: images.soccerTeam,
    },
    {
        title: 'The grid',
        image: images.grid,
    },
    {
        title: 'From up above vr',
        image: images.fromAbove,
    },
    {
        title: 'Pocket borealis',
        image: images.pocketBorealis,
    },
    {
        title: 'The curiosity',
        image: images.curiosity,
    },
    {
        title: 'Make it fisheye',
        image: images.fishEye,
    }
]

const Main = () => {
  const classes = useStyles();

  return (
    <Box mt="6rem" mb="6rem">
      <Stack sx={{
        sm: {direction: 'column', alignItems: 'center'},
        md: {direction: 'row'},
      }} position="relative">
        <img src={VrImage} alt="interactive" />
        <Stack spacing={2} className={classes.textBox}>
          <Typography variant="h3" className={classes.heading}>
            The leader in <br /> interactive vr
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects, for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </Typography>
        </Stack>
      </Stack>
      <Box className={classes.creationsContainer}>
        <Stack direction="row" justifyContent='space-between'>
          <Typography variant="h3" className={classes.heading}>
            Our creations
          </Typography>
          <Button variant="outlined" className={classes.button}>SEE ALL</Button>
        </Stack>
        <Container maxWidth='lg'>
            <Grid container spacing={2} className={classes.cardContainer}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card className={classes.card}>
                            <img src={item.image} className={classes.media} />
                            <Typography variant="h4" className={classes.title}>{item.title}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Main