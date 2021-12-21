import { Avatar, Button, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Writer = props => {
  const { writer, ...other } = props;
  const [following, setFollowing] = useState(false);
  return (
    <Link href={writer.href} underline="none">
      <Stack direction="row" alignItems="flex-start" {...other}>
        <Avatar src={writer.avatar} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            sx={{ padding: '0 0.75rem' }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, color: '#000000' }}
            >
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
              backgroundColor: following ? '#AB92BF' : '#ffffff',
              borderRadius: '20px',
              border: following ? '1px solid #AB92BF' : '1px solid #757575',
              color: following ? '#000000' : '#757575',
              textTransform: 'none',
              padding: '0.25rem 2rem',
              fontWeight: following ? 400 : 500,
              '&:hover': {
                backgroundColor: following ? '#AB92BF' : '#ffffff',
                color: following ? '#000000' : '#000000',
                borderColor: '#000000',
              },
              whiteSpace: 'nowrap',
            }}
            onClick={event => {
              event.preventDefault();
              setFollowing(!following);
            }}
          >
            {following ? 'Đã theo dõi' : 'Theo dõi'}
          </Button>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Writer;
