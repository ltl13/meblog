import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Stack,
} from '@mui/material';
import CustomizeButton from 'components/CustomizeButton';
import Dante from 'Dante2';
import logo from 'image/logo.svg';
import React, { useState } from 'react';
import MenuWithArrow from 'components/Menu';

function WritePage(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          opacity: 0.9,
          zIndex: 8,
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
          <img src={logo} alt="logo" style={{ height: '50px' }} />
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomizeButton
              height="30px"
              backgroundColor="#f8eee7"
              fontSize="15px"
            >
              Xuất bản
            </CustomizeButton>
            <Avatar
              onClick={() => {
                console.log('Avatar clicked');
              }}
              sx={{
                height: '32px',
                width: '32px',
                cursor: 'pointer',
                m: '0 5px',
              }}
            ></Avatar>
          </Box> */}
          <Stack direction="row" spacing="10px" sx={{ alignItems: 'center' }}>
            <CustomizeButton
              height="30px"
              backgroundColor="#f8eee7"
              fontSize="15px"
            >
              Xuất bản
            </CustomizeButton>

            <IconButton
              disableRipple
              onClick={e => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <MoreHorizRoundedIcon />
            </IconButton>

            <IconButton
              disableRipple
              onClick={e => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <Avatar
              onClick={e => {
                setAnchorEl(e.currentTarget);
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
      <Box sx={{ maxWidth: '740px', m: '0px auto', pt: '68px' }}>
        <Dante />
      </Box>
      <MenuWithArrow anchorEl={anchorEl} handleClose={handleClose}>
        <Stack sx={{ alignItems: 'center', m: '10px 0 ' }}>
          <Avatar
            sx={{
              height: '50px',
              width: '50px',
            }}
          />
        </Stack>
        <Divider />
        <MenuItem disableRipple>Viết bài</MenuItem>
      </MenuWithArrow>
    </>
  );
}

export default WritePage;
