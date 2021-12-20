import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import StoryCard from './storiesCard';

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
                <Tab label="Published" {...a11yProps(0)} />
                <Tab label="Responses" {...a11yProps(1)} />
                <Tab label="Drafts" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <StoryCard />
              <StoryCard />
              <StoryCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <StoryCard />
              <StoryCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <StoryCard />
              <StoryCard />
              <StoryCard />
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default StoriesTabs;
