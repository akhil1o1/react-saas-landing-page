import React from "react";
import {Box, Stack, Typography, Button} from "@mui/material";


function Navbar() {
    return <Box className="navbar">
        <Typography variant="h6" fontWeight="700" fontSize="20px">
            AKP
        </Typography>
        <Stack direction="row" spacing={3}>
            <a href="/" className="nav-link">
                Products
            </a><a href="/" className="nav-link">
                Packages
            </a><a href="/" className="nav-link">
                Blogs
            </a>
            <a href="/" className="nav-link">
                Testimonials
            </a>
        </Stack>
        <Stack direction="row" spacing={2}>
        <Button variant="outlined">Sign In</Button>
        <Button variant="contained" sx={{boxShadow : "none"}}>Start Free</Button>
        </Stack>
    </Box>
}

export default Navbar;