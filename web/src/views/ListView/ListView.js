import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import UserNavBar from '../userHomePage/NavBar/UserNavBar';
import NewPost from './newPost/newPosts';
import Sidebar from '../userHomePage/sidebar/sidebar';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import lists from 'data/bookMark';
import { Navigate } from 'react-router-dom';

const ListView = props => {
  const params = useParams();
  const bookmarkList = lists.find(item => {
    return item.id == params.id;
  });
  if (!bookmarkList) return <Navigate to="/404" />;
  const list = { name: 'Reading 1' };
  const { ...other } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Box {...other}>
        <UserNavBar />
        <Box>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ paddingTop: '0rem' }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                sx={{
                  borderRight: { md: '1px solid #c0c0c0' },
                  paddingTop: '1rem',
                }}
              >
                <Typography variant="h4" fontWeight={600}>
                  {bookmarkList.name}
                </Typography>
                <Box
                  mb={2}
                  paddingTop={4}
                  sx={{
                    paddingRight: { md: '2rem' },
                  }}
                >
                  <NewPost list={bookmarkList} />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ paddingLeft: { md: '2rem' }, paddingTop: '0.25rem' }}
              >
                <Sidebar />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ListView;
