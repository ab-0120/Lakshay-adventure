import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  
      <FloatingIcons />
    </div>
  )
}

export default App;