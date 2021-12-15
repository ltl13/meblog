import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = (props) => {
    const footerItems = [
        { name: "Help", href: "#" },
        { name: "Status", href: "#" },
        { name: "Writers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Term", href: "#" },
        { name: "About", href: "#" },
    ]
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '1.5rem 0' }}
        >
            {
                footerItems.map(item => {
                    return (
                        <Link
                            underline="none"
                            href={item.href}
                            sx={{ color: "#757575", fontFamily: "Roboto", fontStyle: 'normal', fontSize: '1rem', fontWeight: 500, margin: "0 2rem 0.25rem 0" }}
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </Box>
    )
}


export default Footer;