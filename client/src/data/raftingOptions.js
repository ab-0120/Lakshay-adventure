// All Ganges rafting stretches end at Nim Beach (NIM Beach), Rishikesh.
// timing: "morning" | "evening" | "both"
// difficulty maps to the site colour scheme: easy=green, moderate=amber, difficult=red


export const raftingOptions = [
  {
    id: 1,
    from: "Brahmapuri",
    to: "Nim Beach",
    distance: "9 km",
    grade: "Grade I – II",
    difficulty: "easy",
    duration: "1 – 1.5 hrs",
    price: 600,
    timing: "both",
    days: "All days (Mon – Sun)",
    rapids: ["Body Surfing", "Black Money", "Three Blind Mice"],
    description:
      "The perfect introduction to white water rafting. Gentle rapids and calm float stretches make this ideal for first-timers, families and children.",
  },
  {
    id: 2,
    from: "Club House",
    to: "Nim Beach",
    distance: "12 km",
    grade: "Grade II – III",
    difficulty: "moderate",
    duration: "1.5 – 2 hrs",
    price: 1000,
    timing: "both",
    days: "All days (Mon – Sun)",
    rapids: ["Initiation", "Double Trouble", "Body Surfing", "Black Money"],
    description:
      "A step up in thrill with a good mix of rapids and scenic gorges. Popular among groups looking for a short but exciting ride.",
  },
  {
    id: 3,
    from: "Shivpuri",
    to: "Nim Beach",
    distance: "16 km",
    grade: "Grade III – IV",
    difficulty: "moderate",
    duration: "2.5 – 3 hrs",
    price: 1500,
    timing: "both",
    days: "All days (Mon – Sun)",
    rapids: ["Roller Coaster", "Golf Course", "Club House", "Double Trouble"],
    description:
      "The most popular stretch on the Ganges. Punchy Grade III–IV rapids, a cliff-jump stop and a beach break — the complete Rishikesh rafting experience.",
  },
  {
    id: 4,
    from: "Marine Drive",
    to: "Nim Beach",
    distance: "24 km",
    grade: "Grade III – IV",
    difficulty: "difficult",
    duration: "3.5 – 4 hrs",
    price: 2000,
    timing: "morning",
    days: "All days (Mon – Sun)",
    rapids: ["Three Blind Mice", "Cross Fire", "Roller Coaster", "Golf Course", "Club House"],
    description:
      "A longer expedition with bigger volume rapids and remote canyon scenery. Recommended for those with some prior rafting experience.",
  },
  {
    id: 5,
    from: "Kaudiyala",
    to: "Nim Beach",
    distance: "36 km",
    grade: "Grade IV – V",
    difficulty: "difficult",
    duration: "4.5 – 5 hrs",
    price: 3500,
    timing: "morning",
    days: "Tue, Thu, Sat & Sun",
    rapids: ["The Wall", "Daniel's Dip", "Three Blind Mice", "Cross Fire", "Golf Course"],
    description:
      "The ultimate full-day adventure and the longest commercial stretch. Powerful Grade IV–V rapids for seasoned, thrill-seeking rafters only.",
  },
];