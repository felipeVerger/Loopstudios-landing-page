import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        backgroundColor: 'black',
    },
    footerBox: {
        padding: '2rem',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            
        }
    },
    inHover: {
        cursor: 'pointer',
        '&:hover': {
            borderBottom: '1px solid white',
        }
    }
}));