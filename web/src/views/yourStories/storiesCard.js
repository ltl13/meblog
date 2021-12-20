import { Box, CssBaseline, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StoryCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
        paddingTop="2"
      >
        <Box>
          <Box>
            <Link href="#" underline="none">
              <Typography variant="h4">
                <Box
                  color="#000000"
                  fontWeight="bold"
                  fontSize="1.75rem"
                  fontFamily="Roboto"
                  fontStyle="normal"
                >
                  5 websites that will pay you every single day
                </Box>
              </Typography>
            </Link>
          </Box>

          <Link underline="none" href="#">
            <Box
              mt={1}
              color="#757575"
              fontWeight="bold"
              fontSize="1rem"
              fontFamily="Roboto"
              fontStyle="normal"
            >
              I make 1000$ in a week by working at home — Hey what’s good
              Friends, I got something exciting to share with you today. I’m
              gonna show you 05 websites that will pay you every single day just
              by working with them from...
            </Box>
          </Link>

          <Typography variant="subtitle2" mt={1} component="Box">
            <Box
              fontFamily="Roboto"
              fontSize="1rem"
              fontStyle="normal"
              fontWeight="400"
              color="#757575"
            >
              Last edited 6 days ago · Dec 9 2021 · 10 min read (2366 words)
              <span>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: '#000000',
                    marginLeft: '10px',
                    '&:hover': {
                      backgroundColor: '#fff',
                    },
                  }}
                  onClick={handleClick}
                >
                  ▼
                </Link>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose}>Edit story</MenuItem>
                  <MenuItem onClick={handleClose}>Delete story</MenuItem>
                  <MenuItem onClick={handleClose}>View stats</MenuItem>
                </Menu>
              </span>
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box
        marginTop="15px"
        marginBottom="15px"
        height="1px"
        backgroundColor="divider"
      ></Box>
    </Grid>
  );
};

export default StoryCard;
