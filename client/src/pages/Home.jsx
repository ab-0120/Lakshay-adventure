import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";

export default function Home(){
    return(
        <div>
            <Navbar />
            <HeroSlider />
            {/* rest of the page */}
        </div>
    );
}