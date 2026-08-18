import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Reveal from "./Reveal";
import PopularPackageCard from "./PopularPackageCard";
import { popularPackages } from "../data/popularPackages";
import { useRef } from "react";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

function PopularPackagesSection(){

    const scrollRef = useRef(null);

    function scrollLeft(){
        scrollRef.current?.scrollBy({left: -380, behavior: "smooth"});
    }

    function scrollRight(){
        scrollRef.current?.scrollBy({left: 380, behavior: "smooth"});
    }

    return(
        <section className="bg-slate-50 py-16">

            {/* Heading */}
            <Reveal className="text-center mb-1 px-6 md:px-16 lg:px-24">
                <p className="text-cyan-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                    Handpicked for You
                </p>

                <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                    Discover Popular Packages
                </h2>

                <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm" style={oswald}>
                    Our most-booked adventures - pick one, choose your date and we'll handle the rest.
                </p>

                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400" />
            </Reveal>

            {/* Scroll row+ arrow buttons */}
            <div className="relative px-6 md:px-16 lg:px-24 mt-5">

                {/* Left arrow */}
                <button onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg 
                                   border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-500 
                                   hover:text-white hover:border-cyan-500 transition-all duration-200 ml-1">
                    <FiChevronLeft size={20} />
                </button>

                {/* Scrollable trackk */}
                <div ref={scrollRef}
                     className="flex gap-6 overflow-x-auto pb-4"
                     style={{scrollbarWidth: "none", msOverflowStyle: "none"}}>
                    {popularPackages.map((pkg) => (
                        <div key={pkg.id} className="shrink-0 w-80">
                            <PopularPackageCard pkg={pkg} />
                        </div>
                    ))}
                </div>

                {/* Right arrow */}
                <button onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg 
                                   border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-500 
                                   hover:text-white hover:border-cyan-500 transition-all duration-200 mr-1">
                    <FiChevronRight size={20} />
                </button>

            </div>


             {/* cards grid -2 per row on desktop
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                
            </div> */}

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