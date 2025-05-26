"use client";

import PrimaryButton from "@/components/shared/PrimaryButton";
import donetionBg from "../../../public/images/donetionBg.png";
import Image from "next/image";
import React, { useState } from "react";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Submitted email:", email);
    };

    return (
        <div
            className="container relative bg-gradient-to-r from-[#007CE3] to-[#072253] overflow-hidden lg:h-[328px] mx-auto my-[80px] lg:mt-[-150px] lg:mb-[100px]  flex min-h-[300px] items-center rounded-[12px] p-4 lg:py-[90px] z-20"
        >
             <div className="absolute inset-0  rounded-[12px] z-0">
                <div>
                    <Image src={donetionBg} alt="" className="w-full" />
                </div>
             </div>
            <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-between lg:flex-row">
                <div className="mb-6 text-center lg:mb-0 lg:text-left">
                    <h1 className="text-[32px] font-semibold leading-[42px] text-white sm:leading-[50px] md:text-[48px] md:leading-[62px] lg:text-[48px]">
                        নিউজলেটার <br />
                        <span className="text-[#F3F630]">সাবস্ক্রাইব</span> করুন
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 lg:mt-0 lg:w-[400px]">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ইমেইল ঠিকানা লিখুন"
                        className="w-full rounded bg-[#F7F7F7] px-4 py-3 text-white placeholder-[#838383] focus:outline-none  focus:ring-none"
                    />
                    <PrimaryButton text="সাবস্ক্রাইব করুন" className="lg:self-start self-center"/>
                </form>

                {/* <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col space-y-4 lg:mt-0 lg:w-[400px]">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ইমেইল ঠিকানা লিখুন"
                        className="w-full rounded bg-[#F7F7F7] px-4 py-3 text-white placeholder-[#838383] focus:outline-none  focus:ring-none"
                    />
                    <PrimaryButton text="সাবস্ক্রাইব করুন" className="self-start"/>
                </form> */}
            </div>
        </div>
    );
};

export default NewsletterForm;
