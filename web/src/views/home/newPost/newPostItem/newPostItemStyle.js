import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  author_info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    // marginBottom: "0.5rem"
  },
  author_image: {
    marginRight: '5px',
  },
  title: {
    fontWeight: 500,
  },
}));

export default useStyles;
