import { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export interface ContactLinks {
    id: number;
    href: string;
    icon: IconType;
}

export const contactLinks: ContactLinks[] = [
    {
        id: 1,
        href: "https://www.facebook.com/tahmid.khan.35762241",
        icon: FaFacebook,
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/tahmid-khan-/",
        icon: FaLinkedin,
    },
    {
        id: 3,
        href: "https://github.com/tahmid-khan-hub",
        icon: FaGithub,
    },
]