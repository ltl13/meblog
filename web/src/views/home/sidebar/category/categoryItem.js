import { Chip } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

const StyleChip = withStyles({
  root: {
    color: '#757575',
    backgroundColor: '#F0F0F0',
    margin: '0 0.5rem 0.5rem 0',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: '400',
    border: '1px solid #757575',
  },
})(Chip);

const CategoryItem = props => {
  const { name, href } = props;
  return <StyleChip label={name} component="a" href="#" clickable />;
};

export default CategoryItem;
