import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    textBox: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        backgroundColor: 'white',
        height: '300px',
        padding: '4rem 4rem 0 4rem',
        // in small devices we take out the position absolute and we center de elements
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            left: '0',
            bottom: '0',
            height: 'auto',
            padding: '2rem',
            textAlign: 'center',
        }
    },
    heading: {
        fontFamily: theme.typography.heading,
        fontSize: '2em',
        fontWeight: '100',
        lineHeight: '50px',
        textTransform: 'uppercase',
    },
    text: {
        fontFamily: theme.typography.alata,
        fontSize: '1.2em',
        marginTop: '4rem',
    },
    creationsContainer: {
        marginTop: '8rem',
        width: '100%',
    },
    cardContainer: {
        marginTop: '2rem',
        width: '100%',
        height: '100%',
    },
    card: {
        position: 'relative',
        height: '100%',
    },
    media: {
        height: '100%',
        width: '100%',
    },
    title: {
        position: 'absolute',
        bottom: '20px',
        left: '25px',
        textAlign: 'left',
        fontFamily: theme.typography.alata,
        fontSize: '2em',
        fontWeight: '100',
        color: 'whitesmoke'
    },
    button: {
        // hover
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        }
    }
}));
