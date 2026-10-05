import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";
import PopularPackageCard from "./PopularPackageCard";
import { popularPackages } from "../data/popularPackages";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

function PopularPackagesSection(){

    return(
        <section className="bg-slate-50 py-20 md:py-24 min-h-screen flex flex-col justify-center">

            {/* Heading */}
            <Reveal className="text-center mb-1 px-6 md:px-16 lg:px-24">
                <p className="text-cyan-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                    Handpicked for You
                </p>

                <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                    Discover Rafting Packages
                </h2>

                <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm" style={oswald}>
                    Our most-booked river rafting adventures on the Ganges- pick one, choose your date and we'll handle the rest.
                </p>

                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400" />
            </Reveal>

            {/* Cards center grid, stacks on mobile */}
            <div className="px-6 md:px-16 lg:px-24 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {popularPackages.map((pkg) => (
                        <PopularPackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>

            {/* View all link */}
            <Reveal className="text-center mt-10">
                <Link to='/services/river-rafting'
                      className="inline-flex items-center gap-2 text-cyan-600 text-sm hover:gap-4 transition-all duration-300"
                      style={oswald}>
                    View All <FiArrowRight size={16} />
                </Link>
            </Reveal>
        </section>
    );
}

export default PopularPackagesSection;