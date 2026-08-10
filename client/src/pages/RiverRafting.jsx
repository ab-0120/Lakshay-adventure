import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

import { useState, useEffect } from "react";


function RiverRafting(){
    return(
        <div>
            <ScrollProgress />
            <Navbar />

            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default RiverRafting;