import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop(){

    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const onScroll = () => setVisible(window.screenY > 400); // show after 400px

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll); //cleanup
    }, []);

    const scrollUp = () => window.scrollTo({top:0, behavior: "smooth"}); //smooth will amke it animate instead of jump

    return(
        <button onClick={scrollUp}
                aria-label="Scroll to Top"
                className={`fixed bottom-6 right-6 z-[150] p-3 rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/4
                            hover:scale-110 transition-all duration-300
                            ${visible ? "opacity-100 translate-y-0 pointer-events-auto" //visible- can click
                                      : "opacity-0 translate-y-6 pointer-events-none" //hidden- can't click
                            }
                        `}
                style={visible ? {animation: "float 2.5s ease-in-out infinite"} : undefined}
        >
            <FiArrowUp size={20} />
        </button>
    );
}

export default ScrollToTop;