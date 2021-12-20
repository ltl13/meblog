import { Button, CssBaseline, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import CustomTextField from '../CustomTextField';

const TextSettingItem = props => {
  const { name, defaultValue, placehoder, title, description, link, ...other } =
    props;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(defaultValue || '');

  const changeValue = event => setValue(event.target.value);
  const openEdit = () => setEditing(true);
  const closeEdit = () => setEditing(false);
  const saveSetting = () => {
    setEditing(false);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Stack direction="column" alignItems="stretch" {...other}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={0}
        >
          <Typography variant="h6" component="h6" fontWeight={700}>
            {title}
          </Typography>
          <Box>
            {editing ? (
              <Stack direction="row" spacing={2}>
                <Button
                  sx={{
                    borderRadius: '20px',
                    border: '1px solid #AB92BF',
                    color: '#000000',
                    backgroundColor: '#AB92BF',
                    textTransform: 'none',
                    padding: '0.25rem 1rem',
                    fontWeight: 400,
                    '&:hover': {
                      borderColor: '#AB92BF',
                      backgroundColor: '#AB92BF',
                      color: '#000000',
                    },
                    whiteSpace: 'nowrap',
                  }}
                  onClick={saveSetting}
                >
                  Lưu
                </Button>

                <Button
                  sx={{
                    borderRadius: '20px',
                    border: '1px solid #757575',
                    color: '#757575',
                    textTransform: 'none',
                    padding: '0.25rem 1rem',
                    fontWeight: 400,
                    '&:hover': {
                      color: '#000000',
                      borderColor: '#000000',
                    },
                    whiteSpace: 'nowrap',
                  }}
                  onClick={closeEdit}
                >
                  Huỷ bỏ
                </Button>
              </Stack>
            ) : (
              <Button
                sx={{
                  borderRadius: '20px',
                  border: '1px solid #757575',
                  color: '#757575',
                  textTransform: 'none',
                  padding: '0.25rem 1rem',
                  fontWeight: 400,
                  '&:hover': {
                    color: '#000000',
                    borderColor: '#000000',
                  },
                  whiteSpace: 'nowrap',
                }}
                onClick={openEdit}
              >
                Chỉnh sửa
              </Button>
            )}
          </Box>
        </Stack>
        <CustomTextField
          focused={editing}
          variant="standard"
          disabled={!editing}
          name={name}
          value={value}
          onChange={changeValue}
          placeholder={placehoder}
          fullWidth
        />
        {description && (
          <Typography
            marginTop={3}
            variant="subtitle1"
            fontWeight={400}
            color="#757575"
            component="div"
          >
            {description}
          </Typography>
        )}
      </Stack>
    </Fragment>
  );
};

export default TextSettingItem;
