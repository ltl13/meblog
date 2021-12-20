const { TextField } = require('@mui/material');
const { withStyles } = require('@mui/styles');

const CustomTextField = withStyles({
  root: {
    '& .Mui-disabled': {
      color: '#000000',
      '-webkit-text-fill-color': '#000000',
    },
  },
})(TextField);
export default CustomTextField;
