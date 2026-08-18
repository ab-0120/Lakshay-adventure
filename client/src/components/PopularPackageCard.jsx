import {FiClock, FiArrowRight} from "react-icons/fi";
import { useBooking } from "../context/BookingContext";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const difficultyConfig = {
    easy: {label: "Easy", pill: "bg-green-100 text-green-700"},
    moderate: {label: "Moderate", pill: "bg-amber-100 text-amber-700"},
    difficult: {label: "Difficult", pill: "bg-red-100 text-red-600"}
};

function PopularPackageCard({pkg}){

    const {openBooking} = useBooking();
    const diff = difficultyConfig[pkg.difficulty];

    function handleBook() {
        openBooking({
            id: pkg.service,
            name: pkg.name,
            emoji: pkg.emoji,
            basePrice: pkg.price,
            priceNote: pkg.packageLabel,
            timings: pkg.timings,
            minPersons: pkg.minPersons,
            maxPersons: pkg.maxPersons,
        });
    }

    return(
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md
                        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge top-left */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs"
                           style={oswald} >
                        {pkg.badge}
                    </span>

                    {/* difficulty top right */}
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${diff.pill}`}
                          style={oswald} >
                        {diff.label}
                    </span>

                    {/* Name over image */}
                    <div className="absolute bottom-4 left-5 right-5">
                        <p className="text-white text-3xl leading-tight drop-shadow-lg" style={bebas} >
                            {pkg.emoji} {pkg.name}
                        </p>

                        <p className="text-slate-300 text-xs mt-1" style={oswald} >{pkg.tagline}</p>
                    </div>
            </div>

            {/* INFO row */}
            <div className="p-6 flex items-center justify-between gap-4">

                {/* Left price+duration */}
                <div>
                    <p className="text-slate-900 text-3xl font-black" style={bebas}>
                        ₹{pkg.price.toLocaleString("en-IN")}
                        <span className="text-slate-400 text-sm font-normal"> /person</span>
                    </p>
                    <span className="flex items-center gap-1.5 text-slate--400 text-xs mt-1" style={oswald}>
                        <FiClock size={12} /> {pkg.duration}
                    </span>
                </div>

                {/* Right -- BOOK NOW */}
                <button onClick={handleBook}
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 text-white text-xs uppercase
                                   hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/30
                                   hover:gap-3 transition-all duration-300 shrink-0"
                        style={oswald} >
                    Book NOW <FiArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}

export default PopularPackageCard;