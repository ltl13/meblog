import { React } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  ButtonGroup,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, createTheme } from "@mui/system";
import PostScreenHeader from "./components/post_screen_header";
import PostScreenContent from "./components/post_screen_content";

const theme = createTheme({
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
      <CssBaseline />
      <PostScreenHeader />
      <PostScreenContent />
    </>
  );
};
