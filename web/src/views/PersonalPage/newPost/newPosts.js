import { Stack } from '@mui/material';
import React from 'react';
import NewPostItem from './newPostItem/newPostItem';

const NewPost = props => {
  const { posts, ...other } = props;
  return (
    <Stack {...other}>
      {posts.map(item => {
        var newObj = { ...item };
        const date = new Date();
        newObj.time = date.toLocaleDateString();
        newObj.timeSpend = Math.floor(Math.random() * 5 + 5);
        if (!item.href) newObj.href = '/@john/1';
        return <NewPostItem key={item.id} post={newObj} />;
      })}
    </Stack>
  );
};

export default NewPost;
