import { useEffect, useRef, useState } from "react";
import {FiStar, FiArrowRight} from "react-icons/fi";
import Reveal from "./Reveal";
import jdLogo from "../assets/JD_logo.png";


const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const JUSTDIAL_URL = `https://www.justdial.com/Rishikesh/Lakshay-Adventure-Opposite-Burger-King-Tapovan/9999PX135-X135-250117141230-L9C9_BZDET`;

const rating = 4.9;
const TOTAL_Reviews = 188;

//stars component
function Stars(){
    return(
        <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
                <FiStar key={s} size={26} className="text-amber-400 fill-amber-400" />
            ))}
        </div>
    );
}

//Main section
function ReviewsSection(){

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    //count up runs once when section enters viewport 
    useEffect(() =>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    let current =0;
                    const step = rating/60;
                    const timer = setInterval(() => {
                        current += step;
                        if(current >= rating){
                            setCount(rating);
                            clearInterval(timer);
                        }else {
                            setCount(parseFloat(current.toFixed(1)));
                        }
                    }, 20);
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );

        if(sectionRef.current) observer.observe(sectionRef.current);
        return()=> observer.disconnect();
    }, []);

    return(

        <section ref={sectionRef} className="bg-slate-800 py-9 px-6 md:px-16 lg:px-24 mb-10">

            {/* Heading */}
            <Reveal className="text-center mb-10">
                <p className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                    Customer Rating
                </p>
                <h2 className="text-white text-4xl md:text-5xl" style={bebas}>
                    Trusted by thousands of Adventurers
                </h2>

                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400" />
            </Reveal>

            {/* entire card is one big link -> opens JustDial */}
            <a href={JUSTDIAL_URL} target="_blank" rel="noopener noreferrer"
               className="group block max-w-3xl mx-auto">

                <div className="relative bg-white rounded-3xl border border-slate-700 overflow-hidden
                                group-hover:border-cyan-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10
                                transition-all duration-500">

                    {/* Hover - glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* LEFT RIGHT split */}
                    <div className="flex flex-col sm:flex-row">

                        {/* LEFT -rating stars reviews count arrow */}
                        <div className="flex-1 flex flex-col items-center justify-center px-8 py-10 sm:py-12 text-center 
                                        border-b sm:border-b-0 sm:border-r border-slate-700">

                            {/* 4.9 counts up */}
                            <div className="text-slate-900 leading-none mb-3 transition-all duration-700"
                                 style={{
                                    ...bebas,
                                    fontSize: "6rem",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(20px)",
                                 }}>
                                {count.toFixed(1)}

                                <span className="text-cyan-400" style={{fontSize: "2.5rem"}}> / 5</span>
                            </div>

                            {/* Stars - delay 200 ms */}
                            <div className="mb-3 transition-all duration-700"
                                 style={{transitionDelay: "200ms", opacity: visible ? 1 : 0,
                                         transform: visible ? "translateY(0)" : "translateY(12px)"
                                 }}>
                                <Stars />
                            </div>

                            {/* Review count */}
                            <p className="text-slate-500 text-sm mb-6 transition-all duration-700"
                               style={{
                                  ...oswald,
                                  transitionDelay: "300ms",
                                  opacity: visible ? 1 : 0
                               }}>
                                Based on{"  "}
                                <span className="text-slate-900 font-semibold">{TOTAL_Reviews}+ verified reviews</span>
                            </p>

                            {/* Arrow CTA */}
                            <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase
                                            group-hover:gap-4 transition-all duration-300"
                                style={{
                                    ...oswald,
                                    transitionDelay: "400ms",
                                    opacity: visible ? 1 : 0
                                }}>
                                    View all reviews <FiArrowRight size={14} />
                            </div>
                        </div>

                        {/* RIGHT - JD logo */}
                        <div className="flex items-center justify-center px-8 py-10 sm:py-12 sm:w-64 shrink-0">
                            <img src={jdLogo} alt="JustDial"
                                 className="w-36 sm:w-44 object-contain group-hover:scale-105
                                            transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </a>

            {/* Small note below card */}
            <Reveal className="text-center mt-5">
                <p className="text-slate-600 text-xs" style={oswald}>
                    Click to read all reviews on JustDial
                </p>
            </Reveal>
        </section>
    );
}

export default ReviewsSection;