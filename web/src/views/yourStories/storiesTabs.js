import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import StoryCard from './storiesCard';

const data = [
  {
    title:
      'Corsair ra mắt RAM đầu bảng DOMINATOR PLATINUM RGB DDR5, xung 6400MHz',
    subtitle:
      'Với mức xung cao và khả năng tản nhiệt mạnh mẽ, RAM DOMINATOR PLATINUM RGB DDR5 chắc chắn sẽ là lựa chọn hàng đầu cho game thủ Mới đây Corsair...',
  },
  {
    title:
      'Lộ tin Nvidia chuẩn bị ra card rời RTX 3050 4 và 8GB, dùng chip RTX 3060',
    subtitle:
      'Card đồ họa phân khúc tầm trung RTX 3050 4 và 8GB được dự đoán sẽ dùng cùng một con chip GPU với RTX 3060 nhưng yếu hơn một...',
  },
  {
    title:
      'Tencent mua nhà phát triển Back 4 Blood, đây là studio thứ 6 bị thâu tóm trong 2021',
    subtitle:
      'Turtle Rock - nhà phát triển tựa game Back 4 Blood - là studio thứ 6 lọt vào tay của Tencent trong năm 2021. Tencent vừa mới thông báo rằng...',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StoriesTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Container maxWidth="xl">
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="basic tabs example"
              >
                <Tab label="Bài viết" {...a11yProps(0)} />
                <Tab label="Phản hồi" {...a11yProps(1)} />
                <Tab label="Thùng rác" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {data.map(item => {
                return (
                  <StoryCard title={item.title} subtitle={item.subtitle} />
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {data.map(item => {
                return (
                  <StoryCard title={item.title} subtitle={item.subtitle} />
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {data.map(item => {
                return (
                  <StoryCard title={item.title} subtitle={item.subtitle} />
                );
              })}
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default StoriesTabs;
