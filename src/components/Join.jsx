import React from "react";
import {Box, Paper, Typography, TextField, Button} from "@mui/material";

function Join() {
    return <>
        <Paper className="bottom-banner">
        <Box display="flex" p="7%" flexDirection="row" alignItems="center">
            <Box flex="0.5" p="5%" className="email-container">
                <Typography variant="body2" mb="20px" color="#ffffff" fontWeight="500">
                    JOIN WITH OUR COMMUNITY
                </Typography>
                <Typography variant="h4" mb="20px" fontSize="30px" fontWeight="800" color="#ffffff">
                Set your social media growth on autopilot.
                </Typography>
                <Box display="flex" flexDirection="row">
                <TextField className="textfield" id="outlined-basic" label="YOUR EMAIL ADDRESS" variant="outlined"/>
                <Button className="subscribe-button" variant="contained">Subscribe</Button>
                </Box>
            </Box> 
            <Box flex="0.5">

            </Box>
        </Box>
    </Paper>
    </> 
}

export default Join;