import { Avatar, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Writer = props => {
  const { writer, ...other } = props;
  const [following, setFollowing] = useState(false);
  return (
    <Stack direction="row" alignItems="flex-start" {...other}>
      <Avatar src={writer.avatar} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          sx={{ padding: '0 1rem' }}
        >
          <Typography variant="h7" sx={{ fontWeight: 500 }}>
            {writer.name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 400,
              maxHeight: '44px',
              maxLines: 2,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              wordWrap: 'break-word',
              color: '#757575',
            }}
          >
            {writer.description}
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: following ? '#000000' : '#ffffff',
            borderRadius: '20px',
            border: '1px solid #757575',
            color: following ? '#ffffff' : '#757575',
            textTransform: 'none',
            padding: '0.25rem 1.5rem',
            fontWeight: following ? 400 : 500,
            '&:hover': {
              backgroundColor: following ? '#000000' : '#ffffff',
              color: following ? '#ffffff' : '#757575',
            },
          }}
          onClick={() => {
            setFollowing(!following);
          }}
        >
          {following ? 'Following' : 'Follow'}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Writer;
