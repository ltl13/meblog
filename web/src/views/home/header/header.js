import { Container, Grid, Link, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';

import Lottie from 'react-lottie';
import blogGirl from '../../../lottie-animation/blog-girl.json';
import theme from '../theme';
const Header = () => {
  const blogGirlOptions = {
    loop: true,
    autoplay: true,
    animationData: blogGirl,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            borderBottom: '1px solid #000000',
            padding: {
              xs: '0rem 0rem 1rem 0rem',
              sm: '0rem 0rem 2rem 0rem',
              lg: '0 2rem 2rem 2rem',
            },
            backgroundColor: '#f8eee7',
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              sx={{ position: 'relative' }}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="flex-start"
                align
                xs={12}
                sm={8}
                md={8}
                lg={6}
              >
                <Typography
                  variant="h1"
                  component="span"
                  sx={{
                    fontFamily: "'Playfair Display'",
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block',
                    },
                    zIndex: 2,
                  }}
                >
                  Meblog nơi để đọc, chia sẻ và kết nối
                </Typography>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    fontFamily: "'Playfair Display'",
                    display: { md: 'block', lg: 'none' },
                    zIndex: 2,
                  }}
                >
                  Meblog đọc, chia sẻ và kết nối
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    zIndex: 2,
                  }}
                >
                  Thật dễ dàng để thể hiện cảm nghĩ của bạn về bất kỳ chủ đề nào
                  và kết nối với hàng triệu độc giả.
                </Typography>
                <Link
                  mt={2}
                  href="/signup"
                  underline="none"
                  color="secondary.primaryText"
                  sx={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #000000',
                    borderRadius: '20px',
                    backgroundColor: 'secondary.background',
                  }}
                >
                  Bắt đầu viết
                </Link>
              </Grid>
              <Box
                sx={{
                  position: 'absolute',
                  right: '0',
                  bottom: 0,
                  top: 0,
                  zIndex: 1,
                }}
              >
                <Lottie options={blogGirlOptions} />
              </Box>
              {/* <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                direction="row"
                justifyContent="flex-end"
              >
                <Lottie options={blogGirlOptions} />
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Header;
