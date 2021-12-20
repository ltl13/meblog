import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

const WriterItem = props => {
  const { writer, ...other } = props;
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      spacing={1}
      maxWidth="5rem"
      {...other}
    >
      <Avatar src={writer.avatar} sx={{ width: '4rem', height: '4rem' }} />
      <Typography
        variant="subtitle2"
        fontWeight={500}
        color="#757575"
        textAlign="center"
      >
        {writer.name}
      </Typography>
    </Stack>
  );
};

export default WriterItem;
