import {useRef, useEffect, useState} from 'react';


function Reveal({children, delay=0, className=""}){

    const ref = useRef(null); //points to the div in the DOM
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        if(!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setVisible(true); //fires ONCE when element enters viewport
                    observer.unobserve(el); //stop observing after first trigger
                }
            },
            {threshold: 0.15} //triggers when 15% of the element is visible
        );

        observer.observe(el);
        return () => observer.disconnect(); //cleanup on unmount
    },[]);
    return (
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}
             style={{transitionDelay: `${delay}s`}}>
            {children}
        </div>
    );
}

export default Reveal;