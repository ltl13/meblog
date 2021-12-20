import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CustomizeButton from 'components/CustomizeButton';
import Dante from 'Dante2';
import logo from 'image/logo.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PageNotFound from 'views/PageNotFound';
import { styled } from '@mui/system';

function PersonalPage(props) {
  const [following, setFollowing] = useState(false);

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
            <IconButton
              disableRipple
              onClick={e => {
                // setAnchorEl(e.currentTarget);
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <Avatar
              src="https://i.pinimg.com/736x/69/5f/eb/695febfc4d7bf517892f37076bbaf48b.jpg"
              onClick={e => {
                // setAnchorEl(e.currentTarget);
              }}
              sx={{
                height: '35px',
                width: '35px',
                cursor: 'pointer',
              }}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default PersonalPage;
