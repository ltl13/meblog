import { Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function Colection(props) {
  const { colection, ...other } = props;
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        backgroundColor: '#fafafa',
        border: '1px solid #d1d1d1',
        borderRadius: '5px',
        overflow: 'hidden',
        width: '100%',
        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
      }}
      {...other}
    >
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ padding: '1.5rem' }}
      >
        <Typography variant="h5" component="div" fontWeight={600}>
          {colection.name}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Link
            underline="none"
            sx={{
              padding: '0.25rem 1rem',
              borderRadius: '20px',
              border: '1px solid #000000',
              color: '#000000',
            }}
            href={colection.href}
          >
            Chi tiết
          </Link>
          <Typography variant="subtitle1">
            {colection.count} bài viết
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          padding: { xs: ' 0 1.5rem 1.5rem 1.5rem', sm: '0' },
          justifyContent: { xs: 'flex-start', sm: 'flex-end' },
        }}
      >
        <Box
          component="img"
          src={
            colection.stories[0].cover
              ? colection.stories[0].cover
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCr1HXUxFrqfiljR6HgDWSjlw_LkV8LpEoIA&usqp=CAU'
          }
          sx={{
            height: '10rem',
            width: { xs: '33%', sm: '10rem' },
            zIndex: 3,
            borderRight: '5px solid  #fafafa',
          }}
        ></Box>
        <Box
          component="img"
          src={
            colection.stories[1].cover
              ? colection.stories[1].cover
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCr1HXUxFrqfiljR6HgDWSjlw_LkV8LpEoIA&usqp=CAU'
          }
          sx={{
            height: '10rem',
            width: { xs: '33%', sm: '10rem' },
            marginLeft: { xs: '0', sm: '-80px' },
            zIndex: 2,
            borderRight: '2px solid  #fafafa',
          }}
        ></Box>
        <Box
          component="img"
          src={
            colection.stories[2].cover
              ? colection.stories[2].cover
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCr1HXUxFrqfiljR6HgDWSjlw_LkV8LpEoIA&usqp=CAU'
          }
          sx={{
            height: '10rem',
            width: { xs: '33%', sm: '10rem' },
            marginLeft: { xs: '0', sm: '-130px' },
            zIndex: 1,
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
