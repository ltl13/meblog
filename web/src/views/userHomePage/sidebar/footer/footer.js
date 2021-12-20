import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = props => {
  const footerItems = [
    { name: 'Trợ giúp', href: '#' },
    { name: '', href: '#' },
    { name: 'Tác giả', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Bảo mật', href: '#' },
    { name: 'Term', href: '#' },
    { name: 'Giới thiệu', href: '#' },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1.5rem 0',
      }}
    >
      {footerItems.map((item, index) => {
        return (
          <Link
            underline="none"
            href={item.href}
            key={index}
            sx={{
              color: '#757575',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontSize: '1rem',
              fontWeight: 500,
              margin: '0 1.5rem 0.25rem 0',
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </Box>
  );
};

export default Footer;
