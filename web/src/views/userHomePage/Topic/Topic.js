import { Chip } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

const StyleChip = withStyles({
  root: {
    color: '#050505',
    backgroundColor: '#F0F0F0',
    margin: '0 0.5rem 0.5rem 0',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#dadada',
    },
  },
})(Chip);

const TopicItem = props => {
  const { name, href, ...other } = props;
  return <StyleChip label={name} component="a" href="#" clickable {...other} />;
};

export default TopicItem;
