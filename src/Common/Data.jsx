import {
  AffordablePrice,
  Calendar,
  Certify,
  Coin,
  Customer1,
  Customer2,
  Customer3,
  Delivery,
  Experteam,
  Furniture,
  Handbag,
  Handshake,
  Houseservice,
  Like,
  Likestare,
  Officemove,
  Pianotransport,
  Rightarrow,
  Saftey,
  Storagetransport,
  Trusticon,
  Vanservice,
} from "./Icons";

export const serviceslist = [
  {
    icon: <Vanservice />,
    arrow: <Rightarrow />,
    url: "manvanservices",
    head: "Man & Van Services",
    subhead:
      "A convenient and flexible moving solution typically offered by a single professional or a small team with a van",
  },
  {
    icon: <Officemove />,
    arrow: <Rightarrow />,
    head: "House Removals",
    subhead:
      "House removals refer to the process of moving (packing, loading, transporting, unloading) from one residence to another.",
  },
  {
    icon: <Furniture />,
    arrow: <Rightarrow />,
    head: "Furniture & Large Items",
    subhead:
      "Furniture delivery is a service focused on transporting furniture items from sellers or retailers to customers homes.",
  },
  {
    icon: <Pianotransport />,
    arrow: <Rightarrow />,
    head: "Piano Transport",
    subhead:
      "Piano transport involves the specialized and meticulous relocation of pianos from one location to another.",
  },
  {
    icon: <Storagetransport />,
    arrow: <Rightarrow />,
    head: "Storage Removals",
    subhead:
      "Storage removal refers to the process of relocating items to or from a storage facility. This service is designed to assist",
  },
  {
    icon: <Officemove />,
    arrow: <Rightarrow />,
    head: "Office Move",
    subhead:
      "Office move is the comprehensive process of moving a business from one physical location to another.",
  },
];

export const worklist = [
  {
    icon: <Handbag />,
    step: "Step 1",
    head: "Get a Quote",
    subhead: "Input your details for a tailored quotation",
  },
  {
    icon: <Calendar />,
    step: "Step 2",
    head: "Schedule",
    subhead: "Confirm a delivery date and time",
  },
  {
    icon: <Delivery />,
    step: "Step 3",
    head: "Delivery",
    subhead: "We’ll do all the heavy lifting",
  },
  {
    icon: <Like />,
    step: "Step 4",
    head: "Sit Back",
    subhead: "Enjoy your new space, stress-free",
  },
];

export const trustarrylist = [
  {
    icon: <Trusticon />,

    head: "Many Years of Experience",
    subhead: "We are an established Company",
  },
  {
    icon: <Coin />,

    head: "Fixed Prices",
    subhead: "No hidden fees, transparent prices",
  },
  {
    icon: <Handshake />,

    head: "Trustworthy",
    subhead: "We are insured and lincensed",
  },
  {
    icon: <Likestare />,
    head: "5-Star Rating",
    subhead: "Rated 4.9 on Trustpilot",
  },
];

export const customerlist = [
  {
    image: <Customer1 />,
    name: "Zachary John",
    role: "Regular Customar",
    text: "“From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.”",
  },
  {
    image: <Customer2 />,
    name: "Gail Amethyst",
    role: "Regular Customar",
    text: "““From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.””",
  },
  {
    image: <Customer3 />,
    name: "Scott William",
    role: "Regular Customar",
    text: "“From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.”",
  },
];

export const navlist = [
  {
    name: "HOME",
    url: "/",
  },
  { name: "About", url: "/about" },
  { name: "Service", url: "/service" },
  { name: "blogs", url: "/blogsPage" },
  { name: "FAQs", url: "/FAQs" },
  { name: "Data list ", url: "/show-data" },
];

