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
  { name: "ServicePage", url: "/servicepage" },
  { name: "Blogs", url: "/blogsPage" },
  { name: "FAQs", url: "/FAQs" },
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

export const BlogsSectiondetails = [
  {
    image: "./src/assets/images/pacakge.jpg",
    head: "How To Pack Fragile Items for Moving?",
    text: "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....",
  },
  {
    image: "./src/assets/images/place-order.jpg",
    head: "How To Pack Fragile Items for Moving?",
    text: "With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...",
  },
  {
    image: "./src/assets/images/decultter.jpg",
    head: "How To Pack Fragile Items for Moving?",
    text: "Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..",
  },
];

export const quicklinklist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "About",
  },

  {
    name: "Service",
    url: "About",
  },

  {
    name: "Become a Driver",
    url: "BookYourServices",
  },

  {
    name: "Blog",
    url: "#Blogs",
  },
  
];

export const smallprint = [
  "Terms Of Service",
  "Privacy & Policies",
  "Movers Conduct Policy",
  "Damaged or Missing Items Policy",
  "How Pay Works",
];

export const AboutCardList = [
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

export const DoBestDetails = [
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

export const Runningline = [
  "Stress-Free Experience",
  "Professional & Friendly Team",
  "Safety First",
  "On-Time Delivery",
  "Transparent Pricing",
];

export const WhyChooseOurSevicesDetails = [
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
