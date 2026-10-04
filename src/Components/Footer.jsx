import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1565c0",
        color: "white",
        marginTop: "60px",
        padding: "40px 0 20px",
      }}
    >
      <Container>
        <Grid container spacing={4}>

          {/* About */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              MediQueue
            </Typography>

            <Typography variant="body2">
              Your simple and convenient clinic appointment
              and queue management system.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Typography
              component={Link}
              to="/"
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              Home
            </Typography>

            <Typography
              component={Link}
              to="/doctors"
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              Find a Doctor
            </Typography>

            <Typography
              component={Link}
              to="/my-appointments"
              sx={{
                display: "block",
                color: "white",
                textDecoration: "none",
              }}
            >
              My Appointments
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: "8px" }}>
              📍 Kochi, Kerala
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: "8px" }}>
              📞 +91 98765 43210
            </Typography>

            <Typography variant="body2">
              ✉ support@mediqueue.com
            </Typography>
          </Grid>

        </Grid>

        {/* Bottom section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            marginTop: "30px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 MediQueue. All rights reserved.
          </Typography>

          <Typography variant="caption">
            Clinic Appointment & Queue Management System
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;