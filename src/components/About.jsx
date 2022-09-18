import React from "react";
import {Box, Typography, Stack}  from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const aboutDetails = [
    {
        icon : <LockOutlinedIcon/>,
        title : "100% Secure",
        description : "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly."
    },
    {
        icon : <CookieOutlinedIcon/>,
        title : "No cookies required",
        description : "Age and draw mrs like. Improving end distrusts may instantly was household applauded incommode."
    },
    {
        icon : <LoginOutlinedIcon/>,
        title : "Login info not required",
        description : "Draw mrs like. Improving end distrusts may instantly was household applauded incommode."
    },
    {
        icon : <CurrencyExchangeOutlinedIcon/>,
        title : "Moneyback guarrentee",
        description : "Improving end distrusts may instantly was from they fine john he give of rich he. They age and draw mrs like. "
    }
]

function About() {
    return <Box px="100px" pt="25px" pb="40px">
        <Typography variant="h3" fontSize="40px" fontWeight="800" width="50%">
        One plateform to increase followers on all social media.
        </Typography>
        <Stack py="45px" direction="row" spacing={5}>
            {
                aboutDetails.map((detail)=> (
                    <Stack>
                        <Box mb="15px">{detail.icon}</Box>
                        <Typography mb="10px" variant="h6" fontWeight="600">
                            {detail.title}
                        </Typography>
                        <Typography variant="body2" fontWeight="500">
                            {detail.description}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Box>
}

export default About;