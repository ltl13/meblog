import { Avatar, CssBaseline, Link, Stack, Typography } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Box } from '@mui/system';
import React from 'react';
import useStyles from './newPostItemStyle';
const NewPostItem = props => {
  const { post } = props;
  const classes = useStyles();
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
        <Box
          className={classes.card_text_content}
          sx={{ marginRight: '1.25rem' }}
        >
          <div className={classes.author_info}>
            <Avatar
              sx={{ width: '1.5rem', height: '1.5rem' }}
              className={classes.author_image}
              alt=""
              src={post.author.cover}
            />
            <Link
              href={post.href}
              underline="none"
              className={classes.author_name}
            >
              <Typography variant="h4">
                <Box
                  sx={{
                    color: '#000000',
                    fontWeight: '500',
                    fontSize: '1rem',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                  }}
                >
                  {post.author.name}
                </Box>
              </Typography>
            </Link>
          </div>
          <Link underline="none" href={post.href}>
            <Typography variant="h2" component="div" className={classes.title}>
              <Box
                mt={1}
                sx={{
                  color: '#000000',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                }}
              >
                {post.title}{' '}
              </Box>
            </Typography>
          </Link>
          <Typography variant="h3" component="div" className={classes.subtitle}>
            <Box
              mt={1}
              sx={{
                color: '#757575',
                fontWeight: '400',
                fontSize: '1.125rem',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
              }}
            >
              {post.subtitle}
            </Box>
          </Typography>
          <Stack
            direction="row"
            mt={1}
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h4" component="div">
                <Box
                  sx={{
                    color: '#757575',
                    fontWeight: '400',
                    fontSize: '0.75rem',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                  }}
                >{`${post.time} - ${post.timeSpend}`}</Box>
              </Typography>
              <Link underline="none" href={post.category.href}>
                <Typography
                  variant="h2"
                  component="div"
                  className={classes.title}
                >
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
            <BookmarkAddOutlinedIcon></BookmarkAddOutlinedIcon>
          </Stack>
        </Box>
        <Link
          className={classes.card_image_content}
          sx={{ maxHeight: '100%', padding: '0' }}
        >
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
