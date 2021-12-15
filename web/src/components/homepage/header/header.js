import { Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./headerStyle";
const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box
                sx={{ borderBottom: "1px solid #000000", padding: '0 2rem 2rem 2rem', backgroundColor: "#fec016", }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        className={classes.header}

                    >
                        <Grid item container direction="column" alignItems="flex-start" align xs={12} sm={12} md={6} lg={6} className={classes.header_left_content}>
                            <Typography variant="h1" component="div" className={classes.left_content_title}>
                                MeBlog is a place to write, read, and connect
                            </Typography>
                            <Typography variant="h6" component="div" className={classes.left_content_subtitle}>
                                It's easy and free to post your thinking on any topic and connect with millions of readers.
                            </Typography>
                            <Link
                                mt={2}
                                href="#"
                                underline="none"
                                color='#000000'
                                className={classes.start_button}
                            >Start Writing</Link>
                        </Grid>
                        <Grid
                            item
                            xs={12} sm={12} md={6} lg={6}
                            className={classes.header_right_content}
                            direction="row"
                            justifyContent="flex-end"
                        >
                            <div className={classes.Mlogo}>{m}</div>
                            <div className={classes.Elogo}>{e}</div>
                        </Grid>
                    </Grid>
                </Container>

            </Box>

        </React.Fragment >
    )
}


export default Header;

const m = `me me me                     me me me
me me me                     me me me
me me me me        me me me me
me me me me me me me me me
me me me me me me me me me
me me me me me me me me me
me me me me me me me me me
me me me me me me me me me
me me me        me       me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me
me me me                     me me me`

const e =
    `blog blog blog blog blog blog blog
blog blog blog blog blog blog blog
blog blog blog blog blog blog blog
blog blog
blog blog
blog blog
blog blog
blog blog blog blog blog blog blog
blog blog blog blog blog blog blog
blog blog blog blog blog blog blog
blog blog
blog blog
blog blog
blog blog
blog blog blog blog blog blog blog
blog blog blog blog blog blog blog
blog blog blog blog blog blog blog`