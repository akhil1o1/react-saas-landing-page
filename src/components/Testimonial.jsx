import React, {useContext} from "react";
import {Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import TestimonialCard from "./TestimonialCard";

import testimonialDetails from "../testimonialDetails.js";


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
             <ArrowBackIosIcon onClick={()=> scrollPrev() }/>
        </Box>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
    <Box display="flex" alignItems="center" justifyContent="center">
        <ArrowForwardIosIcon onClick={() => scrollNext()}/>
    </Box>
    );
  };
  

function Testimonial() {
    return <Box px="7.5%" py="70px" textAlign="center">
        <Typography mb="20px" variant="h6" fontSize="18px" fontWeight="800" color="#1976d2">
            TESTIMONIAL
        </Typography>
        <Typography variant="h2" fontWeight="800" fontSize="54px" mb="30px">
            What our happy users say
        </Typography>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            testimonialDetails.map((detail)=> (
                <TestimonialCard
                    quote={detail.quote}
                    personName={detail.personName}
                    designation={detail.designation}
                    image={detail.image}
                />
            ))
        }
        </ScrollMenu>
    </Box>
}

export default Testimonial;