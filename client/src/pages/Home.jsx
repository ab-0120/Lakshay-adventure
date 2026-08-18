import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";
import PopularPackagesSection from "../components/PopularPackagesSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

export default function Home(){
    return(
        <div>
            <ScrollProgress />
            <Navbar />
            <HeroSlider />
            {/* rest of the page */}
            <PopularPackagesSection />
            <Footer />
            <ScrollToTop />
        </div>
    );
}