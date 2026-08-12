import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import Reveal from "../components/Reveal";
import RaftingOptionsCard from "../components/RaftingOptionCard";
import {raftingOptions} from "../data/raftingOptions";
import raftingImg from '../assets/slider/raftingImg1.jpg';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiShield, FiLifeBuoy, FiAward, FiUser, FiAlertTriangle,
         FiHeart, FiPackage, FiTruck, FiRefreshCw, FiCheck, FiX, FiInfo} from "react-icons/fi";

import RaftingOptionCard from "../components/RaftingOptionCard";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const assurances= [
    {icon: FiShield, title: "Certified Guides", text: "AORE and rescue trained on every raft."},
    {icon: FiLifeBuoy, title: "Premium Safety Gear", text: "Helmets, life jackets & self-bailing rafts."},
    {icon: FiAward, title: "10+ Years Experience", text: "Thousands of safe expeditions on the Ganges."},
];


function RiverRafting(){
    return(
        <div>
            <ScrollProgress />
            <Navbar />

            {/* HERO */}
            <header className="relative h-[55vh] min-h-[380px] overflow-hidden">

                {/* 1.Background Image */}
                <img src={raftingImg} alt="River rafting" className="w-full h-full object-cover" />

                {/* 2. Dark gradient overlay so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 to-slate-900/70" />

                {/* 3. Cenetered text on top of everything */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <Reveal>
                        <p className="text-cyan-300 text-sm tracking-[0.35em] uppercase mb-3" style={oswald}>
                        Adventure on the Ganges
                    </p>

                     <h1 className="text-white text-5xl md:text-7xl" style={bebas}>
                        River Rafting in Rishikesh
                    </h1>

                    <p className="text-slate-200 mt-4 max-w-xl text-sm md:text-base">
                        Choose from five thrilling stretches.
                    </p>

                    </Reveal>
                </div>

                {/* 4. Breadcrumb - bottom center */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-white/80 uppercase tracking-widest"
                    style={oswald}>
                        <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
                        <FiChevronRight size={13} />
                        <span>Services</span>
                        <FiChevronRight size={13} />
                        <span className="text-cyan-300">River Rafting</span>
                </div>
            </header>

            {/* Assurances strip */}
            <section className="bg-white border-b border-slate-100 px-6 md:px-16 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {assurances.map(({icon: Icon, title, text}, i) => (
                        <Reveal key={title} delay={i * 0.08}>
                            <div  className="flex items-start gap-3">
                                <span className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                                    <Icon size={20} />
                                </span>

                                <div >
                                    <h3 className="text-slate-900 text-lg" style={bebas}>{title}</h3>
                                    <p className="text-slate-500 text-sm">{text}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="bg-slate-50 px-6 md:px-16 lg:px-24 py-16">
                {/* Section Heading */}
                <Reveal className="text-center mb-12">
                    <p className="text-cyan-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                        Pick Your Stretch
                    </p>
                    <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                        Available Rafting Options
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm md:text-base">
                        From a gentle 9 km family float to legendary 36 km Grdae V expedition.
                    </p>
                    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400"/>
                </Reveal>

                {/* Cards List */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {raftingOptions.map((option, i) => (
                        <Reveal key={option.id} delay={(i % 2) * 0.08}>
                            <RaftingOptionCard option={option} />
                        </Reveal>
                    ))}
                </div>

                {/* Disclaimer note----------- */}
                <Reveal className="max-w-4xl mx-auto mt-8">
                    <p className="text-center text-xs text-slate-400" style={oswald}>
                        * Rafting is subject to water levels & weather. Season runs mid-September to June.
                        Minimum age 15 years. Prices are per person and include gear, guide and transport.
                    </p>
                </Reveal>
            </section>

            {/* MUST KNOW---- */}
            <section className="bg-slate-800 px-6 md:px-16 lg:px-24 py-16 mb-5">
                
                {/* Section Heading */}
                <Reveal className="text-center mb-12">
                    <p className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={oswald}>
                        Important Information
                    </p>
                    <h2 className="text-white text-4xl md:text-5xl" style={bebas}>
                        Must Know Before You Book
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
                        These guidelines aplly to all rafting packages and are mandatory for your safety.
                    </p>
                    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-400" />
                </Reveal>

                {/* Card */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Age  & Weight */}
                    <Reveal>
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                                    <FiUser size={20} />
                                </span>
                                <h3 className="text-white text-xl" style={bebas}>Age &amp; Weight Limits</h3>
                            </div>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiCheck size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Minimum age <strong className="text-white">15 years</strong>. Maximum age <strong className="text-white">60 years</strong></span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiCheck size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Weight range: <strong className="text-white">40kg - 100kg</strong></span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiInfo size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                    <span>Weight must be proportional to height - 6 ft / 100 kg is fine; 5 ft / 100 kg is <strong className="text-red-400">not permitted</strong>.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Card 2: Health */}
                    <Reveal delay={0.08}>
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                                    <FiHeart size={20} />
                                </span>
                                <h3 className="text-white text-xl" style={bebas}>Health Requirements</h3>
                            </div>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiCheck size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Participants must be in <strong className="text-white">good health</strong> with an active lifestyle.</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiX size={15} className="text-red-400 mt-0.5 shrink-0" />
                                    <span><strong className="text-red-300">Not allowed:</strong> heart problems, bypass surgery, epilepsy, or severe asthma</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiInfo size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                    <span>Mild asthma is okay - carry your inhaler and <strong className="text-white">inform your guide</strong> before departure.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                     {/* Card 3: Clothing */}
                    <Reveal delay={0.04}>
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                                    <FiPackage size={20} />
                                </span>
                                <h3 className="text-white text-xl" style={bebas}>What to Wear</h3>
                            </div>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiCheck size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Quick drying clothes: <strong className="text-white">shorts, tshirts, nylon tights, or slacks</strong>.</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiX size={15} className="text-red-400 mt-0.5 shrink-0" />
                                    <span><strong className="text-red-300">Not permitted:</strong> sarees, skirts, or burkhas - these are a safety hazard on the water.</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiInfo size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                    <span>Wet suits provided complimentary in winter (December-March).</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                     {/* Card 4: traffic */}
                    <Reveal delay={0.12}>
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-500/30 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                                    <FiTruck size={20} />
                                </span>
                                <h3 className="text-white text-xl" style={bebas}>Weekend Traffic Advisory</h3>
                            </div>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiAlertTriangle size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                    <span>Heavy weekend traffic on the Rishikesh roads, espacially from <strong className="text-white">Delhi, Haridwar and Dehradun</strong>.</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiCheck size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Plan <strong className="text-red-300">2-3 extra hours</strong> travel time when visiting on weekends or holidays.</span>
                                </li>

                                <li className="flex items-start gap-2 text-slate-300">
                                    <FiInfo size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                                    <span>Our office is at <strong className="text-white">Tapovan - Laxman Jhula</strong>. Arrive before your time slot.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>

                {/* ENd------------------------------------- */}

                {/* Cancellation Policy */}
                <Reveal className="max-w-5xl mx-auto mt-8">
                    <div className="bg-clate-800 rounded-2xl p-6 border border-slate-700">

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                                <FiRefreshCw size={20} />
                            </span>

                            <h3 className="text-white text-xl" style={bebas}>Cancellation Policy</h3>
                        </div>

                        {/* 3 tiles */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {window: "Before 48 hours", refund: "90% Refund", color: "border-green-500/40 bg-green-500/5 text-green-400"},
                                {window: "Before 24 hours", refund: "50% Refund", color: "border-amber-500/40 bg-amber-500/5 text-amber-400"},
                                {window: "Less than 24 Hrs / No-Show", refund: "No Refund", color: "border-red-500/40 bg-red-500/5 text-red-400"},
                            ].map(({window, refund, color}) => (
                                <div key={window} className={`rounded-xl border p-4 text-center ${color}`}>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1" style={oswald}>
                                        {window}
                                    </p>
                                    <p className="text-xl font-black" style={bebas}>{refund}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-500 text-xs mt-4 text-center" style={oswald}>
                            Cancellation must be communicated to our office directly. Refunds processed on amount paid.
                        </p>
                    </div>
                </Reveal>

                {/* Inclusions & Exclclusions */}
                <Reveal className="max-w-5xl mx-auto mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Included */}
                        <div className="bg-slate-800 rounded-2xl p-6 border border-cyan-500/30">
                            <h3 className="text-white text-xl mb-4 flex items-center gap-2" style={bebas}>
                                <FiCheck size={18} className="text-cyan-400" />What's Included
                            </h3>

                            <ul className="space-y-3 text-sm">
                                {[
                                    "Return transport: office -> start point -> office",
                                    "Imported life jackets & certified helmets",
                                    "Paddles & all necessary rafting gear",
                                    "Complimentary wet suits (December-March)",
                                    "Dedicated safety guides on every trip",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-slate-300">
                                        <FiCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* NOT Included */}
                        <div className="bg-slate-800 rounded-2xl p-6 border border-red-500/20">
                                <h3 className="text-white text-xl mb-4 flex items-center gap-2" style={bebas}>
                                    <FiX size={18} className="text-red-400" />Not Included
                                </h3>

                                <ul className="space-y-3 text-sm">
                                    {[
                                        "Personal travel insurance",
                                        "Meals or refreshments (unless specified)",
                                        "Photography / GoPro footage (available at extra cost)",
                                        "Any personal medical expenses",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-slate-300">
                                            <FiX size={14} className="text-red-400 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </Reveal>

            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default RiverRafting;