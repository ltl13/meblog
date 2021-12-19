import { Stack } from '@mui/material';
import React from 'react';
import Topics from './Topics/Topics';
import Writers from './writers/writers';

const Header = props => {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      sx={{
        paddingRight: { md: '2rem' },
        paddingBottom: '1rem',
      }}
      props
    >
      <Topics />
      <Writers />
    </Stack>
  );
};

export default Header;
