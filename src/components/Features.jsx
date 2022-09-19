import React from "react";
import {Box, Button, Typography, Stack } from "@mui/material";
import feature1 from "../assets1/feature1.png";
import feature2 from "../assets1/feature2.1.png";


function Features() {
    return <Box px="7%" >
    {/* section first */}
        <Stack direction="row">
        <Box flex="0.4" pt="15%">
            <Typography variant="h2" fontWeight="800" fontSize="54px" mb="25px">
            Get thousands of active followers
            </Typography>
            <Typography variant="body1" fontWeight="500" mb="25px">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </Typography>
            <Button variant="contained">Start free</Button>
        </Box>
        <Box flex="0.6">
            <img className="feature1-image" src={feature1} alt="person"/>
        </Box>
        </Stack>
        {/* section two */}
        <Stack direction="row">
        <Box flex="0.6">
            <img className="feature2-image" src={feature2} alt="person"/>
        </Box>
        <Box flex="0.4" pt="5%">
            <Typography variant="h2" fontWeight="800" fontSize="54px" mb="25px">
            Daily active users on social media
            </Typography>
            <Typography variant="body1" fontWeight="500" mb="25px">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </Typography>
            <Button variant="contained">Start free</Button>
        </Box> 
        </Stack>
    </Box>
}

export default Features;