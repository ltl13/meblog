import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Dante from 'Dante2';
import PageNotFound from 'views/PageNotFound';

function ReadPage(props) {
  const { user, post } = useParams();
  const users = useSelector(state => state.users.current);
  const posts = useSelector(state => state.posts.current);
  const [showPost, setShowPost] = useState(true);
  const navigate = useNavigate();

  const postInfo = posts.find(item => item.id === post);
  const userInfo = users.find(
    item => item.name.toLowerCase() === user.slice(1),
  );

  if (user[0] === '@') {
    if (!userInfo && showPost === true) {
      setShowPost(false);
    }
    if (post === undefined || userInfo.posts.indexOf(post) === -1) {
      setShowPost(false);
    }
  }

  return showPost ? (
    <Box
      sx={{ maxWidth: '740px', m: '0px auto', pt: '68px', maxHeight: '400px' }}
    >
      <Dante read_only={true} content={postInfo.content} />
    </Box>
  ) : (
    <PageNotFound />
  );
}

export default ReadPage;
