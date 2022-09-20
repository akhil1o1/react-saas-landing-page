import React from "react";
import {AppBar, Box, Toolbar, Button, IconButton, Typography, Menu, Container, Stack, Link,  MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Products", "Pricing", "Blog", "Testimonial"];


// Appbar component from mui..................................
function Topbar() { 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              fontSize:"20px",
              color: "inherit",
              marginRight :"20%",
              textDecoration: "none"
            }}
          >
            Handler
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontSize:"20px",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            Handler
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", gap:"25px" } }}>
            {pages.map((page) => (
                <Link className="nav-link" href="#" color="inherit" >
                {page}
            </Link>
            ))}
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Sign In</Button>
            <Button variant="contained" sx={{boxShadow : "none"}}>Start Free</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
