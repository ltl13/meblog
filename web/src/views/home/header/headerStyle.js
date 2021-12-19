import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '0',
    boder: '0',
    margin: 0,
    boxSizing: 'boder-box',
    display: 'block',
  },
  header: {
    // padding: '.5rem 3rem',
    backgroundColor: '#f8eee7',
    // padding: '0 0 2rem 0'
  },
  header_left_content: {
    // display: "flex",
    // flexDirection: 'column',
  },
  left_content_title: {
    // fontSize: '64px !important'
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: 400,
  },
  left_content_subtitle: {
    fontFamily: 'Roboto !important',
    fontWeight: 500,
    // marginBottom: '2rem !important'
  },
  start_button: {
    backgroundColor: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '25px',
    border: '1px solid #000000',
  },

  header_right_content: {
    display: 'inline-flex',
  },
  Mlogo: {
    whiteSpace: 'pre',
    fontSize: '1rem',
    color: '#FFFFFF',
    transform: 'translate(3.5rem, 0.5rem)',
    zIndex: 1,
  },
  Elogo: {
    whiteSpace: 'pre',
    fontSize: '1rem',
    zIndex: 0,
    textAlign: 'start',
  },
  getStart_item: {
    marginLeft: '1rem',
    fontFamily: 'Roboto',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#000000',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '400',
  },
}));

export default useStyles;
