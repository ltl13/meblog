import React from 'react';
import { Container, CssBaseline, Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import UserNavBar from 'views/userHomePage/NavBar/UserNavBar';
import Sidebar from 'views/userHomePage/sidebar/sidebar';
import StoriesTabs from './storiesTabs';

const YourStories = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <UserNavBar />
        <Container maxWidth="xl">
          <Grid container direction="row" marginTop="50px">
            <Grid item xs={12} sm={12} md={8} lg={8} space={2}>
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontWeight="bold"
                  fontSize="2.75rem"
                  fontFamily="Roboto"
                  fontStyle="normal"
                  marginLeft="25px"
                  marginTop="-15px"
                >
                  Bài viết của bạn
                </Box>
                <Box marginRight="25px">
                  <Link
                    href="/write"
                    underline="none"
                    color="#ffffff"
                    fontFamily="Roboto"
                    padding="0.75rem 1.5rem"
                    backgroundColor="#ab92bf"
                    borderRadius="25px"
                    fontSize="1rem"
                    fontWeight="400"
                    whiteSpace="no-wrap"
                    display={{ xs: 'none', sm: 'block' }}
                  >
                    Bài viết mới
                  </Link>
                </Box>
              </Box>
              <StoriesTabs />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} paddingLeft="2rem">
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default YourStories;
