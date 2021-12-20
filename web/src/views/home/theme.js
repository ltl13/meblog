import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#ffffff',
      contrastText: '#ffcc00',
      primaryText: '#000000',
      secondaryText: '#f8f8f8',
      background: '#ffffff',
    },
  },
});

export default theme;
