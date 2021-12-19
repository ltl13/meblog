import { CssBaseline, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import TopicItem from 'views/userHomePage/Topic/Topic';

function InitTopics() {
  const categories = [];
  for (let i = 0; i < 10; i++) {
    const name = 'programing learning listening'.slice(
      Math.ceil(Math.random() * 10),
      Math.ceil(Math.random() * 20 + 4),
    );
    categories.push({ name: name, href: '#' });
  }
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
          variant="h7"
          sx={{
            fontWeight: 600,
            minWidth: '90px',
            paddingBottom: '10px',
            color: '#757575',
          }}
        >
          Your topics
        </Typography>
        <Stack
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
