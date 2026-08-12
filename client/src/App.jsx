import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RiverRafting from "./pages/RiverRafting";
import ServiceComingSoon from "./pages/ServiceComingSoon";

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services/river-rafting" element={<RiverRafting />} />
        <Route path="/services/:slug" element={<ServiceComingSoon />} />
      </Routes>
  
      <FloatingIcons />
    </div>
  )
}

export default App;