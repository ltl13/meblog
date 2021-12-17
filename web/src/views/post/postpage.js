import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const postPageTheme = createTheme({
  palette: {
    primary: {
      background: "#fffffe",
      button: "#6c91c2",
      buttonText: "#181818",
      headline: "#181818",
      subHeadline: "#2e2e2e",
      text: "#2e2e2e",
      stroke: "#181818",
      hightlight: "#6c91c2",
    },
    secondary: {
      background: "#e2e9f3",
    },
  },
});

export const PostPage = () => {
  return (
    <>
      <ThemeProvider theme={postPageTheme}>
        {/* <CssBaseline /> */}
        <AppBar sx={{ color: "palette.primary.background" }}>
          <Toolbar>
            <Stack direction="row" spacing={"30px"}>
              <Typography>Luan Le</Typography>
              <Button
                sx={{ color: "palette.primary.button" }}
                variant="contained"
              >
                Follow
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
