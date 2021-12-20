import {
  Button,
  CssBaseline,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import CustomTextField from './CustomTextField';

const UsernameSetting = props => {
  const { username, ...other } = props;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(username || '');

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
        <Typography
          variant="h5"
          component="div"
          fontWeight={700}
          borderBottom="1px solid #c0c0c0"
          marginBottom={3}
          paddingBottom={1}
        >
          Username và URL
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" component="div" fontWeight={700}>
            Username
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
        <Table>
          <TableRow>
            <TableCell
              sx={{
                borderBottom: '0',
                width: '20px',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: 0,
              }}
            >
              <Typography variant="subtitle1" component="h6" fontWeight={500}>
                Username
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                borderBottom: '0',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: 0,
              }}
            >
              <CustomTextField
                disabled={!editing}
                focused={editing}
                variant="standard"
                fullWidth
                placeholder="Nhập username"
                value={value}
                onChange={changeValue}
              />
            </TableCell>
          </TableRow>
          <TableRow sx={{ borderBottom: '0', width: '200px' }} border="none">
            <TableCell
              sx={{
                borderBottom: '0',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: 0,
              }}
              className="disabledInput"
            >
              <Typography variant="subtitle1" component="h6" fontWeight={500}>
                URL
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                borderBottom: '0',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: 0,
              }}
            >
              <Typography variant="subtitle1" component="h6" fontWeight={500}>
                {`https://meblog.com/@${value}`}
              </Typography>
            </TableCell>
          </TableRow>
        </Table>
        <Stack direction="row" alignItem="center"></Stack>

        <Stack direction="row" alignItem="center"></Stack>
      </Stack>
    </Fragment>
  );
};

export default UsernameSetting;
