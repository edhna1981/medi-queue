import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Container, Card, CardContent, Typography, Button, Box, Chip} from "@mui/material";

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
      });
  }, [id]);

  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "50px",
        paddingBottom: "60px",
      }}
    >
      {doctor && (
        <Card
          sx={{
            borderRadius: "15px",
            boxShadow: 4,
          }}
        >
          <CardContent sx={{ padding: "35px" }}>

            {/* Doctor Name */}
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
            >
              {doctor.name}
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              {doctor.specialization}
            </Typography>

            {/* Doctor Information */}
            <Box sx={{ marginTop: "25px" }}>
              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Experience:</strong> {doctor.experience} years
              </Typography>

              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Qualification:</strong> {doctor.qualification}
              </Typography>

              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Hospital:</strong> {doctor.hospital}
              </Typography>

              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Location:</strong> {doctor.location}
              </Typography>

              <Typography sx={{ marginBottom: "25px" }}>
                <strong>Consultation Fee:</strong> ₹
                {doctor.consultationFee}
              </Typography>
            </Box>

            {/* Available Slots */}
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
            >
              Available Slots
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "25px",
              }}
            >
              {doctor.availableSlots.map((slot) => (
                <Chip
                  key={slot}
                  label={slot}
                  clickable
                  color={selectedSlot == slot ? "primary" : "default"}
                  variant={
                    selectedSlot == slot
                      ? "filled"
                      : "outlined"
                  }
                  onClick={() => setSelectedSlot(slot)}
                />
              ))}
            </Box>

            {/* Selected Slot */}
            {selectedSlot && (
              <Typography
                variant="h6"
                sx={{ marginBottom: "20px" }}
              >
                Selected Slot:{" "}
                <strong>{selectedSlot}</strong>
              </Typography>
            )}

            {/* Book Appointment */}
            <Button
              variant="contained"
              size="large"
              disabled={!selectedSlot}
              onClick={() =>
                navigate(`/book/${id}`, {
                  state: {
                    selectedSlot: selectedSlot,
                  },
                })
              }
            > Book Appointment
            </Button>

          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default DoctorDetails;