import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { IconType } from "react-icons";

export interface SocialLink {
  id: number;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "https://www.facebook.com/tahmid.khan.35762241",
    icon: FaFacebook,
  },
  {
    id: 2,
    href: "https://github.com/tahmid-khan-hub",
    icon: FaGithub,
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/tahmid-khan-/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    href: "https://codeforces.com/profile/Tahmid.bd",
    icon: SiCodeforces,
  },
  {
    id: 5,
    href: "https://www.codechef.com/users/YOUR_USERNAME",
    icon: SiCodechef,
  },
];
