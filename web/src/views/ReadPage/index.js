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

const TextFieldCustom = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

function ReadPage(props) {
  const { user, post } = useParams();
  const users = useSelector(state => state.users.current);
  const posts = useSelector(state => state.posts.current);
  const [showPost, setShowPost] = useState(true);
  const [following, setFollowing] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const navigate = useNavigate();

  const postInfo = posts.find(item => item.id === post);
  const userInfo = users.find(
    item => item.name.toLowerCase() === user.slice(1),
  );

  if (user[0] === '@') {
    if (!userInfo && showPost === true) {
      setShowPost(false);
    }
    if (post === undefined || userInfo.posts.indexOf(post) === -1) {
      setShowPost(false);
    }
  }

  return showPost ? (
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
      <Box
        sx={{
          maxWidth: '740px',
          m: '10px auto',
          pt: '68px',
          maxHeight: '400px',
        }}
      >
        <Stack spacing="5px">
          <Dante read_only={true} content={postInfo.content} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack direction="row" alignItems="center">
              <LikeButton />
              <Typography variant="body1">3.0k</Typography>

              <IconButton
                disableRipple
                onClick={() => {
                  setOpenComment(true);
                }}
              >
                <ModeCommentOutlinedIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            height: '75px',
            width: '100%',
            bottom: '0',
            right: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: '#f8eee7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: '50px',
          }}
        >
          <Link href="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: '50px', marginLeft: '20px' }}
            />
          </Link>
          <Stack
            direction="row"
            spacing="10px"
            sx={{ alignItems: 'center', mr: '20px' }}
          >
            <Link href="/@john" sx={{ color: 'black', textDecoration: 'none' }}>
              <Typography variant="h5">About</Typography>
            </Link>
            <Link href="/@john" sx={{ color: 'black', textDecoration: 'none' }}>
              <Typography variant="h5">Write</Typography>
            </Link>
          </Stack>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={openComment}
        onClose={() => {
          setOpenComment(false);
        }}
      >
        <Box sx={{ minWidth: '500px', m: '30px' }}>
          <Stack spacing="30px">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Bình luận (1)</Typography>
              <IconButton
                disableRipple
                onClick={() => {
                  setOpenComment(false);
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>
            <TextFieldCustom
              multiline
              variant="standard"
              focused
              placeholder="Bình luận"
            />
            <CustomizeButton
              height="46px"
              width="100px"
              backgroundColor="#ab92bf"
              color="#fff"
              fontSize="15px"
              variant="filled"
              onClick={() => {}}
            >
              Bình luận
            </CustomizeButton>
            <Divider />
            <Comment />
          </Stack>
        </Box>
      </Drawer>
    </>
  ) : (
    <PageNotFound />
  );
}

const LikeButton = () => {
  const [value, setValue] = React.useState(true);
  return (
    <IconButton
      disableRipple
      onClick={() => {
        setValue(prev => !prev);
      }}
    >
      {value ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
    </IconButton>
  );
};
export default ReadPage;

const Comment = () => {
  return (
    <Stack spacing="10px">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: '50px', height: '50px', mr: '20px' }} />
        <Stack spacing="2px">
          <Typography variant="body1">Chúa tể</Typography>
          <Typography variant="subTitle1">2 ngày trước</Typography>
        </Stack>
      </Box>
      <Typography variant="body1">
        Bài hay quá bạn ơi. Thật là đẳng cấp
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <LikeButton />
        <CustomizeButton
          height="46px"
          width="100px"
          backgroundColor="white"
          color="#000"
          fontSize="15px"
          variant="filled"
          onClick={() => {}}
        >
          Trả lời
        </CustomizeButton>
      </Box>
    </Stack>
  );
};
