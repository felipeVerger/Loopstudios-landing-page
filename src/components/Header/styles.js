import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    headingContainer: {
        marginTop: '5rem',
        width: 'max-content',
        border: '1px solid white',
        padding: '1rem 2rem 1rem 1rem',
        [theme.breakpoints.down('sm')]: {
            margin: '4rem auto',
            textAlign: 'center',
            padding: '2rem',
            width: '100%',
        }
    },
    heading: {
        fontFamily: theme.typography.heading,
        textTransform: 'uppercase',
        fontSize: '4em',
        color: 'white',
        fontWeight: '100',
    },
    itemsContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    navItems: {
        cursor: 'pointer',
        '&:hover': {
            borderBottom: '1px solid white',
        }
    }
}));

