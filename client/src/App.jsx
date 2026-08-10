import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RiverRafting from "./pages/RiverRafting";

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/riverrafting" element={<RiverRafting />} />
      </Routes>
  
      <FloatingIcons />
    </div>
  )
}

export default App;