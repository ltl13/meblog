import { Avatar, Box, CssBaseline, Grid, Link, Typography } from "@mui/material";
import React from "react";
import useStyles from "./postCardItemStyle";
const PostCardItem = (props) => {
    const { index, author, authorImage, title, time, timeSpend } = props;
    const classes = useStyles();
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            {...props}
        >
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'nowrap',
                    padding: "1rem 3rem 1rem 0"
                }}
            >
                <Typography>
                    <Box sx={{ padding: "0 1.5rem 1rem 0", color: "#000000", fontWeight: "bold", fontSize: "2.25rem", fontFamily: 'Roboto', fontStyle: "normal" }}>{index}</Box>
                </Typography>
                <div className={classes.card_main_content}>
                    <div className={classes.author_info}>
                        <Avatar sx={{ width: "1.25rem", height: "1.25rem" }} className={classes.author_image} alt="" src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg" />
                        <Link href="#" underline="none" className={classes.author_name}>
                            <Typography variant="h4" >
                                <Box sx={{ color: "#000000", fontWeight: "bold", fontSize: "0.75rem", lineHeight: "16px", fontFamily: 'Roboto', fontStyle: "normal" }}> Title read, and connect</Box>
                            </Typography>

                        </Link>
                    </div>
                    <Link underline="none" href="#" className={classes.title}>
                        <Box mt={1} sx={{ color: "#000000", fontWeight: "bold", fontSize: "1rem", fontFamily: 'Roboto', fontStyle: "normal" }}> Title  itle  MeBlog is a place to write, r  MeBlog is a place to write, read, and connect</Box>
                    </Link>
                    <Typography variant="subtitle2" mt={1} component="div" className={classes.time}>
                        <Box sx={{ fontFamily: "Roboto", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14px", letterSpacing: "-0.03em", textAlign: "left" }}>Dec 9·10 min read</Box>
                    </Typography>
                </div>
            </Box>

        </Grid>
    )
}


export default PostCardItem;