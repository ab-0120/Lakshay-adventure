import raftingImg from "../assets/slider/raftingImg4.jpg";

// import more images as you add them

 
export const popularPackages = [
  {
    id: "rafting-16km",
    name: "River Rafting — Shivpuri",
    tagline: "The most popular stretch on the Ganges",
    image: raftingImg,
    price: 1500,
    priceNote: "₹1,500/person",
    duration: "2.5 – 3 hrs",
    difficulty: "moderate",
    badge: "Most Popular",
    // matches bookingServices id so Book Now can open modal
    serviceId: "river-rafting",
    packageLabel: "Shivpuri → Nim Beach · 16 km",
    timings: ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"],
    minPersons: 2,
    maxPersons: 20,
    emoji: "🌊",
  },
  {
    id: "rafting-36km",
    name: "River Rafting — Kaudiyala",
    tagline: "The ultimate full-day Grade IV–V expedition",
    image: raftingImg,
    price: 3500,
    priceNote: "₹3,500/person",
    duration: "4.5 – 5 hrs",
    difficulty: "difficult",
    badge: "Thrill Seekers",
    serviceId: "river-rafting",
    packageLabel: "Kaudiyala → Nim Beach · 36 km",
    timings: ["07:00 AM", "08:00 AM"],
    minPersons: 2,
    maxPersons: 20,
    emoji: "🌊",
  },
];