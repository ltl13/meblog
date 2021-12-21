import { CssBaseline, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import TopicItem from 'views/userHomePage/Topic/Topic';

function InitTopics() {
  const categories = [
    { name: 'Tình cảm', link: '#' },
    { name: 'Tiền ảo', link: '#' },
    { name: 'Âm nhạc', link: '#' },
    { name: 'Gia đình', link: '#' },
    { name: 'Khoa học', link: '#' },
    { name: 'Giáo dục', link: '#' },
    { name: 'Covid-19', link: '#' },
  ];
  return categories;
}

const Topics = props => {
  const topics = InitTopics();
  return (
    <Fragment>
      <CssBaseline />
      <Stack
        direction="row"
        alignItems="center"
        paddingTop={1}
        sx={{
          maxWidth: '100%',
          '&::-webkit-scrollbar': {
            height: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            height: '7px',
            background: '#757575',
            borderRadius: '10px',
          },
        }}
        props
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 16,
            fontWeight: 600,
            minWidth: '110px',
            paddingBottom: '18px',
            color: '#000000',
            whiteSpace: 'nowrap',
          }}
        >
          Chủ đề của bạn
        </Typography>
        <Stack
          marginLeft="10px"
          direction="row"
          alignItems="center"
          sx={{
            padding: '0.5rem 0',
            overflow: 'auto',
            maxWidth: '100%',
            '&::-webkit-scrollbar': {
              height: '7px',
            },
            '&::-webkit-scrollbar-thumb': {
              height: '7px',
              background: '#757575',
              borderRadius: '10px',
            },
          }}
        >
          {topics.map(item => {
            return (
              <TopicItem
                name={item.name}
                href={item.href}
                sx={{ margin: '0 0.5rem' }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Topics;
