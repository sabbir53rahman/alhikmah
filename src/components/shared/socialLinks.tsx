import React from "react";

import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const socialLinks = [
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <LinkedinIcon />, href: "#", label: "Linkedin" },
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
];

const SocialLinks = () => {
    return (
        <div className="flex gap-3">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1C5880] text-white"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
