import { href, Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { services } from "../data/services";
import logo from '../assets/LA_crop.jpg';

const oswald = { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const quickLinks = [
    {label: "Home", href: "/"},
    {label: "Services", href: "/#services"},
    {label: "Packages", href: "/#packages"},
    {label: "Contact", href: "/#contact"},
];

const socials = [
    {icon: FaInstagram, href: "https://instagram.com", label: "instagram"},
    {icon: FaFacebook, href: "https://facebook.com", label: "facebook"},
    {icon: FaYoutube, href: "https://youtube.com", label: "youtube"},
    {icon: FaWhatsapp, href: "https://wa.me/918006987421", label: "whatsapp"},
];

//not exported only FOOTEr uses this
const SectionTitle = ({children}) => (
    <h4 className="text-white text-lg mb-4 tracking-widest" style={bebas}>
        {children}
        <span className="block w-10 h-0.5 bg-cyan-400 mt-2" />
    </h4>
);

function Footer() {
    return(
        <footer id="contact" className="bg-slate-900 text-slate-400">
            <div className="px-6 md:px-16 lg:px-24 py-14
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
                {/* Column 1- Brand + social icons */}
                <div>
                    <Link to="/" className="flex items-center gap-3 mb-4">
                        <img src={logo} alt="logo"
                             className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-400"/>
                        <span className="text-white text-xl tracking-widest" style={bebas}>
                            Lakshay Adventure
                        </span>
                    </Link>

                    <p className="text-sm leading-relaxed mb-5">
                        Your trusted partner for rafting, camping, trekking and complete travel experiences in the lap of Himalayas at Rishikesh.
                    </p>

                    {/* Social icon row */}
                    <div className="flex gap-3">
                        {socials.map(({icon: Icon, href, label}) => (
                            <a key={label} href={href}target="_blank" rel="noopener noreferrer"
                               aria-label={label}
                               className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center
                                          hover:bg-cyan-500 hover:text-white hover:-translate-y-1
                                          transition-all duration-300">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2- Services */}
                <div>
                    <SectionTitle>Services</SectionTitle>
                    <ul className="grid grid-cols-1 gap-2 text-sm" style={oswald}>
                        {services.map((s) => (
                            <li keys={s.slug}>
                                <Link to={`/services/${s.slug}`}
                                      className="hover:text-cyan-400 transition-colors duration-200">
                                    {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3- Quick Links */}
                <div>
                    <SectionTitle>Quick Links</SectionTitle>
                    <ul className="grid grid-cols-1 gap-2 text-sm" style={oswald}>
                        {quickLinks.map((l) => (
                            <li key={l.label}>
                                <Link to={l.href}
                                      className="hover: text-cyan-400 transition-colors duration-200">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 - Contact */}
                <div>
                    <SectionTitle>Get in Touch</SectionTitle>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FiMapPin className="text-cyan-400 mt-0.5 shrink-0" size={16} />
                            <span>Lakshman Jhula Road, Tapovan, Rishikesh, Uttarakhand 249192</span>
                        </li>

                        <li>
                            <a href="tel:+918006987421"
                               className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FiPhone className="text-cyan-400 shrink-0" size={16} />
                                +91 80069 87421
                            </a>
                        </li>

                        <li>
                            <a href="tel:+917456994997"
                               className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FiPhone className="text-cyan-400 shrink-0" size={16} />
                                +91 74569 94997
                            </a>
                        </li>

                        <li>
                            <a href="mailto:info@lakshayadventure.com"
                               className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FiMail className="text-cyan-400 shrink-0" size={16} />
                                info@lakshayadventure.com
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Bottom copyright bar */}
            <div className="border-t border-slate-800 px-6 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <p>© {new Date().getFullYear()} Lakshay Adventure. All rights reserved.</p>
                <p style={oswald}>Made with <span className="text-cyan-400">❤︎</span> in Rishikesh.</p>
            </div>
        </footer>
    );
}

export default Footer;