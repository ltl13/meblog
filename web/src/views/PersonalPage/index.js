import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import CustomizeButton from 'components/CustomizeButton';
import logo from 'image/logo.svg';
import React, { useState } from 'react';
import { posts } from 'data/posts';
import NewPost from './newPost/newPosts';
import Sidebar from 'views/userHomePage/sidebar/sidebar';
import Notification from 'views/userHomePage/NavBar/notification/notification';
import Setting from 'views/userHomePage/NavBar/Setting/Setting';

function PersonalPage(props) {
  const [following, setFollowing] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const postOf = posts.filter(post => post.author.id == '1');
  // console.log(postOf);
  const writer = 'JOHN';
  return (
    <>
      <Box
        sx={{
          height: '65px',
          width: '100%',
          position: 'fixed',
          top: '0',
          right: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: '#f8eee7',
        }}
      >
        <Box
          sx={{
            maxWidth: '1032px',
            height: '65px',
            p: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            m: '0 auto',
          }}
        >
          <Stack direction="row" spacing="20px" sx={{ alignItems: 'center' }}>
            <Link href="/">
              <img src={logo} alt="logo" style={{ height: '50px' }} />
            </Link>
            <Link href="/@john" sx={{ color: 'black', textDecoration: 'none' }}>
              <Typography variant="h5">John</Typography>
            </Link>

            <CustomizeButton
              height="30px"
              backgroundColor="#ab92bf"
              color="#fff"
              fontSize="15px"
              variant="filled"
              onClick={() => {
                setFollowing(prev => !prev);
              }}
            >
              {following ? 'Đã theo dõi' : 'Theo dõi'}
            </CustomizeButton>
          </Stack>

          <Stack direction="row" spacing="10px" sx={{ alignItems: 'center' }}>
            <Box sx={{ position: 'relative' }}>
              {' '}
              <IconButton
                disableRipple
                onClick={() => {
                  setOpenNotification(!openNotification);
                }}
              >
                <NotificationsNoneOutlinedIcon />
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
              {' '}
              <Avatar
                src="https://i.pinimg.com/736x/69/5f/eb/695febfc4d7bf517892f37076bbaf48b.jpg"
                onClick={() => {
                  setOpenSetting(!openSetting);
                }}
                sx={{
                  height: '35px',
                  width: '35px',
                  cursor: 'pointer',
                }}
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
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: '6rem' }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ paddingTop: '0rem' }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            sx={{
              borderRight: { md: '1px solid #c0c0c0' },
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              {writer}
            </Typography>
            <Box
              mb={2}
              paddingTop={4}
              sx={{
                paddingRight: { md: '2rem' },
              }}
            >
              <NewPost posts={postOf} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{ paddingLeft: { md: '2rem' } }}
          >
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PersonalPage;
