import {
  Container,
  CssBaseline,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useRef, useEffect } from 'react';
import UserNavBar from 'views/userHomePage/NavBar/UserNavBar';
import SignOut from './SignOut';
import TextSettingItem from './TextSettingItem/TextSettingItem';
import ToggleSetting from './ToggleSetting';
import UsernameSetting from './UsernameSetting';

const useMountEffect = fun => useEffect(fun, []);

const Settings = props => {
  const info = useRef(null);
  const usr = useRef(null);
  const em = useRef(null);
  const emf = useRef(null);
  const sec = useRef(null);
  const scrollToSec = () => {
    sec.current.scrollIntoView();
  };
  const scrollToInfo = () => {
    info.current.scrollIntoView();
  };
  const scrollToEm = () => {
    em.current.scrollIntoView();
  };
  const scrollToEmf = () => {
    emf.current.scrollIntoView();
  };
  const scrollToUsr = () => {
    usr.current.scrollIntoView();
  };
  useMountEffect(scrollToSec);
  useMountEffect(scrollToInfo);
  useMountEffect(scrollToEm);
  useMountEffect(scrollToEmf);
  useMountEffect(scrollToUsr);

  return (
    <Fragment>
      <CssBaseline />
      <UserNavBar />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: '2rem', marginBottom: '5rem' }}
      >
        <Grid container>
          <Grid item lg={3} md={0} sm={0} xs={0}>
            <Stack direction="column" position="fixed">
              <Typography variant="h6" component="h6" fontWeight={700}>
                Cài đặt
              </Typography>
              <Typography
                variant="h6"
                marginBottom={0.5}
                marginTop={0.5}
                component="h6"
                color="#757575"
                sx={{ cursor: 'pointer' }}
                fontWeight={300}
                onClick={scrollToInfo}
              >
                Thông tin cá nhân
              </Typography>
              <Typography
                variant="h6"
                marginBottom={0.5}
                marginTop={0.5}
                component="h6"
                color="#757575"
                sx={{ cursor: 'pointer' }}
                fontWeight={300}
                onClick={scrollToUsr}
              >
                Username và URL
              </Typography>
              <Typography
                variant="h6"
                marginBottom={0.5}
                marginTop={0.5}
                component="h6"
                color="#757575"
                sx={{ cursor: 'pointer' }}
                fontWeight={300}
                onClick={scrollToEm}
              >
                Email
              </Typography>
              <Typography
                variant="h6"
                marginBottom={0.5}
                marginTop={0.5}
                component="h6"
                color="#757575"
                sx={{ cursor: 'pointer' }}
                fontWeight={300}
                onClick={scrollToEmf}
              >
                Email từ meblog
              </Typography>
              <Typography
                variant="h6"
                marginBottom={0.5}
                marginTop={0.5}
                component="h6"
                color="#757575"
                sx={{ cursor: 'pointer' }}
                fontWeight={300}
                onClick={scrollToSec}
              >
                Bảo mật
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Stack direction="column" alignItems="stretch" spacing={6}>
              <Box ref={info}>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight={700}
                  borderBottom="1px solid #c0c0c0"
                  marginBottom={3}
                  paddingBottom={1}
                >
                  Thông tin cá nhân
                </Typography>
                <Stack direction="column" alignItems="stretch" spacing={4}>
                  <TextSettingItem
                    name="name"
                    defaultValue="Vo Quoc Minh"
                    placehoder="Họ tên"
                    title="Họ Tên"
                    description="Tên hiển thị ở trang thông tin, tiểu sử của bạn"
                  />
                  <TextSettingItem
                    name="bio"
                    defaultValue=""
                    placehoder="Thêm bio"
                    title="Bio"
                    description="Bio sẽ xuất hiện trên bảng thông tin tác giả bên cạnh bài viết của bạn"
                  />
                </Stack>
              </Box>

              <Box ref={usr}>
                <UsernameSetting username="quocminhvo" />
              </Box>

              <Box ref={em}>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight={700}
                  borderBottom="1px solid #c0c0c0"
                  marginBottom={3}
                  paddingBottom={1}
                >
                  Email
                </Typography>
                <Stack direction="column" alignItems="stretch" spacing={3}>
                  <TextSettingItem
                    name="name"
                    defaultValue="voquocminh@gmail.com"
                    placehoder="Email"
                    title="Email của bạn"
                    description=""
                  />
                  <ToggleSetting
                    name="Đề xuất bài viết"
                    description="Cho phép chúng tôi gửi email thông báo đến bạn các bài viết được đội ngũ chúng tôi chọn lọc và tin rằng sẽ phù hợp với sở thích của bạn"
                  />
                </Stack>
              </Box>

              <Box ref={emf}>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight={700}
                  borderBottom="1px solid #c0c0c0"
                  marginBottom={3}
                  paddingBottom={1}
                >
                  Email từ meblog
                </Typography>
                <Stack direction="column" alignItems="stretch" spacing={3}>
                  <ToggleSetting
                    name="Email về tác giả"
                    description="Nhận mail từ tác giả mà bạn theo dõi mỗi khi họ có bài viết mới"
                  />
                  <ToggleSetting
                    name="Email về ấn phẩm"
                    description="Nhận mail từ các ấn phẩm mà bạn theo dõi mỗi khi có cập nhật mới"
                  />
                </Stack>
              </Box>

              <Box ref={sec}>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight={700}
                  borderBottom="1px solid #c0c0c0"
                  marginBottom={3}
                  paddingBottom={1}
                >
                  Bảo mật
                </Typography>
                <Stack direction="column" alignItems="stretch" spacing={3}>
                  <SignOut />
                  <Stack direction="column" alignItems="stretch">
                    <Typography
                      variant="h6"
                      component="h6"
                      fontWeight={700}
                      marginBottom={0.25}
                    >
                      {' '}
                      Xoá tài khoản
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      marginBottom={0.25}
                    >
                      Xoá toàn bộ thông tin và bài viết của bạn!
                    </Typography>
                    <Link href="#">
                      <Typography variant="subtitle2" component="h6">
                        Xoá tài khoản
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Settings;
