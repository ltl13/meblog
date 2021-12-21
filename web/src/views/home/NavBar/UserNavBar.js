import { Container, CssBaseline, Link, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../image/logo.svg';

const UserNavBar = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          borderBottom: '1px solid #000000',
          padding: { xs: '0.25rem 0', md: '0.25rem 2rem' },
          backgroundColor: '#f8eee7',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          transition: '350ms ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/">
              <Box component="img" src={logo} sx={{ height: 50 }}></Box>
            </Link>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Link
                href="#"
                underline="none"
                color="#000000"
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                Giới thiệu
              </Link>
              {/* <Link
                href="#"
                underline="none"
                color="#000000"
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                Viết bài
              </Link> */}
              <Link
                href="#"
                underline="none"
                color="#000000"
                onClick={event => {
                  event.preventDefault();
                  document.querySelector('.login').classList.add('open');
                }}
              >
                Đăng nhập
              </Link>
              <Link
                href="#"
                underline="none"
                color="#ffffff"
                onClick={event => {
                  event.preventDefault();
                  document.querySelector('.signup').classList.add('open');
                }}
                sx={{
                  backgroundColor: '#000000',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                }}
              >
                Bắt đầu
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default UserNavBar;
