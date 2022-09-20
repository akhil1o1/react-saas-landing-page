import React from "react";
import {Box, Stack, Typography, Button, Link} from "@mui/material";


function Navbar() {
    return <Box className="navbar">
        <Typography variant="h6" fontWeight="700" fontSize="20px">
            Handler
        </Typography>
        <Stack direction="row" spacing={3}>
            <Link className="nav-link" href="#" color="inherit" >
                Products
            </Link>
            <Link className="nav-link" href="#" color="inherit" >
                Packages
            </Link>
            <Link className="nav-link" href="#" color="inherit" >
                Blogs
            </Link>
            <Link className="nav-link" href="#" color="inherit" >
                Testimoinals
            </Link>
        </Stack>
        <Stack direction="row" spacing={2}>
        <Button variant="outlined">Sign In</Button>
        <Button variant="contained" sx={{boxShadow : "none"}}>Start Free</Button>
        </Stack>
    </Box>
}

export default Navbar;