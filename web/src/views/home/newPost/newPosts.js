import { Stack } from '@mui/material';
import React from 'react';
import NewPostItem from './newPostItem/newPostItem';

function post() {
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push({
      href: '#',
      author: {
        name: 'Luân Lê',
        cover: 'https://miro.medium.com/fit/c/200/134/0*DTiOkmELkfMaaes9',
      },
      title: 'Cách tôi vượt qua trầm cảm trong cuộc sống',
      subtitle:
        'Bộ não của bạn là trung tâm điều khiển mọi hoạt động trong cơ thể. Nó điều chỉnh nhịp thở, nhịp tim và nhiều hoạt động quan trọng khác của bạn.',
      time: '3 tháng 11',
      timeSpend: '8 phút đọc',
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
