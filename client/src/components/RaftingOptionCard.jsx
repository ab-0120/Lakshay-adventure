import {Link} from "react-router-dom";
import { FiSunrise, FiSunset, FiClock, FiCalendar, FiActivity, FiArrowRight } from "react-icons/fi";
import { useBooking } from "../context/BookingContext";
import { bookingServices } from "../data/bookingServices";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

// Maps difficulty string -> colors used in 3 places on each row
const difficultyConfig= {
    easy: {label: "Easy", pill: "bg-green-100 text-green-700", panel: "from-green-500 to-emerald-600"},
    moderate: {label: "Moderate", pill: "bg-amber-100 text-amber-700", panel: "from-amber-500 to-orange-600"},
    difficult: {label: "Difficult", pill: "bg-red-100 text-red-700", panel: "from-red-500 to-rose-700"},
};

function TimingBadge({timing}){
    if(timing === "both"){
        return(
            <span className="flex items-center gap-1.5">
                <FiSunrise size={14} className="text-amber-500" />
                <FiSunset size={14} className="text-orange-500" />
                Morning &amp; Evening
            </span>
        );
    }
    if(timing === "evening"){
        return <span className="flex items-center gap-1.5"><FiSunset size={14} className="text-orange-500" />Evening slots</span>
    }

    return <span className="flex items-center gap-1.5"><FiSunrise size={14} className="text-amber-500" />Morning slots</span>
}


function RaftingOptionCard({option}){

    const cfg = difficultyConfig[option.difficulty];

    const {openBooking} = useBooking();
    const raftingService = bookingServices.find(s => s.id === "river-rafting");

    function handleBooking() {
        openBooking({
            ...raftingService,
            basePrice: option.price,
            priceNote: `₹${option.price.toLocaleString("en-IN")}/person`,
            packageLabel: `${option.from} -> ${option.to} . ${option.distance}`,
        })
    }

    return (
        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Coloured Distance Block */}
            <div className={`md:w-44 shrink-0 bg-gradient-to-br ${cfg.panel} text-white flex md:flex-col items-center justify-center gap-1 px-6 py-5 md:py-0`}>

                <span className="text-5xl leading-none" style={bebas}>
                    {option.distance.split(" ")[0]}
                </span>
                <span className="text-sm uppercase tracking-widest opacity-90 style={oswald">
                    Kilometeres
                </span>
                <span className="mt-1 text-xs bg-white/20 rounded-full px-3 py-0.5">
                    {option.grade}
                </span>
            </div>

            {/* Details */}
            <div className="flex-1 p-5 md:p-6">

                {/* from -> to */}
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-slate-900 text-2xl flex items-center gap-2" style={bebas}>
                        {option.from} <FiArrowRight size={18} className="text-cyan-500" /> {option.to}
                    </h3>
                    <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${cfg.pill}`}>
                        {cfg.label}
                    </span>
                </div>

                {/* description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {option.description}
                </p>

                {/* meta grid - duration, timing, days */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600 mb-4">
                    <span className="flex items-center gap-2">
                        <FiClock size={15} className="text-cyan-500" /> {option.duartion}
                    </span>
                    <span style={oswald} className="text-slate-600">
                        <TimingBadge timing={option.timing} />
                    </span>
                    <span className="flex items-center gap-2">
                        <FiCalendar size={15} className="text-cyan-500" /> {option.days}
                    </span>
                </div>

                {/* Rapids */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="flex items-center gap-1 text-xs text-slate-400 uppercase tracking-wide" style={oswald}>
                        <FiActivity size={13} /> Rapids:
                    </span>
                    {option.rapids.map((r) => (
                        <span key={r} className="text-xs bg-cyan-50 text-cyan-700 px-2.5 py-0.5 rounded-full">
                            {r}
                        </span>
                    ))}
                </div>

                {/* Price + Book now */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-2xl font-black text-slate-900">
                        ₹{option.price.toLocaleString()}
                        <span className="text-slate-400 text-sm font-normal"> / person </span>
                    </span>
                    <button onClick={handleBooking} style={oswald}
                          className="px-5 py-2.5 rounded-full bg-cyan-500 text-white text-xs uppercase hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                        Book This Ride
                    </button>
                </div>

            </div>

        </div>
    );
}

export default RaftingOptionCard;