import React from 'react'
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
         <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "white",
            textDecoration: "none",
          }}
        >
          MediQueue
        </Typography>

        <Button component={Link} to="/" color="inherit">
          Home
        </Button>

        <Button component={Link} to="/doctors" color="inherit">
          Find Doctor
        </Button>

        <Button component={Link} to="/my-appointments" color="inherit">
          My Appointments
        </Button>
      </Toolbar>
    </AppBar>
  
      
    </div>
  )
}

export default Header
