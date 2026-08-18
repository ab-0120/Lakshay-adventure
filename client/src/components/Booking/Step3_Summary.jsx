import { FiChevronLeft, FiMessageCircle } from "react-icons/fi";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

// whatsapp number to send sms
const WHATSAPP_NUMBER = "917060459673";

function Step3_Summary({service, date, time, persons, onBack, onClose}){

    const formattedDate = date ? date.toLocaleDateString("en-IN", {weekday: "long", day: "numeric", year: "numeric"})
                               : "";

    const estimatedTotal = service?.basePrice ? service.basePrice * persons : null;

    function handleWhatsapp(){
        const msg = `Hi, I'd like to book the following with Lakshay Adventure:
                    🎯 Service: ${service?.name}
                    📅 Date: ${formattedDate}
                    ⏱️ Time: ${time}
                    👥 Persons: ${persons}
                    💰 Estimated Total: ₹${estimatedTotal?.toLocaleString("en-IN")}
                    
                    Please confirm my booking. Thank you`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
        onClose();
    }

    return(
        <div className="flex flex-col gap-6">

            {/* HEADING */}
            <div>
                <h3 className="text-slate-900 text-3xl" style={bebas}>Booking Summary</h3>
                <p className="text-slate-400 text-sm mt-1" style={oswald}>
                    Review your details - we'll connect on WhatsApp to confirm.
                </p>
            </div>

            {/* SUMMARY CARD-------------------- */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 divide-y divide-slate-100">

                <SummaryRow emoji={service?.emoji} label="Service" value={service?.name} />
                <SummaryRow emoji="📅" label="Date" value={formattedDate} />
                <SummaryRow emoji="⏱️" label="time" value={time} />
                <SummaryRow emoji="👥" label="Persons" value={`${persons} persons${persons > 1 ? "s" : ""}`} />

                {estimatedTotal && (
                    <div className="flex items-center jsutify-between px-4 py-3">
                        <span className="text-slate-500 text-xs uppercase tracking-widest" style={oswald}>
                           💰 Estimated total
                        </span>
                        <span className="text-cyan-600 text-lg font-bold" style={bebas}>
                            ₹{estimatedTotal.toLocaleString("en-IN")}
                        </span>
                    </div>
                )}
            </div>

            {/* Disclaimer */}
            <p className="text-slate-400 text-xs text-center" style={oswald}>
                * Final price may vary based on package selected. Our team will confirm on WhatsApp.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center justify-between">
                <button onClick={onBack}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-600 text-sm 
                                    hover:border-slate-400 transition-all duration-200"
                        style={oswald}>
                    ← Back
                </button>

                <button onClick={handleWhatsapp}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-green-500 text-white text-sm 
                                    hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200"
                        style={oswald}>
                    <FiMessageCircle size={16} />
                    Send on WhatsApp
                </button>
            </div>
        </div>
    );
}

// Small resusable row
function SummaryRow({emoji, label, value}){
    return(
        <div className="flex items-center justify-between px-4 py-3">
            <span className="text-slate-500 text-xs uppercase tracking-widest" style={oswald}>
                {emoji} {label}
            </span>
            <span className="text-slate-900 text-sm font-semibold" style={oswald}>
                {value}
            </span>
        </div>
    );
}

export default Step3_Summary;