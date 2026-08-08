import {
  FaWater,
  FaCampground,
  FaHiking,
  FaMotorcycle,
  FaMapMarkedAlt,
  FaWalking,
  FaTaxi,
  FaHotel,
  FaTicketAlt,
  FaPrayingHands,
  FaTree,
} from "react-icons/fa";

// Single source of truth — navbar, footer and the services section all read this.

export const services = [
  {
    slug: "river-rafting",
    name: "River Rafting",
    icon: FaWater,
    blurb: "Conquer Grade III–IV rapids on the holy Ganges with certified guides.",
  },
  {
    slug: "camping",
    name: "Camping",
    icon: FaCampground,
    blurb: "Riverside Swiss tents, bonfires and starry Himalayan nights.",
  },
  {
    slug: "trekking",
    name: "Trekking",
    icon: FaHiking,
    blurb: "Guided Himalayan treks, from easy trails to summit climbs.",
  },
  {
    slug: "bike-on-rent",
    name: "Bike on Rent",
    icon: FaMotorcycle,
    blurb: "Royal Enfields & gear for the perfect mountain road trip.",
  },
  {
    slug: "day-trips",
    name: "Day Trips",
    icon: FaMapMarkedAlt,
    blurb: "Curated one-day escapes to waterfalls, temples and viewpoints.",
  },
  {
    slug: "rishikesh-on-foot",
    name: "Rishikesh on Foot",
    icon: FaWalking,
    blurb: "Guided walking tours through ghats, cafés and hidden lanes.",
  },
  {
    slug: "taxi-services",
    name: "Taxi Services",
    icon: FaTaxi,
    blurb: "Reliable cabs & airport transfers across Uttarakhand.",
  },
  {
    slug: "hotel-booking",
    name: "Hotel Booking",
    icon: FaHotel,
    blurb: "Handpicked stays, from budget hostels to riverside resorts.",
  },
  {
    slug: "ticket-booking",
    name: "Ticket Booking",
    icon: FaTicketAlt,
    blurb: "Hassle-free bus, train and activity ticket reservations.",
  },
  {
    slug: "ganga-aarti",
    name: "Ganga Aarti Point",
    icon: FaPrayingHands,
    blurb: "Reserved viewing & guidance for the divine evening Ganga Aarti.",
  },
  {
    slug: "jungle-safari",
    name: "Jungle Safari",
    icon: FaTree,
    blurb: "Wildlife safaris into the forests of Rajaji National Park.",
  },
];