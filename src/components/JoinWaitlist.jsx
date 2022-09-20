import React from "react";
import {Box, Typography, Button} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function JoinWaitlist() {
    return <Box className="join-waitlist" display="flex" flexDirection="column" p="4%" textAlign="center" alignItems="center" justifyContent="center">
    <Typography variant="h3" color="#ffffff" fontWeight="400" fontSize="40px" width="50%" mb="20px">
        Join millions of creative people with Handler
    </Typography>
    <Button variant="contained" className="waitlist-button" endIcon={<ArrowRightAltIcon/>}>Join the waitlist</Button>
    </Box>
}

export default JoinWaitlist;