export const faqslist = [
  {
    question: " What services do you offer?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: " What can I expect during a therapy session?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: " Are your cleaners insured and bonded?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: "Are your cleaners insured and bonded?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
];

export const blogcarddetail = [
  {
    slug: "How-To-Pack-Fragile-Items",
    image: "./src/assets/images/pacakge.jpg",
    head: "How To Pack Fragile Items for Moving?",
    text: "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....",
    data: {
      head: "How To Pack Fragile Items for Moving?",
    },
  },
  {
    slug: "How-to-Make-a-Booking",
    image: "./src/assets/images/place-order.jpg",
    head: "How to Make a Booking with Us?",
    text: "With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...",
    data: {
      head: "How to Make a Booking with Us?",
    },
  },
  {
    slug: "How-to-Declutter-Before-Moving",
    image: "./src/assets/images/decultter.jpg",
    head: "How to Declutter Before Moving?",
    text: "Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..",
    data: {
      head: "How to Declutter Before Moving?",
    },
  },
  {
    slug: "know-that-stressful",
    image: "./src/assets/images/pacakge.jpg",
    head: "Checklist to Follow While Packing for Your Next Move",
    text: "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....",
    data: {
      head: " know-that-stressful",
    },
  },
  {
    slug: "know-that-booking",
    image: "./src/assets/images/place-order.jpg",
    head: "How Much Are House Removal Costs in 2025?",
    text: "With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...",
    data: {
      head: " next change heading",
    },
  },
  {
    slug: "know-that-excitement",
    image: "./src/assets/images/decultter.jpg",
    head: "The Benefits of Hiring a Moving Company",
    text: "Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..",
    data: {
      head: " next change heading",
    },
  },
  {
    slug: "know-that-delicate",
    image: "./src/assets/images/pacakge.jpg",
    head: "How to Choose a Moving Company?",
    text: "Moving can be nerve-wracking, and selecting the right company is crucial, considering it involves the person's home or business. Spending considerable time ....",
    data: {
      head: " next change heading",
    },
  },
];

export const quicklinklist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },

  {
    name: "Service",
    url: "/service",
  },

  {
    name: "Become a Driver",
    url: "/becomedriver",
  },

  {
    name: "Blog",
    url: "/blogsPage",
  },
];

export const smallprint = [
  "Terms Of Service",
  "Privacy & Policies",
  "Movers Conduct Policy",
  "Damaged or Missing Items Policy",
  "How Pay Works",
];

export const aboutcardList = [
  {
    icon: <AffordablePrice />,
    head: "Affordable Price",
    text: "we offer competitive and transparent pricing to fit your budget. No hidden fees, no surprises — just affordable rates.",
  },
  {
    icon: <Experteam />,
    head: "Expert Team",
    text: "From packing delicate items to lifting heavy furniture, our experts ensure every step of your move is handled flawlessly.",
  },
  {
    icon: <Saftey />,
    head: "Safety & Protection",
    text: "We know your possessions are valuable both financially and emotionally. That’s why we take extra precautions to their safety.",
  },
  {
    icon: <Certify />,
    head: "100% Certified",
    text: "Our certifications reflect our commitment to quality, reliability, and industry standards, so you can trust us",
  },
];

export const dobestdetails = [
  {
    icon: <Houseservice />,
    head: "Residential Moves",
    text: "Helping families relocate without stress.",
  },
  {
    icon: <Officemove />,
    head: "Office Relocations",
    text: "Smooth transitions with minimal downtime.",
  },
  {
    icon: <Furniture />,
    head: "Furniture Handling",
    text: "Special care for fragile, heavy, or oversized items.",
  },
  {
    icon: <Houseservice />,
    head: "Long-Distance Moves",
    text: "Reliable transportation wherever you’re headed.",
  },
];

export const runningline = [
  "Stress-Free Experience",
  "Professional & Friendly Team",
  "Safety First",
  "On-Time Delivery",
  "Transparent Pricing",
];

export const whychooseoursevicesdetails = [
  {
    icon: <AffordablePrice />,
    head: "Affordable & Transparent Pricing",
    text: "Moving services starting from just £25.",
  },
  {
    icon: <Experteam />,
    head: "Professional Movers & Drivers",
    text: "Experienced teams handle every item",
  },
  {
    icon: <Saftey />,
    head: "Hassle-Free Experience",
    text: "We load, transport, and unload you do nothing.",
  },
  {
    icon: <AffordablePrice />,
    head: "Local & Nationwide Coverage",
    text: "Whether around the corner or across the UK",
  },
  {
    icon: <Calendar />,
    head: "Flexible Booking Options",
    text: "Service to suit your schedule.",
  },
];

