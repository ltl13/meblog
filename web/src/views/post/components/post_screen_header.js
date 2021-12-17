import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const PostScreenHeader = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #000000",
        padding: "2rem 4rem",
        backgroundColor: "#fffffe",
      }}
    >
      <Grid direction="row" sx={{ display: "flex" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          xs={5}
        >
          <Avatar
            src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg"
            sx={{ width: "2rem", height: "2rem" }}
          />
          <Typography sx={{ fontSize: "20px", color: "#181818" }}>
            Geraldine DeRuiter
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#2e2e2e" }}>
            1.3k followers
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#2e2e2e" }}>
            About
          </Typography>
          <Button
            sx={{
              backgroundColor: "#6c91c2",
              color: "#181818",
              borderRadius: "500px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Follow
          </Button>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          xs={3}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Sign in
          </Link>
          <Button
            sx={{
              backgroundColor: "#6c91c2",
              color: "#181818",
              borderRadius: "500px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Get started
          </Button>
          <Typography>Meblog</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostScreenHeader;
