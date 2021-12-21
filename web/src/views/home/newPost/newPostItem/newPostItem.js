import { Avatar, CssBaseline, Link, Stack, Typography } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Box } from '@mui/system';
import React from 'react';
const NewPostItem = props => {
  const { post } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginBottom: '3rem',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ marginRight: '1.25rem' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{ width: '1.5rem', height: '1.5rem' }}
              alt=""
              src={post.author && post.author.avatar}
            />
            <Link href={post.author && post.author.href} underline="none">
              <Typography
                variant="subtitle"
                sx={{
                  color: '#000000',
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                }}
              >
                {post.author && post.author.name}
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
                maxLines: 2,
              }}
            >
              {post.title}
            </Typography>
          </Link>
          <Typography
            variant="subtitle1"
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
                maxLines: 2,
              },
            }}
          >
            {post.subTitle}
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
              <Link underline="none" href="#">
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
            <Link
              href="#"
              underline="none"
              color="#757575"
              onClick={event => {
                event.preventDefault();
                document.querySelector('.login').classList.add('open');
              }}
            >
              <BookmarkAddOutlinedIcon></BookmarkAddOutlinedIcon>
            </Link>
          </Stack>
        </Box>
        <Box
          component="img"
          src={`${post.img}`}
          srcSet={`${post.img}`}
          alt={post.title}
          sx={{
            padding: '0',
            maxHeight: {
              xs: '100px',
              sm: '100px',
              md: '200px',
            },
            maxWidth: {
              xs: '100px',
              sm: '150px',
              md: '200px',
            },
            minWidth: {
              xs: '100px',
              sm: '150px',
              md: '200px',
            },
            overflow: 'hidden',
            objectFit: 'cover',
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default NewPostItem;
