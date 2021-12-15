import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
    postCardItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        padding: "2rem"
    },
    card_main_content: {
        paddingTop: '0.6rem'
    },
    author_info: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: "center",
        // marginBottom: "0.5rem"
    },
    author_image: {
        marginRight: '5px'
    },
    title: {
        fontWeight: 500,
    }

}));

export default useStyles;