import {
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
const NewPostItem = props => {
  const { post } = props;
  const [bookmarkAdded, setBookmarkAdded] = useState(true);
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
            {post.subtitle}
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
                {`${post.time} - ${post.timeSpend}`}
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
            <IconButton
              onClick={() => {
                setBookmarkAdded(!bookmarkAdded);
              }}
            >
              {bookmarkAdded ? (
                <BookmarkAddedIcon sx={{ color: '#000000' }} />
              ) : (
                <BookmarkAddOutlinedIcon />
              )}
            </IconButton>
          </Stack>
        </Box>
        <Link sx={{ maxHeight: '100%', padding: '0' }}>
          <Box
            component="img"
            src={'https://miro.medium.com/fit/c/200/134/0*DTiOkmELkfMaaes9'}
            srcSet={''}
            alt={''}
            sx={{
              width: '80xpx',
              height: '80px',
            }}
          />
        </Link>
        {/* </Box> */}
      </Box>
    </React.Fragment>
  );
};

export default NewPostItem;
