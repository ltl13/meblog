import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import NewPostItem from './newPostItem/newPostItem';

function post() {
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push({
      href: '#',
      author: {
        name: 'Personal Growth',
        cover: 'https://miro.medium.com/fit/c/200/134/0*DTiOkmELkfMaaes9',
      },
      title: 'How Much YouTube Paid Me for a 68,000,000 Viewed Video',
      subtitle:
        'Your brain is the control center for all activities in your body. It regulates your breathing, heartbeat, and many more vital activities.',
      time: 'Nov 3',
      timeSpend: '8 min read',
      category: {
        name: 'Blockchain',
        href: '#',
      },
    });
  }
  return posts;
}

const NewPost = () => {
  const posts = post();
  return (
    <Stack sx={{}}>
      {posts.map(item => {
        return <NewPostItem post={item} />;
      })}
    </Stack>
  );
};

export default NewPost;
