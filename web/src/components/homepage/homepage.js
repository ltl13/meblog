import { Container, CssBaseline, Grid } from "@mui/material";
import React from "react";
import Header from "./header/header"
import UserNavBar from "../NavBar/UserNavBar";
import PostCards from "./postCard/postCard";
import NewPost from "./newPost/newPosts";
import Sidebar from "./sidebar/sidebar";
import { Box } from "@mui/system";

const HomePage = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Box>
                <UserNavBar />
                <Header />
                <PostCards />
                <Box>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            sx={{ paddingTop: '4rem' }}
                        >
                            <Grid
                                item
                                xs={12} sm={12} md={7} lg={7}
                                space={2}
                            >
                                <NewPost />
                            </Grid>
                            <Grid
                                item
                                xs={12} sm={12} md={4} lg={4}
                            >
                                <Sidebar />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </Box>
        </React.Fragment>
    )
}


export default HomePage;