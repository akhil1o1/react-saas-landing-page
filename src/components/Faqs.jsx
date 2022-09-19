import React from "react";
import {Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Button} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faqsData = [
{
    question : "How this work ?",
    answer : "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
},
{
    question : "Are there any additional fee?",
    answer : "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
}, 
{
    question : "How can i get the app?",
    answer : "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
},
{
    question : "What if it doesn't work for me?",
    answer : "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
}
];

function Faqs() {
    return <Stack px="7%" direction="row" py="50px">
        <Box flex="0.5" paddingRight="6%">
            <Typography variant="h2" fontWeight="800" fontSize="54px" mb="35px">
            Any questions? <br/> We got you.
            </Typography>
            <Typography variant="body1" fontWeight="500" mb="25px">
            Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </Typography>
            <Button variant="text" endIcon={<ArrowRightAltIcon/>}><Typography fontWeight="800">More Faqs</Typography></Button>
        </Box>
        <Box flex="0.5">
        {
            faqsData.map((data)=> (
        <Accordion sx={{boxShadow: "none", my:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography  variant="body1" fontWeight="500">{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            {data.answer}
          </Typography>
        </AccordionDetails>
        </Accordion>
            ))
        }
        </Box>
    </Stack>
}

export default Faqs;