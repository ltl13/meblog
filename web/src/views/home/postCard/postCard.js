import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PostCardItem from "./postCarditem/postCardItem";
import useStyles from "./postCardStyle";
const PostCards = (props) => {
    const classes = useStyles();
    const post = []
    for (let i = 0; i < 6; i++) {
        post.push({
            index: `0${i + 1}`,
            title: "Bros., Lecce: We Eat at The Worst Michelin Starred Restaurant, Ever",
            author: 'No name',
            authorImage: "",
            time: 'Dec 9',
            timeSpend: '6min'
        })
    }
    return (
        <Box
            sx={{ borderBottom: '1px solid #000000', padding: '1rem 0rem' }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                >
                    {
                        post.map(item => {
                            return (
                                <PostCardItem index={item.index} author={item.author} authorImage={item.authorImage} title={item.title} time={item.time} timeSpend={item.timeSpend} />
                            )
                        })
                    }
                </Grid>
            </Container>

        </Box>


    )
}


export default PostCards;