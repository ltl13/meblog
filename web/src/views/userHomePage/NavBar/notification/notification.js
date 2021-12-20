import {
  ClickAwayListener,
  CssBaseline,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const Notification = props => {
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
            padding: '1rem',
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
          <Typography variant="subtitle1" textAlign="center" color="#757575">
            Không có thông báo mới.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{}}
          ></Stack>
        </Stack>
      </ClickAwayListener>
    </React.Fragment>
  );
};

export default Notification;
