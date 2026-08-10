import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";
import { Route, Routes } from "react-router-dom";

function App(){
  return(
    <div>
      <Navbar />
      <FloatingIcons />
    </div>
  )
}

export default App;