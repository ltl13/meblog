import React from 'react';
import { Container, CssBaseline, Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import UserNavBar from 'views/userHomePage/NavBar/UserNavBar';
import Sidebar from 'views/userHomePage/sidebar/sidebar';
import StoriesTabs from './storiesTabs';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

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
                >
                  Your stories
                </Box>
                <Box>
                  <Link
                    href="#"
                    underline="none"
                    color="#ffffff"
                    marginLeft="1rem !important"
                    fontFamily="Roboto"
                    padding="0.75rem 1.5rem"
                    backgroundColor="#ab92bf"
                    borderRadius="25px"
                    fontSize="1rem"
                    fontWeight="400"
                    marginY="auto"
                    whiteSpace="no-wrap"
                    display={{ xs: 'none' }}
                  >
                    Write a story
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    color="#ffffff"
                    fontFamily="Roboto"
                    backgroundColor="#ab92bf"
                    borderRadius="50%"
                    fontSize="1rem"
                    fontWeight="400"
                    marginY="auto"
                    display={{ lg: 'none' }}
                  >
                    <DriveFileRenameOutlineRoundedIcon />
                  </Link>
                </Box>

                {/* <Box marginTop="1.5rem" marginRight="25px"></Box> */}
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
