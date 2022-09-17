import React from "react";
import {Box, Typography, Stack} from "@mui/material";
import group1 from "../assets1/Group1.png";
import group2 from "../assets1/Group2.png";
import group3 from "../assets1/Group3.png";
import group4 from "../assets1/Group4.png";
import group5 from "../assets1/Group5.png";
import group6 from "../assets1/Group6.png";
import group7 from "../assets1/Group7.png";

const groupArray = [group1, group2, group3, group4, group5, group6, group7 ];


function Businesses() {
    return <Box textAlign="center" py="50px" px="100px">
    <Typography variant="h6" fontWeight="600" m="auto">
    Trusted By Over 100+ Startups and freelance business
    </Typography>
    <Stack pt="50px" direction="row" spacing={2} alignItems="center" justifyContent="space-between">
    {
        groupArray.map((image)=> (
            <img className="client-business-logo" src={image} alt="client-business-logos"/>
        ))
    }
    </Stack>
    </Box>
}

export default Businesses;