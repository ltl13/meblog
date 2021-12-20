import { Box, Stack } from '@mui/material';
import React from 'react';
import RecentlyItem from './RecentlyItem/RecentlyItem';

const Recently = props => {
  const { value, index, posts, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`your-tab-${index}`}
      aria-labelledby={`your-tab-${index}`}
      {...other}
    >
      <Stack paddingTop={2}>
        {posts.map(item => {
          return <RecentlyItem post={item} />;
        })}
      </Stack>
    </Box>
  );
};

export default Recently;
