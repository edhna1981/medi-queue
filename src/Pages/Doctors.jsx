import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Container,Typography,TextField,FormControl,InputLabel,
Select,MenuItem,Card,CardContent,Button,Box} from "@mui/material";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  useEffect(() => {
    fetch("https://mediqueue-backend-ba5p.onrender.com/doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization == "" || doctor.specialization == specialization)
  );

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "40px", paddingBottom: "60px" }}>

      {/* Page Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >Find a Doctor</Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ marginBottom: "30px" }}
      >
        Search for doctors by name or specialization.
      </Typography>

      {/* Search and Filter */}
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Search Doctor"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Specialization</InputLabel>

          <Select
            value={specialization}
            label="Specialization"
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <MenuItem value="">
              All Specializations
            </MenuItem>

            <MenuItem value="Cardiologist">
              Cardiologist
            </MenuItem>

            <MenuItem value="Dermatologist">
              Dermatologist
            </MenuItem>

            <MenuItem value="Neurologist">
              Neurologist
            </MenuItem>

            <MenuItem value="Pediatrician">
              Pediatrician
            </MenuItem>

            <MenuItem value="Orthopedic">
              Orthopedic
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Doctor Cards */}
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredDoctors.map((doctor) => (<Card key={doctor.id} sx={{ width: "300px", 
          borderRadius: "12px", boxShadow: 3}}>
            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                {doctor.name}
              </Typography>

              <Typography
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                {doctor.specialization}
              </Typography>

              <Typography>
                Experience: {doctor.experience} years
              </Typography>

              <Typography>
                Hospital: {doctor.hospital}
              </Typography>

              <Typography>
                Location: {doctor.location}
              </Typography>

              <Typography sx={{ marginBottom: "20px" }}>
                Consultation Fee: ₹{doctor.consultationFee}
              </Typography>

              <Button component={Link} to={`/doctors/${doctor.id}`} variant="contained" 
              fullWidth>View Details</Button>

            </CardContent>
          </Card>
        ))}
      </Box>

    </Container>
  );
}

export default Doctors;