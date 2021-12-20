import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CategoryItem from './category/categoryItem';
import Footer from './footer/footer';

function InitCategories() {
  const categories = [];
  for (let i = 0; i < 10; i++) {
    const name = 'programing learning listening'.slice(
      Math.ceil(Math.random() * 10),
      Math.ceil(Math.random() * 20 + 4),
    );
    categories.push({ name: name, link: '#' });
  }
  return categories;
}

const Sidebar = props => {
  const categories = InitCategories();
  return (
    <Box>
      <Typography
        mb={1}
        variant="h6"
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: '1.5rem',
        }}
      >
        {categories.map(item => {
          return <CategoryItem name={item.name} link={item.link} />;
        })}
      </Box>
      <Footer />
    </Box>
  );
};

export default Sidebar;
