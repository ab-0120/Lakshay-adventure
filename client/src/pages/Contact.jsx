import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

export default function Conatct(){
    return(

        <div>
            <ScrollProgress />
            <Navbar />
            <ContactSection />
            <Footer />
            <ScrollToTop />
        </div>
    )
}