import {
  Avatar,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BookMarkDialog from '../BookMarkDialog/BookMarkDialog';
const NewPostItem = props => {
  const { post } = props;
  const [bookmarkAdded, setBookmarkAdded] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const openBookmarkDialog = () => {
    setBookmarkAdded(!bookmarkAdded);
    setOpenDialog(true);
  };

  const closeBookMarkDialog = () => {
    setOpenDialog(false);
  };

  const addBookMark = event => {
    if (event.target.checked) setBookmarkAdded(bookmarkAdded + 1);
    else setBookmarkAdded(bookmarkAdded - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginBottom: '3rem',
        }}
      >
        <Box sx={{ marginRight: '1.25rem' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{ width: '1.5rem', height: '1.5rem' }}
              alt=""
              src={post.author.cover}
            />
            <Link href={post.href} underline="none">
              <Typography
                variant="subtitle"
                sx={{
                  color: '#000000',
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                }}
              >
                {post.author.name}
              </Typography>
            </Link>
          </Stack>
          <Link underline="none" href={post.href}>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: '#000000',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
              }}
            >
              {post.title}
            </Typography>
          </Link>
          <Typography
            variant="h7"
            component="h7"
            sx={{
              color: '#757575',
              fontWeight: '400',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
          >
            {post.subtitle}
          </Typography>
          <Stack
            direction="row"
            mt={0.5}
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  color: '#757575',
                  fontWeight: '400',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                }}
              >
                {`${post.time} - ${post.timeSpend}`} phút để đọc
              </Typography>
              <Link underline="none" href={post.category.href}>
                <Typography variant="h2" component="div">
                  <Box
                    sx={{
                      color: '#757575',
                      fontWeight: '400',
                      fontSize: '0.75rem',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      backgroundColor: '#F0F0F0',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '10px',
                    }}
                  >
                    {post.category.className}
                  </Box>
                </Typography>
              </Link>
            </Stack>
            <Box sx={{ position: 'relative' }}>
              <IconButton
                onClick={() => {
                  openBookmarkDialog();
                }}
              >
                {bookmarkAdded ? (
                  <BookmarkAddedIcon sx={{ color: '#000000' }} />
                ) : (
                  <BookmarkAddOutlinedIcon />
                )}
              </IconButton>
              {openDialog && (
                <BookMarkDialog
                  onClose={closeBookMarkDialog}
                  onAdded={addBookMark}
                />
              )}
            </Box>
          </Stack>
        </Box>
        <Link sx={{ maxHeight: '100%', padding: '0' }}>
          <img
            src={'https://miro.medium.com/fit/c/200/134/0*DTiOkmELkfMaaes9'}
            srcSet={''}
            alt={''}
          />
        </Link>
        {/* </Box> */}
      </Box>
    </React.Fragment>
  );
};

export default NewPostItem;
