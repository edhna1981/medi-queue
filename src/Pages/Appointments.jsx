import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, Box, Chip} from "@mui/material";
import { toast } from "react-toastify";


function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const currentToken = appointments.length > 0? appointments[0].tokenNumber: "No active token";

  useEffect(() => {
    fetch("https://mediqueue-backend-ba5p.onrender.com/appointments")
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointments data:", data);
        setAppointments(data);
      });
  }, []);

  const handleCancel = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) {
      return;
    }

    fetch(`https://mediqueue-backend-ba5p.onrender.com/appointments/${id}`, {
      method: "DELETE",
    }).then(() => {
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
       toast.warning("Appointment cancelled successfully!");
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        My Appointments
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "35px",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Current Token
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
        >
          {currentToken}
        </Typography>
      </Box>

      {appointments.length == 0 && (
        <Typography
          textAlign="center"
          color="text.secondary"
          variant="h6"
        >
          No appointments found.
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {appointments.map((appointment) => {
          const sameQueue = appointments.filter(
            (item) =>
              item.doctorId == appointment.doctorId &&
              item.date == appointment.date &&
              item.slot == appointment.slot
          );

          const queuePosition =
            sameQueue.findIndex(
              (item) => item.id == appointment.id
            ) + 1;

          const patientsAhead =
            sameQueue.findIndex(
              (item) => item.id == appointment.id
            );

          return (
            <Card
              key={appointment.id}
              sx={{
                width: "350px",
                borderRadius: "15px",
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ padding: "25px" }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                >
                  {appointment.doctorName}
                </Typography>

                <Chip
                  label={appointment.status}
                  color="success"
                  size="small"
                  sx={{ marginBottom: "20px" }}
                />

                <Typography sx={{ marginBottom: "8px" }}>
                  <strong>Patient Name:</strong>{" "}
                  {appointment.patientName}
                </Typography>

                <Typography sx={{ marginBottom: "8px" }}>
                  <strong>Phone:</strong> {appointment.phone}
                </Typography>

                <Typography sx={{ marginBottom: "8px" }}>
                  <strong>Date:</strong> {appointment.date}
                </Typography>

                <Typography sx={{ marginBottom: "8px" }}>
                  <strong>Time:</strong> {appointment.slot}
                </Typography>

                <Typography
                  color="primary"
                  fontWeight="bold"
                  sx={{ marginBottom: "15px" }}
                >
                  Token Number:{" "}
                  {appointment.tokenNumber || "Not available"}
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography sx={{ marginBottom: "5px" }}>
                    <strong>Queue Position:</strong>{" "}
                    {queuePosition}
                  </Typography>

                  <Typography>
                    <strong>Patients Ahead:</strong>{" "}
                    {patientsAhead}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={() => handleCancel(appointment.id)}>Cancel Appointment</Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}

export default Appointments;