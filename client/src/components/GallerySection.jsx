import { useState, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import Reveal from "./Reveal";
import GalleryLightbox from "./GalleryLightbox";
import { galleryPhotos } from "../data/galleryPhotos";

const oswald = { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem" };
const bebas = { fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem" };

// How many tiles the mosaic shows before "View All".
const PREVIEW = 6;

// Deliberately off-balance mosaic: big / wide / tall tiles instead of an even grid.
// Mobile = 2 cols, desktop (md) = 4 cols. (Tuned for 6 tiles.)
const SPAN = [
    "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // big hero
    "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // wide
    "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // small
    "col-span-1 row-span-1 md:col-span-1 md:row-span-2", // tall (desktop)
    "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // wide
    "col-span-2 row-span-1 md:col-span-1 md:row-span-1", // view all
];

const ROTATE_MS = 6000; // each tile swaps to a new photo every 6s

// A single tile that cross-fades through the WHOLE library.
// `start` = which photo it begins on (staggered so tiles differ).
// `delay` = ms offset before it starts rotating (so they don't all flip together).
function RotatingTile({ start, delay, onOpen }) {
    const total = galleryPhotos.length;
    const [active, setActive] = useState(start % total);

    useEffect(() => {
        // Respect users who prefer no motion -> leave the tile static.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let intervalId;
        const timeoutId = setTimeout(() => {
            setActive((a) => (a + 1) % total);
            intervalId = setInterval(() => setActive((a) => (a + 1) % total), ROTATE_MS);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [total, delay]);

    return (
        <button
            onClick={() => onOpen(active)}
            aria-label="Open photo"
            className="group relative h-full w-full overflow-hidden rounded-xl
ring-1 ring-black/5 hover:ring-cyan-500/60
shadow-md hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
        >
            {/* all photos stacked; only the active one is visible -> opacity cross-fade.
wrapper scales on hover so the zoom applies to whichever photo is showing. */}
            <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-110">
                {galleryPhotos.map((p, idx) => (
                    <img
                        key={p.id}
                        src={p.src}
                        alt={p.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
                        style={{ opacity: idx === active ? 1 : 0 }}
                    />
                ))}
            </div>
        </button>
    );
}

function GallerySection() {
    // null = closed. A number = which photo index is open in the lightbox.
    const [openIndex, setOpenIndex] = useState(null);

    const open = (i) => setOpenIndex(i);
    const close = () => setOpenIndex(null);

    const preview = galleryPhotos.slice(0, PREVIEW);
    const hidden = galleryPhotos.length - PREVIEW; // photos not shown in the mosaic

    return (
        <section
            className="relative py-10 md:py-12 px-4 md:px-6 overflow-hidden"
            // Warm cream / sand canvas -> light & distinct from the dark reviews + footer
            style={{
                background: "linear-gradient(180deg, #f7f2ea 0%, #efe6d7 100%)",
            }}
        >
            {/* Heading - tighter margin than before */}
            <Reveal className="text-center mb-6 md:mb-8">
                <p
                    className="text-cyan-600 text-xs font-semibold tracking-[0.3em] uppercase mb-2"
                    style={oswald}
                >
                    Moments
                </p>
                <h2 className="text-slate-900 text-4xl md:text-5xl" style={bebas}>
                    Our Photo Library
                </h2>
                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-cyan-500" />
            </Reveal>

            {/* Asymmetric mosaic - tight gaps so more photos fit */}
            <div
                className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3
auto-rows-[7.5rem] sm:auto-rows-[9rem] lg:auto-rows-[10.5rem]"
            >
                {preview.map((photo, i) => {
                    const isLast = i === preview.length - 1;
                    return (
                        // Reveal = the grid cell; staggered delay gives the "cascade" entrance
                        <Reveal key={photo.id} delay={i * 0.08} className={SPAN[i]}>
                            {isLast ? (
                                // "View All" tile - static photo + overlay, does NOT rotate
                                <button
                                    onClick={() => open(0)}
                                    aria-label="View all photos"
                                    className="group relative h-full w-full overflow-hidden rounded-xl
ring-1 ring-black/5 hover:ring-cyan-500/60
shadow-md hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out
group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/55
flex flex-col items-center justify-center gap-1.5 transition-colors duration-300"
                                    >
                                        <FiImage
                                            size={30}
                                            className="text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <span className="text-white text-2xl leading-none" style={bebas}>
                                            View All
                                        </span>
                                        <span
                                            className="text-slate-300 text-[0.7rem] tracking-widest uppercase"
                                            style={oswald}
                                        >
                                            {hidden > 0 ? `+${hidden} more` : `${galleryPhotos.length} photos`}
                                        </span>
                                    </div>
                                </button>
                            ) : (
                                // Rotating tile - cross-fades to a new photo every 2s
                                <RotatingTile start={i} delay={i * 400} onOpen={open} />
                            )}
                        </Reveal>
                    );
                })}
            </div>

            {/* The full-library overlay (only mounts when a photo is open) */}
            {openIndex !== null && (
                <GalleryLightbox
                    index={openIndex}
                    setIndex={setOpenIndex}
                    onClose={close}
                />
            )}
        </section>
    );
}

export default GallerySection;