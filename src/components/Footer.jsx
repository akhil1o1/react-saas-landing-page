import React from "react";
import {Box, Stack, Typography, Link} from "@mui/material";

const company = ["About us", "Careers", "Blog", "Pricing"];
const product = ["facebook followers", "Instagram followers", "Twitter followers", "Tiktok followers"];
const resources = ["Proposal template", "Tutorial", "Invoices", "Freebies"];


function Footer() {
    return<Box px="7%" className="footer" color="#ffffff">
        <Stack direction="row" py="4%">
        {/* left section */}
            <Box flex="0.5" boxSizing="border-box">
                <Typography variant="h6" fontWeight="500" mb="20px">
                    Handler
                </Typography>
                <Typography variant="body2" width="90%">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all   exercise blessing. Indulgence way everything joy alteration boisterous the    attachment.
                </Typography>
            </Box>
        {/* right section */}
        {/* first column */}
            <Stack flex="0.16" gap="12px"> 
            <Typography varaint="body1">
                Company
            </Typography>
            {
                company.map((item)=> (  
                <Link className="footer-link" href="#" color="inherit" variant="body2">
                  {item}
                </Link>
                ))
            }
            </Stack>
            {/* second column */}
            <Stack flex="0.16" gap="12px"> 
            <Typography varaint="body1">
                Product
            </Typography>
            {
                product.map((item)=> (  
                <Link className="footer-link" href="#" color="inherit" variant="body2">
                  {item}
                </Link>
                ))
            }
            </Stack>
            {/* third column */}
            <Stack flex="0.16" gap="12px"> 
            <Typography varaint="body1">
                Resources
            </Typography>
            {
                resources.map((item)=> (  
                <Link className="footer-link" href="#" color="inherit" variant="body2">
                  {item}
                </Link>
                ))
            }
            </Stack>
        </Stack>
    </Box>
}

export default Footer;