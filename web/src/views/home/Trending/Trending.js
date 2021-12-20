import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, ThemeProvider, Link } from '@mui/material';
import theme from '../theme';
import { posts } from '../../../data/posts';
export default function Trending(props) {
  const items = posts.map(item => {
    var newObj = { ...item };
    const date = new Date();
    newObj.time = date.toLocaleDateString();
    newObj.timeSpend = Math.floor(Math.random() * 5 + 5);
    if (!item.href) newObj.href = '/@john/1';
    return newObj;
  });
  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          bottom: '0',
          left: '0',
          zIndex: '10',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const { item, ...other } = props;
  return (
    <ThemeProvider theme={theme}>
      <Link underline="none" href={item.href} {...other}>
        <Box
          sx={{
            '&::after': {
              content: '""',
              display: 'block',
              paddingTop: '35%',
              width: '100%',
              backgroundImage: `url('${item.img}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundOrigin: 'center',
              backgroundSize: 'cover',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            top: '0',
            right: '0',
            left: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '0rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.secondaryText',
              fontWeight: '500',
              fontFamily: 'Roboto',
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'secondary.secondaryText',
              fontWeight: '500',
              fontFamily: 'Roboto',
            }}
          >
            {item.subTitle}
          </Typography>
        </Box>
      </Link>
    </ThemeProvider>
  );
}
