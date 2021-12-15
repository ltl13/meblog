import { Container, CssBaseline, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./UserNavBarStyle";


const UserNavBar = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    borderBottom: "1px solid #000000",
                    padding: '1rem 2rem',
                    backgroundColor: "#fec016",
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                    transition: "350ms ease-in-out"
                }}
                className={classes.userNavBar}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        alignItems="center"


                    >
                        <Grid xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="h3" component="div" className={classes.userNavBar_logo}>
                                MeBlog
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12} sm={12} md={6} lg={6}
                            container
                            direction="row"
                            justifyContent="flex-end"
                        >
                            <ul className={classes.userNavBar_links}>
                                <li>
                                    <Link
                                        href="#"
                                        underline="none"
                                        color='#000000'
                                        className={classes.userNavBar_link_item}
                                    >
                                        Our story
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classes.userNavBar_link_item}
                                        underline="none"
                                        color='#000000'
                                    >
                                        Membership
                                    </Link>
                                </li><li>
                                    <Link
                                        href="#"
                                        className={classes.userNavBar_link_item}
                                        underline="none"
                                        color='#000000'
                                    >
                                        Write
                                    </Link>
                                </li><li>
                                    <Link
                                        href="#"
                                        className={classes.userNavBar_link_item}
                                        underline="none"
                                        color='#000000'
                                    >
                                        Sign in
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={`${classes.userNavBar_link_item} ${classes.getStart_item}`}
                                        underline="none"
                                        color='#ffffff'
                                    >
                                        Get started
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>


            </Box>

        </React.Fragment>
    )
}

export default UserNavBar;