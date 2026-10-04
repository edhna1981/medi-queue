import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'


function Home() {
  return (
    <Container maxWidth="lg">

      <Box sx={{textAlign: "center",padding: "80px 20px"}}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>Welcome to MediQueue</Typography>

        <Typography variant="h5" color="text.secondary" 
        sx={{ marginBottom: "30px" }}>Find doctors and book your appointment easily.</Typography>

        <Button component={Link} to="/doctors" variant="contained" size="large" 
        sx={{ marginRight: "15px" }}>Find a Doctor</Button>

        <Button component={Link} to="/my-appointments" variant="outlined" 
        size="large">My Appointments</Button>

      </Box>
      <Box
  sx={{
    padding: "30px 0 60px",
  }}
>
  <Typography
    variant="h4"
    textAlign="center"
    fontWeight="bold"
    gutterBottom
  >
    Why Use MediQueue?
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "30px",
    }}
  >
    <Box
      sx={{
        width: "280px",
        textAlign: "center",
        padding: "25px",
        boxShadow: 2,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        🔍 Find Doctors
      </Typography>

      <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
        Search doctors based on their name and specialization.
      </Typography>
    </Box>

    <Box
      sx={{
        width: "280px",
        textAlign: "center",
        padding: "25px",
        boxShadow: 2,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        📅 Book Appointments
      </Typography>

      <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
        Choose an available time slot and book your appointment.
      </Typography>
    </Box>

    <Box
      sx={{
        width: "280px",
        textAlign: "center",
        padding: "25px",
        boxShadow: 2,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        🎫 Track Your Queue
      </Typography>

      <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
        View your token number and check your queue position.
      </Typography>
    </Box>
  </Box>
</Box>

    </Container>
  )
}

export default Home