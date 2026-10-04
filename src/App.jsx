
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import DoctorDetails from "./Pages/DoctorDetails";
import Booking from "./Pages/Booking";
import Appointments from "./Pages/Appointments";
import Header from "./Components/Header";
import Footer from "./Components/Footer";




function App() {
  

  return (
    <>
    <Header/>

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/doctors" element={<Doctors />} />
       <Route path="/doctors/:id" element={<DoctorDetails/>} />
       <Route path="/book/:id" element={<Booking/>} />
       <Route path="/my-appointments" element={<Appointments/>} />
    </Routes>

    <Footer/>
      
      
    </>
  )
  
}

export default App
