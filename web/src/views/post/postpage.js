import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export const PostPage = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Luan Le</Typography>
        <Button color="secondary" variant="contained">
          Follow
        </Button>
      </Toolbar>
    </AppBar>
  );
};
