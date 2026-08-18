import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";
import Home from "./pages/Home";
import RiverRafting from "./pages/RiverRafting";
import ServiceComingSoon from "./pages/ServiceComingSoon";
import BookingModal from "./components/Booking/BookingModal"
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App(){
  return(
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services/river-rafting" element={<RiverRafting />} />
        <Route path="/services/:slug" element={<ServiceComingSoon />} />
      </Routes>
  
      <FloatingIcons />
      <BookingModal />
    </div>
  )
}

export default App;