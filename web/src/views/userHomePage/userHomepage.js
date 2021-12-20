import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import UserNavBar from './NavBar/UserNavBar';
import NewPost from './newPost/newPosts';
import Sidebar from './sidebar/sidebar';
import { Box } from '@mui/system';
import Header from './Header/Header';

const UserHomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <UserNavBar />

        {/* <PostCards /> */}

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
                }}
              >
                <Header />
                <Typography variant="h5" fontWeight={600}>
                  Gợi ý cho bạn
                </Typography>
                <Box
                  mb={2}
                  paddingTop={4}
                  sx={{
                    paddingRight: { md: '2rem' },
                    borderTop: { md: '1px solid #c0c0c0' },
                  }}
                >
                  <NewPost />
                </Box>
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

export default UserHomePage;
