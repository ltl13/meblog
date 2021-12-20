import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Button,
  Box,
  Typography,
  ThemeProvider,
  Link,
} from '@mui/material';
import theme from '../theme';
export default function Trending(props) {
  var items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      title: 'Cách tôi vượt qua trầm cảm trong cuộc sống',
      image:
        'https://images.unsplash.com/photo-1639815189096-f75717eaecfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      subtitle:
        'Bộ não của bạn là trung tâm điều khiển mọi hoạt động trong cơ thể. Nó điều chỉnh nhịp thở, nhịp tim và nhiều hoạt động quan trọng khác của bạn.',
      author: 'Luân Lê',
      href: '#',
      authorImage: '',
      time: '9 tháng 12',
      timeSpend: '6',
    });
  }

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
              backgroundImage: `url('${item.image}')`,
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
            {item.subtitle}
          </Typography>
        </Box>
      </Link>
    </ThemeProvider>
  );
}
