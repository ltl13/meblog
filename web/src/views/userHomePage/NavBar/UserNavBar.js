import {
  Avatar,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import logo from '../../../image/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Setting from './Setting/Setting';
import Notification from './notification/notification';
const UserNavBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          borderBottom: '1px solid #000000',
          padding: { xs: '0.25rem 0', md: '0.25rem 2rem' },
          backgroundColor: '#f8eee7',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          transition: '350ms ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/">
              <Box component="img" src={logo} sx={{ height: 50 }}></Box>
            </Link>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box>
                <IconButton
                  sx={{ color: '#000000' }}
                  onClick={() => {
                    setOpenSearch(!openSearch);
                  }}
                >
                  <SearchIcon />
                </IconButton>
                {openSearch && (
                  <TextField
                    size="small"
                    type="search"
                    variant="standard"
                    inputProps={{
                      style: {
                        textAlign: 'left',
                        padding: '0.35rem',
                        border: '0px',
                        outline: '0px',
                      },
                    }}
                    placeholder="Search"
                  >
                    {' '}
                  </TextField>
                )}
              </Box>
              <Box>
                <IconButton sx={{ color: '#000000' }}>
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>
              <Box sx={{ position: 'relative' }}>
                {' '}
                <IconButton
                  sx={{ color: '#000000' }}
                  onClick={() => {
                    setOpenNotification(!openNotification);
                  }}
                >
                  <NotificationsNoneIcon />
                </IconButton>
                {openNotification && (
                  <Notification
                    onClose={() => {
                      setOpenNotification(false);
                    }}
                  />
                )}
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/736x/69/5f/eb/695febfc4d7bf517892f37076bbaf48b.jpg"
                  onClick={() => {
                    setOpenSetting(!openSetting);
                  }}
                  sx={{ cursor: 'pointer' }}
                />
                {openSetting && (
                  <Setting
                    user={{
                      name: 'Võ Quốc Minh',
                      id: '@voquocminh',
                      avatar:
                        'https://image.thanhnien.vn/w660/Uploaded/2021/ygtmjz/2021_05_15/loki_vrkk.jpg',
                    }}
                    onClose={() => {
                      setOpenSetting(false);
                    }}
                  />
                )}
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default UserNavBar;
