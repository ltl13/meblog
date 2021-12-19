import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CategoryItem = props => {
  const { name, link } = props;
  console.log(name);
  return (
    <Link
      href={link}
      underline="none"
      sx={{
        color: '#757575',
        border: '1px solid #757575',
        padding: '0.3rem 1rem',
        margin: '0.25rem 0.5rem 0.25rem 0',
        borderRadius: '5px',
      }}
    >
      {name}
    </Link>
  );
};

export default CategoryItem;