export const servicesIncludelist = [
  {
    icon: <Houseservice />,
    head: "Home & Office Removals",
    subhead:
      "Relocating your home or workspace? We ensure a smooth, secure, and organized move with minimal disruption.",
  },
  {
    icon: <Vanservice />,
    head: "Student Moves",
    subhead:
      "Perfect for students relocating between accommodations. Budget-friendly and convenient solutions for smaller moves.",
  },
  {
    icon: <Furniture />,
    head: "Furniture & Large Itemss",
    subhead:
      "Need to transport bulky furniture or oversized parcels? Our vans are fully equipped to handle heavy and delicate items safely.",
  },
  {
    icon: <Furniture />,
    head: "Single-Item & Bulk Transport",
    subhead:
      "From a single sofa to an entire flat, we provide customized transport solutions based on your needs.",
  },
];

export const signupinputdeatails = [
  {
    lable: "First Name",
    type: "text",
  },

  {
    lable: "Surname *",
    type: "text",
  },
  {
    lable: "Phone No ",
    type: "number",
  },
  {
    lable: "E-mail *",
    type: "email",
  },
  {
    lable: "Date of Birth *",
    type: "date",
  },

  {
    lable: "Language of preference in english *",
    type: "text",
  },
  {
    lable: "Address *",
    type: "text",
  },

  {
    lable: "Postcode *",
    type: "number",
  },
];

export const additemslist = [
  {
    name: "Bags",
    items: [
     "Large Clothes Storage Bag 90 Litres",
     "Medium Holdall Bag 70 litres",
      "Small Holdall Bag 50 litres",
    ],
  },
  {
    name: "Bathroom",
    items: ["Bathroom Cabinet", "Shower Screen", "Shower Tray"],
  },
  {
    name: "Bedroom Items",
    items: [
      "Bedside",
      "Cot",
      "Double Bed & Mattress",
      "Futon Sofabed",
      "Playhouse",
    ],
  },
  {
    name: "Computer Parts",
    items: ["Desktop Pcs", "Laptop", "PC cabinate"],
  },
  {
    name: "Dining Room",
    items: ["6 Seater Dining Table", "Carver Chair", "French Dresser"],
  },
  {
    name: "Garage & Garden",
    items: ["BBQ", "Playhouse", "Wheelbarrow", "Wicker Chair"],
  },
  {
    name: "Kitchen & Hall",
    items: ["Cooker", "Double Pushchair", "High Chair", "Kitchen Dresser"],
  },
  {
    name: "Living Room",
    items: [
      "Bookcase",
      "Corner Sofa (Five Seater)",
      "Sideboard, small",
      "Small Sofa Bed",
    ],
  },
  {
    name: "Moving Boxes",
    items: [
      "Archive Box approx 40x25x34",
      "Medium Box approx 45x30x30cm",
      "Small Box approx 30x25x34cm",
    ],
  },
  {
    name: "Piano",
    items: ["Baby Grand Piano", "Electric Keyboard"],
  },
  {
    name: "Rucksacks",
    items: ["Large Rucksack 50-60 litres", "Medium Rucksack 35-50 litres"],
  },
  {
    name: "Sofas",
    items: ["Corner Sofa (Five Seater)", "Futon Sofa bed", "Small Sofa Bed"],
  },
  {
    name: "Special Items",
    items: ["Aga Cooker", "Arcade Machine", " Piano, Upright"],
  },
  {
    name: "Suitcases",
    items: ["Archive Box approx 40x25x34", "Medium Suitcase approx 63x41x27cm"],
  },
  {
    name: "Tables",
    items: ["Bedside Table", "Big Table", "Coffee Table"],
  },
  {
    name: "Wardrobes",
    items: [
      "Double Wardrobe",
      "Quad Wardrobe",
      "Single Wardrobe",
      "Triple Wardrobe",
    ],
  },
];

export const loadingtime = [
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
]
