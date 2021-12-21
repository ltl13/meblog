import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import SavedList from './Saved/Saved';
import Recently from './Recently/Recently';
import NewColection from './Saved/NewCollection/NewCollection';
import Sidebar from './sidebar/sidebar';
import UserNavBar from 'views/userHomePage/NavBar/UserNavBar';
import lists from 'data/bookMark';
import { users } from 'data/users';
import { posts } from 'data/posts';

const YourList = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openNewCollection, setOpenNewCollection] = React.useState(false);
  const handleOpen = () => setOpenNewCollection(true);
  const handleClose = () => setOpenNewCollection(false);

  const user = users.find(item => item.id == '1');
  if (!user) return;
  var recenList = [];
  var bookmarkList = [];

  user.recently.forEach(recenItem => {
    const post = posts.find(postItem => postItem.id == recenItem);
    if (post) recenList.push(post);
  });

  user.lists.forEach(listItem => {
    const term = lists.find(bookmark => bookmark.id == listItem);
    if (term) bookmarkList.push(term);
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <UserNavBar />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: 'calc(100vh - 66px)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
        }}
      >
        <Grid container sx={{ minHeight: '100%' }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            sx={{
              minHeight: '100%',
              paddingTop: '2rem',
              paddingRight: { xs: 0, sm: '1rem', md: '2rem', lg: '3rem' },
              borderRight: { sm: 'none', md: '1px solid #757575' },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              minHeight="35px"
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: '600' }}
              >
                Kho lưu trữ
              </Typography>
              {value === 0 && (
                <Button
                  sx={{
                    padding: '0.3rem 1rem 0.2rem 1rem',
                    backgroundColor: '#AB92BF',
                    color: '#000000',
                    fontWeight: '500',
                    border: '1px solid #AB92BF',
                    borderRadius: '20px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#AB92BF',
                      color: '#ffffff',
                      border: '1px solid #AB92BF',
                    },
                    whiteSpace: 'nowrap',
                  }}
                  variant="outlined"
                  onClick={handleOpen}
                >
                  Thêm mới
                </Button>
              )}
            </Stack>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="me">
                  <Tab
                    label="Đã lưu"
                    {...a11yProps(0)}
                    sx={{
                      borderBottom: 0,
                      padding: 0,
                      minWidth: 0,
                      marginRight: '1rem',
                      textTransform: 'none',
                      '&.Mui-selected': {
                        color: '#000000',
                      },
                    }}
                  />
                  <Tab
                    label="Đã xem gần đây"
                    {...a11yProps(1)}
                    sx={{
                      borderBottom: 0,
                      padding: 0,
                      minWidth: 0,
                      textTransform: 'none',
                      '&.Mui-selected': {
                        color: '#000000',
                      },
                    }}
                  />
                </Tabs>
              </Box>
              <SavedList value={value} index={0} list={bookmarkList} />
              <Recently value={value} index={1} posts={recenList} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              paddingTop: '2rem',
              paddingLeft: { xs: 0, sm: '1rem', md: '2rem', lg: '3rem' },
            }}
          >
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      {openNewCollection && <NewColection onClose={handleClose} />}
    </React.Fragment>
  );
};

export default YourList;

function a11yProps(index) {
  return {
    id: `your-tab-${index}`,
    'aria-controls': `your-tab-${index}`,
  };
}
