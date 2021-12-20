import { Stack } from '@mui/material';
import React from 'react';
import NewPostItem from './newPostItem/newPostItem';
import { posts } from '../../../data/posts';

const NewPost = props => {
  const { list, ...other } = props;
  const postList = posts;
  return (
    <Stack sx={{}}>
      {list.stories.map(item => {
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
