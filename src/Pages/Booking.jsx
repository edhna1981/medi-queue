import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Container, Card, CardContent, Typography, TextField, Button, Box, Chip} from "@mui/material";
import { toast } from "react-toastify";



function Booking() {
  const location = useLocation();
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const selectedSlot = location.state?.selectedSlot;

  useEffect(() => {
    fetch(`https://mediqueue-backend-ba5p.onrender.com/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
      });
  }, [id]);

  const handleBooking = () => {
    const tokenNumber = `MQ-${Date.now().toString().slice(-6)}`;

    const appointmentData = {
      doctorId: id,
      doctorName: doctor.name,
      patientName: patientName,
      phone: phone,
      date: date,
      slot: selectedSlot,
      tokenNumber: tokenNumber,
      status: "Booked",
    };

    fetch("https://mediqueue-backend-ba5p.onrender.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointment Booked:", data);
        toast.success("Appointment Booked Successfully!");
      });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: "50px",
        paddingBottom: "60px",
      }}
    >
      <Card
        sx={{
          borderRadius: "15px",
          boxShadow: 4,
        }}
      >
        <CardContent sx={{ padding: "35px" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Book Appointment
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{ marginBottom: "30px" }}
          >
            Enter your details to book an appointment.
          </Typography>

          {doctor && (
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {doctor.name}
              </Typography>

              <Typography color="primary" fontWeight="bold">
                {doctor.specialization}
              </Typography>

              <Typography sx={{ marginTop: "8px" }}>
                Hospital: {doctor.hospital}
              </Typography>
            </Box>
          )}

          <Box sx={{ marginBottom: "25px" }}>
            <Typography fontWeight="bold" sx={{ marginBottom: "10px" }}>
              Selected Slot
            </Typography>

            <Chip
              label={selectedSlot || "No slot selected"}
              color="primary"
              variant="outlined"
            />
          </Box>

          <TextField
            fullWidth
            label="Patient Name"
            placeholder="Enter your name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            fullWidth
            type="date"
            label="Appointment Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ marginBottom: "30px" }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleBooking}>BOOK APPOINTMENT</Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Booking;