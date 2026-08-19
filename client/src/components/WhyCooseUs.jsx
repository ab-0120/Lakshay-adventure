import {FiStar, FiShield, FiSliders, FiMapPin, FiClock, FiUsers } from "react-icons/fi";
import Reveal from "./Reveal";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const reasons =[
    {
        icon: FiStar,
        title: "4.9⭐ Rated by Customers",
        text: "Trusted by 188+ adventurers on JustDial..",
    },
    {
        icon: FiShield,
        title: "Safety First, Always",
        text: "Every trip runs with certified guides..",
    },
    {
        icon: FiUsers,
        title: "Expert local Team",
        text: "Our guides are skilled professionals..",
    },
    {
        icon: FiSliders,
        title: "Fully Customizable",
        text: "whether it's a solo trip, a family outing..",
    },
    {
        icon: FiMapPin,
        title: "Easy to Reach",
        text: "Located at Tapovan, Rishikesh..",
    },
    {
        icon: FiClock,
        title: "Opens Every Day",
        text: "We operate 7 days a week from 7:00 am..",
    },
];

function WhyChooseUs(){
    return(

        <section className="bg-white py-10 px-6 md:px-16 lg:px-24 border-2 border-slate-200 mb-5">

            {/* HEading */}
            <Reveal className="text-center mb-12">

                {/* Small label above heading */}
                <p className="text-cyan-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                    Why Book With Us
                </p>

                {/* Main Heading */}
                <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                    Why Choose Lakshay Adventure
                </h2>

                {/* Subtitle */}
                <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm" style={oswald}>
                    Rishikesh's most trusted adventure company - here's what sets us apart.
                </p>

                {/* cyan underline bar */}
                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-500" />
            </Reveal>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {reasons.map((r, i) => {
                    const Icon = r.icon;
                    return (
                        <Reveal key={r.title} delay={i * 0.07}>
                            <div className="group h-full bg-white rounded-2xl p-6 border-2 border-slate-200
                                            hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10
                                            hover:-translate-y-1 transition-all duartion-300">

                                {/* Icon cyan background */}
                                <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-4
                                                 bg-cyan-500 text-white group-hover:scale-110 group-hover:bg-slate-900
                                                 transition-all duration-300">

                                    <Icon size={22} />
                                </span>

                                {/* Title */}
                                <h3 className="text-slate-900 text-xl mb-2" style={bebas}>
                                    {r.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed" style={oswald}>
                                    {r.text}
                                </p>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    );
}

export default WhyChooseUs;