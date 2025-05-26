import React from "react";

const links = [
    { text: "রুম", href: "#" },
    { text: "প্রয়োজন", href: "#" },
    { text: "সার্টিফাই", href: "#" },
    { text: "প্রাইভেসি পলিসি", href: "#" },
];

const ImportantLinks = () => {
    return (
        <div className="space-y-3 lg:pl-[100px]">
            <h3 className="mb-4 text-[24px] font-semibold text-white">প্রয়োজনীয় লিংক</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className="pb-[20px] text-[18px] text-white transition-colors hover:text-gray-300 md:text-[20px]"
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImportantLinks;
