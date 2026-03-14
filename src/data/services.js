import { Scissors as ScissorsIcon, Droplet, Sparkles } from "lucide-react";
import {
    FaGripfire,
    FaShower,
} from "react-icons/fa";
import { GiBeard, GiLaurelCrown } from "react-icons/gi"
import { RxScissors } from "react-icons/rx";
import { IoColorPaletteSharp } from "react-icons/io5";
import hair from '../assets/gallery/haircut_after.png'
import beard from '../assets/gallery/beard_after.png'
import vip from '../assets/gallery/vip_after.png' 
import towel from '../assets/gallery/towel.jpeg'
import wash from '../assets/gallery/wash.jpeg'
import color from '../assets/gallery/color.jpeg'

export const services = [
    {
    title: "Haircut & Styling",
    price: "$25",
    description: "Precision haircut and professional styling tailored to your look.",
    icon: <RxScissors size={28} className="text-primary" />,
    image: hair,
    },
    {
    title: "Beard Grooming",
    price: "$18",
    description: "Expert beard trimming, shaping, and conditioning.",
    icon: <GiBeard size={28} className="text-primary" />,
    image: beard,
    },
    {
    title: "Hot Towel Shave",
    price: "$20",
    description: "Traditional razor shave with hot towel and soothing finish.",
    icon: <FaGripfire size={28} className="text-primary" />,
    image: towel,
    },
    {
    title: "Hair Wash & Scalp Care",
    price: "$15",
    description: "Refreshing hair wash with premium shampoo and scalp massage.",
    icon: <FaShower size={28} className="text-primary" />,
    image: wash,
    },
    {
    title: "Hair Coloring",
    price: "$45",
    description: "Professional hair coloring and modern styling techniques.",
    icon: <IoColorPaletteSharp size={28} className="text-primary" />,
    image: color,
    },
    {
    title: "VIP Grooming Package",
    price: "$60",
    description: "Complete luxury grooming experience with haircut, shave and massage.",
    icon: <GiLaurelCrown size={28} className="text-primary" />,
    image: vip,
    }
];