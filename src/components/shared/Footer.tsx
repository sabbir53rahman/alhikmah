import React from "react";

import ContactInfo from "@/components/shared/ContactInfo";
import ImportantLinks from "@/components/shared/ImportantLinks";
import SocialLinks from "@/components/shared/socialLinks";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#007CE3] to-[#072253] pt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-[30px] w-[30px] bg-white md:h-[50px] md:w-[50px]"></div>
                            <h2 className="text-[28px] text-white md:text-[40px]">আল হিকমাহ</h2>
                        </div>
                        <p className="text-[18px] text-[#98B6CB] md:text-[24px]">
                            আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উন্নত উন্নয় থেকে বিশুদ্ধ দ্বীনি সকলের জন্য উন্মুক্ত করে
                            দেয়া।
                        </p>
                        <SocialLinks />
                    </div>

                    {/* Important Links */}
                    <ImportantLinks />

                    {/* Contact Info */}
                    <ContactInfo />
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-[#164564] py-8">
                    <p className="text-center text-gray-400">কপিরাইট © আল-হিকমাহ ২০২৪</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
