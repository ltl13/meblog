import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Colection from './Colection/Colection';

export default function SavedList(props) {
  const { value, index, list, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`your-tab-${index}`}
      aria-labelledby={`your-tab-${index}`}
      {...other}
    >
      <Stack
        direction="column"
        alignItems="stretch"
        {...other}
        spacing={2}
        paddingTop={3}
      >
        {list.map(item => {
          return <Colection colection={item} />;
        })}
      </Stack>
    </Box>
  );
}
