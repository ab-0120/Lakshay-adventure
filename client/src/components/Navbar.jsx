import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {FiMenu, FiX, FiChevronDown} from "react-icons/fi";
import logo from "../assets/LA_crop.jpg";
import {services} from '../data/services';
import { useBooking } from "../context/BookingContext";

// fonts
const bebasNeueFontStyle = {fontFamily: "'Bebas Neue', cursive"};
const oswaldFontStyle = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1rem"};

//Navbar links
const topLinks = [
    {label: "Home", href: "/"},
    {label: "Packages", href:"/#packages"},
    {label: "Contact", href:"/#contact"},
];

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false); //mobile drawer open
    const [scrolled, setScrolled] = useState(false); //page scrolled- glassy Navbar
    const [brandHovered, setbrandHovered] = useState(false); //brand text glow
    const [mobileSvcOpen, setmobileSvcOpen] = useState(false);

    const {openBooking} = useBooking();

    useEffect(()=>{
        const onScroll= () =>setScrolled(window.scrollY >10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeDrawer = ()=>{
        setMenuOpen(false);
        setmobileSvcOpen(false);
    }

    return(
        <>
        <nav 
          className={`w-full px-10 md:px-16 lg:px-24 py-3 flex items-center justify-between transition-all duration-500 ease-in-out z-50
          ${scrolled ? "fixed top-0 left-0 bg-white/80 backdrop-blur-lg shadow-md"//frosted when scrolled
            :"relative bg-white shadow-xl"
           }
         `}
        >

            {/* Left - Logo + brand */}
            <Link to="/" className="flex items-center gap-3 group"
              style={{animation: "fadeInLeft 0.5s ease both"}}>

                {/*Logo image- scales & rotates on hover */}
                <img
                 src={logo}
                 alt="Lakshay Adventures logo"
                 className="w-9 h-9 rounded-full object-cover ring-2 ring-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
                />

                {/* Brand-name- Bebas Neue font + GLOW on hover */}
                <span
                 onMouseEnter={()=> setbrandHovered(true)}
                 onMouseLeave={()=> setbrandHovered(false)}
                 style= {{
                    ...bebasNeueFontStyle,
                    transition: "transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease",
                    transform: brandHovered ? "scale(1.08)" : "scale(1)",
                    textShadow: brandHovered ? "0 0 8px rgba(6,182,212,0.9), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)" : "none",
                 }}
                 className={`hidden sm:inline text-lg tracking-widest
                    %{brandHovered ? "text-cyan-500" : "text-slate-800"}`}
                >
                    Lakshay Adventure
                </span>
            </Link>

            {/* Desktop links - hidden on mobile */}
            <ul className="hidden md:flex items-center gap-7">

                <li>
                    <Link to="/" style={oswaldFontStyle}
                      className="text-xs uppercase text-slate-700 hover:text-cyan-500 transition-colors duration-200">
                        Home
                    </Link>
                </li>

                {/* Services dropdown */}
                <li className="relative group">
                    <button style={oswaldFontStyle}
                      className="flex items-center gap-1 text-xs uppercase text-slate-700 group-hover:text-cyan-500 transition-colors duration-200">
                      Services
                      <FiChevronDown size={14}
                        className="group-hover:rotate-180 transition-transition duration-300" />
                    </button>

                    {/* Dropdown panel - invisible until hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[34rem] opacity-0 invisible translate-y-2
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

                            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid grid-cols-2 gap-1">
                                {services.map((s) =>{
                                    const Icon = s.icon;
                                    return(
                                        <Link key={s.slug} to={`/services/${s.slug}`}
                                             className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cyan-50 transition-colors duration-200 group/item">
                                            <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0
                                                 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-colors duration-200">
                                                    <Icon size={15}/>
                                            </span>

                                            <span style={oswaldFontStyle}
                                                  className="text-xs uppercase text-slate-600 group-hover/item:text-slate-900">
                                                {s.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                    </div>
                </li>

                {/* Packages + Contact */}
                {topLinks.slice(1).map((link) => (
                    <li key={link.label}>
                        <Link to={link.href} style={oswaldFontStyle}
                              className="text-xs uppercase text-slate-700 hover:text-cyan-500 transition-colors duration-200">
                            {link.label}
                        </Link>
                    </li>
                ))}

                {/* Book NOW Button */}
                {/* <li>
                    <Link to="/#contact" style={oswaldFontStyle}
                          className="ml-2 px-5 py-2 rounded-full bg-cyan-500 text-white text-xs uppercase 
                                     hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300">
                        Book Now
                    </Link>
                </li> */}
                <button onClick={()=> openBooking()}
                        style={oswaldFontStyle}
                        className="ml-2 px-5 py-2 rounded-full bg-cyan-500 text-white text-xs uppercase 
                                     hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300">
                    Book NOW
                </button>
            </ul>

            {/* Hamburger - md:hidden only on MOBILE */}
            <button onClick={()=>setMenuOpen((prev) => !prev)}
                    aria-label="Toggle-menu"
                    className="md:hidden p-2 rounded-lg text-cyan-500 hover:bg-cyan-50 transitiona-all duration-300 hover:scale-110">
                {menuOpen ? <FiX size={24}/> : <FiMenu size={24} />}
            </button>
         </nav>

         {/* Drawer - slides in via tarnslate-x */}
         <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[100] overflow-y-auto transform transition-transform      
                          duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900 sticky top-0 z-10">
                <span style={bebasNeueFontStyle} className="text-cyan-400 text-xl tracking-widest">
                    Lakshay Adventure
                </span>
                <button onClick={closeDrawer} aria-label="Close menu"
                        className="text-xlate-400 hover:text-white hover:rotate-90 transition-all duration-300">
                    <FiX size={22} />
                </button>
            </div>

            {/* Drawer links */}
            <ul className="flex flex-col gap-1 px-4 py-6">
                <li>
                    <Link to="/" onClick={closeDrawer} style={oswaldFontStyle}
                          className="block px-4 py-2.5 rounded-lg text-slate-700 uppercase text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200">
                        Home
                    </Link>
                </li>

                {/* Services ACCORDION- toggled by mobileSvcOpen */}
                <li>
                    <button onClick={()=> setmobileSvcOpen((p) => !p)} style={oswaldFontStyle}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-700 uppercase text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200">
                       Services
                       <FiChevronDown size={16}
                                      className={`transition-transform duration-300 ${mobileSvcOpen ? "rotate-180" : ""}`}/>
                    </button>

                    {/* Collapsing panel- max-h animates open/closed */}
                    <ul className={`overflow-hidden transition-all duration-300
                        ${mobileSvcOpen ? "max-h-[40rem] mt-1" : "max-h-0"}`}>
                        {services.map((s)=>{
                            const Icon = s.icon;
                            return(
                                <li key={s.slug}>
                                    <Link to={`/services/${s.slug}`} onClick={closeDrawer} style={oswaldFontStyle}
                                          className="flex items-center gap-3 pl-7 pr-4 py-2 rounded-lg text-slate-500 text-xs uppercase 
                                          hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200">
                                        <Icon size={14} className="text-cyan-500 shrink-0" />
                                        {s.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </li>

                {topLinks.slice(1).map((link)=>(
                    <li key={link.label}>
                        <Link to={link.href} onClick={closeDrawer} style={oswaldFontStyle}
                              className="block px-4 py-2.5 rounded-lg text-slate-700 uppercase text-sm 
                                         hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200">
                            {link.label}
                        </Link>
                    </li>
                ))}

                {/* <li className="mt-4 px-4">
                    <Link to="/#contact" onClick={closeDrawer} style={oswaldFontStyle}
                          className="block text-center px-5 py-2.5 rounded-full bg-cyan-500 text-white text-sm uppercase
                                     hover:bg-slate-900 transition-all duration-300">
                        Book Now
                     </Link>
                </li> */}

                <button onClick={()=>openBooking()}
                        style={oswaldFontStyle}
                         className="block text-center px-5 py-2.5 rounded-full bg-cyan-500 text-white text-sm uppercase
                                     hover:bg-slate-900 transition-all duration-300">
                        Book Now
                </button>

            </ul>
        </div>

        {/* Click away-Backdrop */}
        {menuOpen && (
            <div onClick={closeDrawer}
                 className="fixed inset-0 bg-black/40 z-[90] md:hidden" />
        )}
        </>
    );
}

export default Navbar;