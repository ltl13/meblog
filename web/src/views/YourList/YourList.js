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

const YourList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openNewCollection, setOpenNewCollection] = React.useState(false);
  const handleOpen = () => setOpenNewCollection(true);
  const handleClose = () => setOpenNewCollection(false);

  let posts = [];
  for (let i = 0; i < 3; i++) {
    posts.push({
      href: '#',
      author: {
        name: 'Personal Growth',
        cover: 'https://miro.medium.com/fit/c/200/134/0*DTiOkmELkfMaaes9',
      },
      title: 'How Much YouTube Paid Me for a 68,000,000 Viewed Video',
      subtitle:
        'Your brain is the control center for all activities in your body. It regulates your breathing, heartbeat, and many more vital activities.',
      time: 'Nov 3',
      timeSpend: '8 min read',
      category: {
        name: 'Blockchain',
        href: '#',
      },
    });
  }

  const list = [
    {
      name: 'Reading list',
      count: '5',
      href: '/user/yourStories',
      stories: [
        {
          title: 'stories 1',
          cover:
            'https://images.unsplash.com/photo-1639903520702-5fddbeec9d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          title: 'stories 2',
          cover:
            'https://images.unsplash.com/photo-1639914756841-8e7b6a37ab95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          title: 'stories 3',
          cover:
            'https://images.unsplash.com/photo-1639733755368-7d0b2507e429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        },
        {
          title: 'stories 4',
          cover:
            'https://images.unsplash.com/photo-1639873179448-2e7eb329d3aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      ],
    },
    {
      name: 'Reading list',
      count: '5',
      stories: [
        {
          title: 'stories 1',
          cover:
            'https://images.unsplash.com/photo-1639903520702-5fddbeec9d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          title: 'stories 2',
          cover:
            'https://images.unsplash.com/photo-1639914756841-8e7b6a37ab95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          title: 'stories 3',
          cover:
            'https://images.unsplash.com/photo-1639733755368-7d0b2507e429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        },
        {
          title: 'stories 4',
          cover:
            'https://images.unsplash.com/photo-1639873179448-2e7eb329d3aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      ],
    },
  ];

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
              <SavedList value={value} index={0} list={list} />
              <Recently value={value} index={1} posts={posts} />
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
