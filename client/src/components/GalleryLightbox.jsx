import { useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { galleryPhotos } from "../data/galleryPhotos";

const oswald = { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem" };

// Full-screen "whole library" overlay.
// Props:
// index -> which photo is currently big (number)
// setIndex-> change the big photo
// onClose -> close the overlay
function GalleryLightbox({ index, setIndex, onClose }) {
    const TOTAL = galleryPhotos.length;

    const prev = useCallback(
        () => setIndex((i) => (i - 1 + TOTAL) % TOTAL),
        [setIndex, TOTAL]
    );
    const next = useCallback(
        () => setIndex((i) => (i + 1) % TOTAL),
        [setIndex, TOTAL]
    );

    // Keyboard: Esc closes, arrows navigate
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        // lock background scroll while open
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose, prev, next]);

    const active = galleryPhotos[index];

    return (
        // Backdrop - clicking it closes
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
            style={{ animation: "lightboxIn 0.25s ease both" }}
        >
            {/* Top bar: counter + close */}
            <div className="flex items-center justify-between px-5 py-4 shrink-0">
                <span className="text-white/70 text-sm" style={oswald}>
                    {index + 1} / {TOTAL}
                </span>
                <button
                    onClick={onClose}
                    aria-label="Close gallery"
                    className="text-white/70 hover:text-white transition-colors"
                >
                    <FiX size={30} />
                </button>
            </div>

            {/* Big image area (stopPropagation so clicks here don't close) */}
            <div
                className="relative flex-1 flex items-center justify-center px-4 min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-2 md:left-6 z-10 text-white/70 hover:text-white
bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
                >
                    <FiChevronLeft size={30} />
                </button>

                <img
                    key={active.id}
                    src={active.src}
                    alt={active.alt}
                    className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
                    style={{ animation: "lightboxIn 0.25s ease both" }}
                />

                <button
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-2 md:right-6 z-10 text-white/70 hover:text-white
bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
                >
                    <FiChevronRight size={30} />
                </button>
            </div>

            {/* Thumbnail strip = the whole library, click any to view */}
            <div
                className="shrink-0 overflow-x-auto px-4 py-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex gap-3 justify-start md:justify-center min-w-min">
                    {galleryPhotos.map((photo, i) => (
                        <button
                            key={photo.id}
                            onClick={() => setIndex(i)}
                            aria-label={`View ${photo.caption || "photo " + (i + 1)}`}
                            className={`shrink-0 h-16 w-24 rounded-md overflow-hidden border-2 transition-all duration-200
${i === index
                                    ? "border-cyan-400 opacity-100 scale-105"
                                    : "border-transparent opacity-50 hover:opacity-100"}`}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GalleryLightbox;