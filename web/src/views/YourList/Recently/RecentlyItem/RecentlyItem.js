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
import BookMarkDialog from '../../../userHomePage/newPost/BookMarkDialog/BookMarkDialog';
import { Box } from '@mui/system';
import React, { useState } from 'react';
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
          alignItems: 'center',
          borderBottom: '1px solid #d1d1d1',
          padding: '1.5rem 0rem',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ marginRight: '1.25rem' }}>
          <Link underline="none" href={post.href}>
            <Typography
              variant="subtitle1"
              component="div"
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
            variant="subtitle2"
            component="div"
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
            {post.subTitle}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: '#757575',
                  fontWeight: '400',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                }}
              >
                {`Tiếp tục - ${post.timeSpend}`} phút để đọc
              </Typography>
              <Link underline="none" href={post.topic[0]}>
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
                    {post.topic[0]}
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
        <Box
          component="img"
          src={`${post.img}`}
          srcSet={`${post.img}`}
          alt={post.title}
          sx={{
            padding: '0',
            minHeight: {
              xs: '80px',
              sm: '100px',
              md: '150px',
            },
            maxHeight: {
              xs: '80px',
              sm: '100px',
              md: '150px',
            },
            maxWidth: {
              xs: '80px',
              sm: '100px',
              md: '150px',
            },
            minWidth: {
              xs: '80px',
              sm: '100px',
              md: '150px',
            },
            overflow: 'hidden',
            objectFit: 'cover',
          }}
        />
        {/* </Box> */}
      </Box>
    </React.Fragment>
  );
};

export default NewPostItem;
