import React from "react";
import { Box } from "@mui/material";
import leftImage from "../assets1/squares1.png";
import rightImage from "../assets1/squares2.png";

function Squares() {
  return (
    <Box display="flex" justifyContent="space-between">
      <img src={leftImage} alt="square-graphic" />
      <img src={rightImage} alt="square-graphic" />
    </Box>
  );
}

export default Squares;
