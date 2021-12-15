import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
    userNavBar_logo: {
        fontSize: "3rem",
        fontWeight: "700 !important",
        fontFamily: "Playfair Display !important"
    },
    userNavBar_links: {
        display: 'inline-flex',
        justifyContent: "space-between",
        listStyleType: "none",

    },
    userNavBar_link_item: {
        padding: "1rem",
        fontSize: "1rem",
        fontWeight: 500,
        whiteSpace: "nowrap"
    },
    getStart_item: {
        marginLeft: "1rem !important",
        fontFamily: 'Roboto',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#000000',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: "400"
    }

}));

export default useStyles;