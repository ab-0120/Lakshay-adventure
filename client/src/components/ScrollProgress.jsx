import { useState, useEffect } from "react";

function ScrollProgress(){

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const onScroll = () =>{
            const scrollTop = window.scrollY; //how many px you have scrolled

            //total scrollable distance = full page height - what's visible in the window
            const height =  document.documentElement.scrollHeight - window.innerHeight;

            //avoid divide-by-0 on short pages
            setProgress(height>0 ? (scrollTop / height)*100 : 0 );
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); //run once immediately so the bar starts at 0 on load

        return ()=> window.removeEventListener("scroll", onScroll); //cleanup
    }, []);

    return(

        //outer div:full width, 1px tall, pinned to top, transparent bg
        <div className="fixed top-0 left-0 w-full h-1 z-[150] bg-transparent">

            {/* inner div: the actual coloured bar- width is driven by 'progress' state */}
            <div className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 transition-[width] duration-150 ease-out"
                 style={{width: `${progress}%`}} />
        </div>      
    );
}

export default ScrollProgress;