import React from "react";
import {Box, Typography, Stack } from "@mui/material";

function Testimonial() {
    return <Box px="100px" pt="70px" textAlign="center">
        <Typography mb="20px" variant="h6" fontSize="18px" fontWeight="800" color="#3734A9">
            TESTIMONIAL
        </Typography>
        <Typography variant="h2" fontWeight="800" fontSize="54px" mb="25px">
            What our happy users say
        </Typography>
        {/* create a scrollbar using react-scrollbar package */}
    </Box>
}

export default Testimonial;