import {
  Avatar,
  ClickAwayListener,
  CssBaseline,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const Setting = props => {
  const { user, onClose, ...other } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <ClickAwayListener onClickAway={onClose}>
        <Stack
          direction="column"
          alignItems="stretch"
          sx={{
            border: '1px solid #757575',
            borderRadius: '10px',
            position: 'absolute',
            right: '0',
            bottom: '-15px',
            transform: 'translate(0, 100%)',
            width: '250px',
            backgroundColor: '#ffffff',
            '&::after': {
              content: '""',
              display: 'block',
              width: '15px',
              height: '15px',
              position: 'absolute',
              right: '10px',
              top: '0px',

              transform: 'translate(0, -50%) rotate(45deg)',
              borderLeft: '1px solid #757575',
              borderTop: '1px solid #757575',
              backgroundColor: '#ffffff',
              zIndex: '10',
            },
          }}
          {...other}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              padding: '0.5rem 1rem 1rem 1rem',
              borderBottom: '1px solid #757575',
            }}
          >
            <Avatar src={user.avatar} sx={{ height: '3rem', width: '3rem' }} />
            <Stack direction="column">
              <Typography
                variant="subtitle2"
                fontWeight={500}
                sx={{ fontWeight: '500', color: '#000000' }}
              >
                {user.name}
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight={500}
                sx={{ color: '#000000' }}
              >
                {user.id}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            alignItems="stretch"
            sx={{ padding: '0.75rem 1rem', borderBottom: '1px solid #757575' }}
          >
            <Link
              href="/write"
              underline="none"
              marginBottom={1.25}
              color="#000000"
            >
              <Typography variant="subtitle2" fontWeight={500}>
                Vi???t b??i
              </Typography>
            </Link>
            <Link href="/settings" underline="none" color="#000000">
              <Typography variant="subtitle2" fontWeight={500}>
                C??i ?????t
              </Typography>
            </Link>
          </Stack>
          <Stack
            direction="column"
            alignItems="stretch"
            sx={{ padding: '0.75rem 1rem', borderBottom: '1px solid #757575' }}
          >
            <Link
              href="/me"
              underline="none"
              marginBottom={1.25}
              color="#000000"
            >
              <Typography variant="subtitle2" fontWeight={500}>
                L??u tr???
              </Typography>
            </Link>
            <Link href="/user/yourStories" underline="none" color="#000000">
              <Typography variant="subtitle2" fontWeight={500}>
                ???n ph???m
              </Typography>
            </Link>
          </Stack>
          <Stack
            direction="column"
            alignItems="stretch"
            sx={{ padding: '0.75rem 1rem' }}
          >
            <Link href="#" underline="none" marginBottom={1.25} color="#000000">
              <Typography variant="subtitle2" fontWeight={500}>
                Tr??? gi??p
              </Typography>
            </Link>
            <Link href="/" underline="none" color="#000000">
              <Typography variant="subtitle2" fontWeight={500}>
                ????ng xu???t
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </ClickAwayListener>
    </React.Fragment>
  );
};

export default Setting;
