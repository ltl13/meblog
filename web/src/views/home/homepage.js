import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from './header/header';
import UserNavBar from './NavBar/UserNavBar';
import NewPost from './newPost/newPosts';
import Sidebar from './sidebar/sidebar';
import { Box } from '@mui/system';
import Trending from './Trending/Trending';

const HomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <UserNavBar />
        <Header />
        <Box>
          <Container maxWidth="lg" sx={{ paddingTop: '3rem' }}>
            <Trending />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ paddingTop: '4rem' }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                sx={{ paddingRight: { md: '2rem' } }}
              >
                <Box mb={2}>
                  <Typography variant="h6" sx={{ fontWeight: '600' }}>
                    DÀNH CHO BẠN
                  </Typography>
                </Box>

                <NewPost />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ paddingLeft: { md: '2rem' } }}
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

export default HomePage;
