// ─────────────────────────────────────────────────────────────
// CENTRAL STORAGE for all gallery photos — AUTOMATIC.
//
// To ADD photos: just drop image files into src/assets/gallery/
// (.jpg .jpeg .png .webp). They appear EVERYWHERE automatically —
// home mosaic, lightbox & rafting banner. No code changes needed.
//
// • Order = filename order. Prefix with numbers (01-, 02-, …)
// to control the sequence.
// • Alt text = auto-generated from the filename, so name files
// meaningfully, e.g. ganges-rafting-sunset.jpg
// ─────────────────────────────────────────────────────────────

// Vite scans the folder at build time and imports every matching file.
// (The pattern must be a plain string literal — that's a Vite requirement.)
const modules = import.meta.glob(
    "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, import: "default" }
);

// "../assets/gallery/01-ganges-sunset.jpg" -> "ganges sunset"
function altFromPath(path) {
    const name = path.split("/").pop().replace(/\.[^.]+$/, ""); // filename, no extension
    return (
        name
            .replace(/^\d+[-_]?/, "") // drop a leading order-number like "01-"
            .replace(/[-_]+/g, " ") // dashes/underscores -> spaces
            .trim() || "Lakshay Adventure photo"
    );
}

export const galleryPhotos = Object.keys(modules)
    // natural sort so "2" comes before "10"
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path, i) => ({
        id: i + 1,
        src: modules[path],
        alt: altFromPath(path),
        caption: "",
    }));