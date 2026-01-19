import { IconType } from "react-icons";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export interface ContactInfo {
    id: number;
    icon: IconType;
    heading: string;
    info: string;
}

export const contactInfo: ContactInfo[] = [
    {
        id: 1,
        icon: FaMapMarkerAlt,
        heading: "Location",
        info: "Sylhet, Bangladesh"
    },
    {
        id: 2,
        icon: FaEnvelope,
        heading: "Email",
        info: "tahmidkhan0011@gmail.com"
    },
    {
        id: 3,
        icon: FaPhoneAlt,
        heading: "Phone",
        info: "+8801610627131"
    },
]