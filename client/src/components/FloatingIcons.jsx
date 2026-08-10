import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiX } from "react-icons/fi";
import { useState } from "react";

const numbers=[
    {label: "Adventure Desk", display: "+91 80069 87421", tel: "+918006987421", wa:"918006987421"},
    {label: "Booking Helpline", display: "+91 74569 94997", tel: "+917456994997", wa:"+917456994997"},
]

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};

function FloatingIcons(){

    const [open, setOpen] = useState(null); // null, call, whatsapp
    const toggle= (panel) => setOpen((prev)=> (prev === panel ? null : panel));

    const waMessage = encodeURIComponent("Hi, I'd like to know more about your adventure packages...");

    return(
        <div className="fixed bottom-6 left-6 z-[150] flex flex-col items-start gap-3">

            {/* LAYER 1: the pop up panel (only when 'open' is truthy) */}
            {open && (
                <div
                    className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-60"
                    style={{animation: "fadeInUp 0.25s ease both"}}
                >
                    {/* panel header -color changes based on which panel is open */}
                    <div className={`flex items-center justify-between px-4 py-3
                        ${open === "whatsapp" ? "bg-[#25D366]" : "bg-cyan-500"}`}>

                            <span style={oswald} className="text-white text-sm uppercase tracking-widest flex items-center gap-2">
                                {open === "whatsapp" ? <FaWhatsapp size={16}/> : <FiPhone size={15} />}
                                {open === "whatsapp" ? "Chat with us" : "Call us"}
                            </span>
                            <button onClick={()=> setOpen(null)} aria-label="Close"
                                    className="text-white/80 hover:text-white transition-colors">
                                        <FiX size={18} />
                            </button>
                    </div>

                    {/*  the list of numbers --- */}
                    <div className="p-2">
                        {numbers.map((n)=>(
                            <a key={n.tel}
                               href={open === "whatsapp" ? `https://wa.me/${n.wa}?text=${waMessage}` : `tel:${n.tel}`}
                               target={open === "whatsapp" ? "_blank" : undefined}
                               rel={open === "whatsapp" ? "noopener noreferrer" : undefined}
                               className="flex items-center gap-3 px-3 py-2.5 rounded-cl hover:bg-slate-50 transition-colors group">
                                 
                                <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white
                                        ${open === "whatsapp" ? "bg-[#25D366]" : "bg-cyan-500"}`}>
                                    {open === "whatsapp" ? <FaWhatsapp size={17} /> : <FiPhone size={15}/>}
                                </span>

                                <span className="flex flex-col">
                                    <span className="text-[11px] text-slate-400 uppercase tracking-wide" style={oswald}>
                                        {n.label}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                                        {n.display}
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* LAYER 2: the two floating round buttons----- always visible------- */}
            <div className="flex flex-col gap-3">
                {/* Whatsapp button */}
                <button onClick={()=>toggle("whatsapp")}
                        aria-label="Whatsapp us"
                        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            
                            
                            {/* the pushing "attention" ring */}
                            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
                            <FaWhatsapp size={28} className="relative z-10" />
                </button>

                {/* Call button */}
                <button onClick={()=>toggle("call")}
                        aria-label="Call us"
                        className="w-14 h-14 rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <FiPhone size={24} />
                </button>
            </div>
        </div>
    );
}

export default FloatingIcons;