import { Box, CssBaseline, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StoryCard = props => {
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
                  fontSize="1.25rem"
                  fontFamily="Roboto"
                  fontStyle="normal"
                >
                  {props.title}
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
              {props.subtitle}
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
              Chỉnh sữa lần cuối 6 ngày trước · Dec 9 2021 · 10 phút đọc (2366 từ)
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
                  <MenuItem onClick={handleClose}>Chỉnh sữa</MenuItem>
                  <MenuItem onClick={handleClose}>Xóa</MenuItem>
                </Menu>
              </span>
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box
        marginTop="25px"
        marginBottom="25px"
        height="1px"
        backgroundColor="divider"
      ></Box>
    </Grid>
  );
};

export default StoryCard;
