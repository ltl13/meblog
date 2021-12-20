import {
  Checkbox,
  ClickAwayListener,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Stack,
} from '@mui/material';
import React from 'react';

const lists = [
  {
    name: 'list 1',
    book: [],
  },
  {
    name: 'list 2',
    book: [],
  },
  {
    name: 'list 3',
    book: [],
  },
];

const BookMarkDialog = props => {
  const { user, onClose, changeBookMark, onAdded, ...other } = props;
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
            right: '20px',
            bottom: '-15px',
            transform: 'translate(50%, 100%)',
            width: '250px',
            padding: '1rem 2rem',
            backgroundColor: '#ffffff',
            '&::after': {
              content: '""',
              display: 'block',
              width: '15px',
              height: '15px',
              position: 'absolute',
              right: '50%',
              top: '0px',
              transform: 'translate(50%, -50%) rotate(45deg)',
              borderLeft: '1px solid #757575',
              borderTop: '1px solid #757575',
              backgroundColor: '#ffffff',
              zIndex: '10',
            },
          }}
          {...other}
        >
          <FormGroup>
            {lists.map((list, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      value={list.name}
                      color="success"
                      defaultChecked={index === 0}
                      onChange={onAdded}
                    />
                  }
                  label={list.name}
                />
              );
            })}
          </FormGroup>
        </Stack>
      </ClickAwayListener>
    </React.Fragment>
  );
};

export default BookMarkDialog;
