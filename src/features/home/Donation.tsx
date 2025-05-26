"use client";
import PrimaryButton from "@/components/shared/PrimaryButton";
import donetionBg from "../../../public/images/donetionBg.png";
import React, { useState } from "react";
import Image from "next/image";

const Donation: React.FC = () => {
    const [ammount, setAmmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted ammount:", ammount);
    };

    return (
        <div
            className="container relative bg-gradient-to-r from-[#007CE3] to-[#072253] overflow-hidden lg:h-[328px] mx-auto mt-[100px] lg:mt-[-150px] lg:mb-[100px]  flex min-h-[300px] items-center rounded-[12px] p-4 lg:py-[90px] z-20"
        >
             <div className="absolute inset-0  rounded-[12px] z-0">
                <div>
                    <Image src={donetionBg} alt="" className="w-full" />
                </div>
             </div>


            <div className="mx-auto z-20 flex w-full max-w-[1000px] flex-col items-center justify-between lg:flex-row">
                <div className="mb-[20px] text-center lg:mb-0 lg:text-left">
                    <h1 className="text-[32px] font-semibold leading-[42px] text-white sm:leading-[50px] md:text-[38px] md:leading-[45px] lg:leading-[62px] lg:text-[48px]">
                        ডোনেশন করে <br />
                        <span className="text-[#F3F630]">সহযোগিতা</span> করুন
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 lg:mt-0 lg:w-[400px]">
                    <input
                        type="number"
                        value={ammount}
                        onChange={(e) => setAmmount(e.target.value)}
                        placeholder="এমাউন্ট লিখুন"
                        className="w-full rounded bg-[#F7F7F7] px-4 py-3 text-white placeholder-[#838383] focus:outline-none  focus:ring-none"
                    />
                    <PrimaryButton text="ডোনেট করুন" className="lg:self-start self-center"/>
                </form>
            </div>
        </div>
    );
};

export default Donation;
