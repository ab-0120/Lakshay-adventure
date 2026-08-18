import {bookingServices} from "../../data/bookingServices";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

function Step1_ServiceSelect(){

     const navigate = useNavigate();
     const {closeBooking} = useBooking();
    return (
        <div>

            {/* Heading */}
            <div className="mb-5">
                <h3 className="text-slate-900 text-3xl" style={bebas}>Choose an Adventure</h3>
                <p className="text-slate-400 text-sm mt-1" style={oswald}>
                    Select what you'd like to book and we will take it from there.
                </p>
            </div>

            {/* Service grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {bookingServices.map((svc) => (
                    <button key={svc.id} onClick={() => {closeBooking(); navigate(`/services/${svc.id}`)}}
                            className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl border-2 border-slate-100
                                       hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-md hover:translate-y-0.5 transition-all duration-200 group">

                            {/* Emoji-- scales up on hover */}
                            <span className="text-3xl group-hover:sclae-110 transition-transform duration-200">
                                {svc.emoji}
                            </span>

                            <div>
                                <p className="text-slate-900 text-base leading-tight" style={bebas}>
                                    {svc.name}
                                </p>
                                <p className="text-slate-400 text-xs mt-0.5 leading-tight" style={oswald}>
                                    {svc.tagline}
                                </p>
                            </div>

                            {/* Price note */}
                            <span className="text-cyan-500 text-xs font-semibold" style={oswald}>
                                {svc.priceNote}
                            </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Step1_ServiceSelect;