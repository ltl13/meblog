import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CategoryItem from './category/categoryItem';
import Footer from './footer/footer';

function InitCategories() {
  const categories = [
    { name: 'E-learning', link: '#' },
    { name: 'Cryptocurrency', link: '#' },
    { name: 'Accessibility', link: '#' },
    { name: 'Family', link: '#' },
    { name: 'Science', link: '#' },
    { name: 'Education', link: '#' },
    { name: 'Covid-19', link: '#' },
  ];
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
        KHÁM PHÁ THÊM CÁC CHỦ ĐỀ KHÁC
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
