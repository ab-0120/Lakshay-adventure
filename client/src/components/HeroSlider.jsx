import raftingImg1 from '../assets/slider/raftingImg1.jpg';
import raftingImg2 from '../assets/slider/raftingImg2.jpg';
import raftingImg3 from '../assets/slider/raftingImg3.jpg';
import raftingImg4 from '../assets/slider/raftingImg4.jpg';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
    {
        image: raftingImg1,
        overlay: "from-cyan-900/70 to-slate-900/60", //Tailwind gradient classes
        tag: "Rafting in",
        title: "GANGES RISHIKESH",
        sub: "Ride the holy rapids with expert guides by your side",
    },
    {
        image: raftingImg2,
        overlay: "from-emerald-900/70 to-slate-900/60", //Tailwind gradient classes
        tag: "Camp Under",
        title: "THE HIMALAYAN STARS",
        sub: "Where crackling bonfires meet mountain silence",
    },
    {
        image: raftingImg3,
        overlay: "from-amber-900/70 to-slate-900/60", //Tailwind gradient classes
        tag: "Trek Through",
        title: "SACRED VALLEYS",
        sub: "Discover trails that breathe ancient stories", 
    }
];

const TOTAL = slides.length;
const track = [slides[TOTAL-1], ...slides, slides[0]];
const TRACK_LEN = track.length;

// Text animation delays fire after 420ms slide transitions
const textAnims = {
    tag: "fadeInDown 0.4s ease 0.35s both", //first to appear
    title: "fadeInUp 0.5s ease 0.44s both", //90ms later
    sub: "fadeInUp 0.4s ease 0.58s both", //then subtitle
    btn: "fadeInUp 0.4s ease 0.68s both", //button last
};

function HeroSlider(){

    //which position in the track are we showing ? starts at 1
    const [index, setIndex] = useState(1);

    //should the slide movement be animated? TURNED OFF during the teleport jump
    const [animated, setAnimated]= useState(true);

    //prevents double-clicks from queuing multiple slides
    const busy = useRef(false);

    //when animated = false, re-enable it after 2 animation frames(ensures CSS applied first)
    useEffect(()=>{
        if(!animated){
            const id = requestAnimationFrame(()=>
                requestAnimationFrame(()=> setAnimated(true))
            );
            return ()=> cancelAnimationFrame(id);
        }
    }, [animated]);

    const navigate = useCallback((dir)=>{
        if(busy.current) return;
        busy.current = true;
        setAnimated(true);
        setIndex((i) => i+dir);
    }, []);

    const next = useCallback(()=> navigate(1), [navigate]);
    const prev = useCallback(()=> navigate(-1), [navigate]);

    useEffect(()=>{
        const timer = setInterval(next, 5000); //auto advance very 5 sec
        return () => clearInterval(timer); //cleanup on unmount
    }, [next]);

    //infinite looopingggg
    const handleTransitionEnd = useCallback((e)=>{
        //Igone events bubbling up from child elements
        if (e.target !== e.currentTarget) return;

        if(index == 0){
            //we slid to the [3*] clone - jump to the real slide 3 (index=TOTAL)
            setAnimated(false);
            setIndex(TOTAL);
        }else if(index == TOTAL+1){
            //we slid to the [1*] clone- jump to the real slide 1 (index=1)
            setAnimated(false);
            setIndex(1);
        }

        busy.current = false; //unlock
    }, [index]);

    const realIndex = ((index-1) % TOTAL + TOTAL) % TOTAL;
    //index = 1->0 , index= 2->1, index= 3->2, index= 4(clone)->0
    return(
        <div className='relative w-full h-[78vh] overflow-hidden'>

            {/* The long horizontal strip conatting ALL slides */}
            <div className='flex h-full'
                 style = {{
                     width: `${TRACK_LEN * 100}%`, //5 slides x 100% = 500% wide
                     transform: `translateX(-${(index/TRACK_LEN) * 100}%)`,
                     //index =1->move left by (1/5)*100 = 20% ->shows track[1] (real slide 1)
                     //index =2->move left by (2/5)*100 = 40% ->shows track[2] (real slide 2)
                     transition: animated ? "transform 420ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                     willChange: "transform",
                 }}
                 onTransitionEnd={handleTransitionEnd}
            >
                {track.map((slide, i) => {
                    const isActive = i === index;
                    return(
                        <div key={1}
                             className='relative h-full flex-shrink-0 overflow-hidden'
                             style={{width: `${100/TRACK_LEN}%`}}
                        >
                            { /* Image zooms slowly on the active slide -KEN BURNS EFFECT */}
                            <img src={slide.image}
                                 alt="adventure"
                                 className='w-full h-full object-cover'
                                 style={isActive ? {animation : "kenBurns 6s ease-in-out forwards"}
                                                 : {tranform : "scale(1)"} //inactive slides stay at normal scale
                                    }/>
                            {/* Dark gradient overlay - makes text readable */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${slide.overlay}`} />

                            {/* Text block - key changes every slide change so animations REPLAY */}
                            <div key={`text-${i}-${index}`}
                                 className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>

                                {/* Small tag line */}
                                <p className='text-cyan-300 text-sm font-semibold tracking-[0.35em] uppercase mb-2'
                                   style={isActive ? {animation: textAnims.tag} : {opacity:0}}>
                                    {slide.tag}
                                </p>

                                {/* Big title */}
                                <h1 className='text-white text-5xl md:text-7xl drop-shadow-lg'
                                    style={{
                                        fontFamily: "'Bebas Neue', cursive",
                                        animation: isActive ? textAnims.title : undefined,
                                        opacity: isActive ? undefined : 0,
                                    }}>
                                        {slide.title}
                                </h1>

                                {/* Subtitle */}
                                <p className='text-slate-200 mt-4 text-lg max-w-xl'
                                   style={isActive ? {animation : textAnims.sub} : {opacity:0}}>
                                    {slide.sub}
                                </p>

                                {/* CTA BUTTON */}
                                <button className='mt-8 px-8 py-3 bg-cyan-500 hover:bg-black text-white font-bold text-sm tracking-widest uppercase rounded-full transition-colors duration-300 hover:scale-105 active:scale-95'
                                        style={isActive ? {animation: `${textAnims.btn}, btnPulse 2.5s ease 1.2s infinite`}
                                                        : {opacity : 0}
                                            }>
                                    Explore Packages
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* LEFT Arrow */}
            <button onClick={prev} aria-label='Previous'
                    className='absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transitions-colors'>
                    <FiChevronLeft size={32} />
            </button>

            {/* RIGHT ARROW */}
            <button onClick={next} aria-label='Next'
                    className='absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transitions-colors'>
                    <FiChevronRight size={32} />
            </button>

            {/* DOt indicators */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                 {slides.map((_,i) => (
                    <button key={i}
                            onClick={()=>{
                                if(busy.current) return;
                                busy.current = true;
                                setAnimated(true);
                                setIndex(i+1); //i+1 because track[0] is a clone
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${i === realIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/50"}`} />
                 ))}
            </div>
        </div>
    );
}

export default HeroSlider;
