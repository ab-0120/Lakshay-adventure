import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

 
const oswald = { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem" };
const bebas = { fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem" };

 
const ADDRESS = "Amkhala, Near Burger King, Lakshman Jhula Road, Tapovan, Rishikesh, Uttarakhand 249192";
const PHONE_PRIMARY = { display: "+91 80069 87421", tel: "+918006987421", wa: "918006987421" };
const PHONE_SECONDARY = { display: "+91 74569 94997", tel: "+917456994997", wa: "917456994997" };
const EMAIL = "info@lakshayadventure.com";

const mapsQuery = encodeURIComponent(ADDRESS);
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const WHATSAPP_URL = `https://wa.me/${PHONE_PRIMARY.wa}?text=${encodeURIComponent(
    "Hi, I'd like to know more about your river rafting packages."
)}`;

 

function ContactSection() {
    return (
        <section id="contact" className="bg-white py-20 md:py-24">
            {/* Heading */}

            <Reveal className="text-center mb-12 px-6 md:px-16 lg:px-24">
                <p className="text-cyan-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                    Reach Out
                </p>

                <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                    Get in Touch
                </h2>

                <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm" style={oswald}>
                    Call, message or drop by - our team in Rishikesh is ready to plan your next adventure.
                </p>

                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400" />
            </Reveal>

 

            {/* Three info cards */}
            <div className="px-6 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Address card */}
                    <InfoCard
                        icon={<FiMapPin size={22} />}
                        label="Visit Us"
                        value={ADDRESS}
                        ctaLabel="Get Directions"
                        ctaHref={DIRECTIONS_URL}
                        ctaExternal
                    />

                    {/* Phone card */}
                    <InfoCard
                        icon={<FiPhone size={22} />}
                        label="Call Us"
                        value={
                            <span className="flex flex-col gap-1">
                                <span>{PHONE_PRIMARY.display}</span>
                                <span className="text-slate-400 text-sm">{PHONE_SECONDARY.display}</span>
                            </span>
                        }
                        ctaLabel="Call Now"
                        ctaHref={`tel:${PHONE_PRIMARY.tel}`}
                    />

                    {/* Email card */}
                    <InfoCard
                        icon={<FiMail size={22} />}
                        label="Email Us"
                        value={EMAIL}
                        ctaLabel="Send Email"
                        ctaHref={`mailto:${EMAIL}`}
                    />
                </div>

                {/* Secondary CTA strip - WhatsApp */}
                <Reveal className="mt-10 max-w-6xl mx-auto">
                    <a href={WHATSAPP_URL}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl
                                  bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg hover:shadow-xl
                                  hover:-translate-y-0.5 transition-all duration-300 group">

                        <div className="flex items-center gap-4">
                            <span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <FaWhatsapp size={22} />
                            </span>

                            <div>
                                <p className="text-lg leading-tight" style={bebas}>Chat with us on WhatsApp</p>
                                <p className="text-cyan-50 text-xs" style={oswald}>
                                    Quick replies, instant booking confirmations.
                                </p>
                            </div>
                        </div>

 

                        <span style={oswald}
                              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                            Start a Chat <FiArrowRight size={16} />
                        </span>

                    </a>
                </Reveal>

 

                {/* Google Map embed */}
                <Reveal className="mt-10 max-w-6xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                        <iframe
                            title="Lakshay Adventure Location"
                            src={MAP_EMBED_URL}
                            width="100%"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function InfoCard({ icon, label, value, ctaLabel, ctaHref, ctaExternal }) {
    return (
        <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 h-full flex flex-col gap-4 border border-slate-100
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    {icon}

                </span>

                <div className="flex-1">
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={oswald}>
                        {label}
                    </p>
                    <div className="text-slate-900 text-base leading-snug" style={oswald}>
                        {value}
                    </div>

                </div>

                <a href={ctaHref}
                   target={ctaExternal ? "_blank" : undefined}
                   rel={ctaExternal ? "noopener noreferrer" : undefined}
                   className="inline-flex items-center gap-2 text-cyan-600 text-sm hover:gap-3 transition-all duration-300"
                   style={oswald}>
                    {ctaLabel} <FiArrowRight size={14} />
                </a>
            </div>
        </Reveal>
    );
}
export default ContactSection;