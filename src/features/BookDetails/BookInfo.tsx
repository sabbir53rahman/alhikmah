import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa6";
import DownloadButtonWithModal from "./DownloadButtonWithModal";

function BookInfo() {
    return (
        <>
            <div className="mx-auto container pt-[50px] md:pt-[100px]">
                <div className="rounded-lg bg-white p-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Left Column - Book Cover */}
                        <div className="flex flex-col items-center">
                            <Image height={400} width={400} quality={100} src="/images/hadis1.png" alt="Book Cover" className="w-full max-w-md rounded-lg shadow-md" />
                            <DownloadButtonWithModal/>
                        </div>

                        {/* Right Column - Book Details */}
                        <div className="space-y-10">
                            <h2 className="text-[#3B4856] text-[24px] lg:text-[36px]">আর-রাহিকুল মাখতুম</h2>

                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <span className="text-[#3B4856] font-semibold">লেখক :</span>
                                    <span className="text-[#838383]  ">সাফিউর রহমান মুবারকপুরী (রহ.)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#3B4856] font-semibold">প্রকাশনী :</span>
                                    <span className="text-[#838383]  ">সমকালীন প্রকাশন</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#3B4856] font-semibold">বিষয় :</span>
                                    <span className="text-[#838383]  ">সীরাতে রাসূল (সা.)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#3B4856] font-semibold">মোট পৃষ্ঠায় :</span>
                                    <span className="text-[#838383]  ">৬৯৮</span>
                                </div>
                            </div>

                            <p className="my-4 leading-[26px] text-[14px] text-justify text-[#3B4856]">
                                মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের জীবনী নিয়ে লিখিত একটি মহান গ্রন্থ।
                                মানবজাতির সর্বশ্রেষ্ঠ আদর্শ মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের জীবনের প্রতিটি
                                অধ্যায়কে লেখক অত্যন্ত সাবলীল ভাষায়, ব্যাপক তথ্য উপাত্ত সহ তুলে ধরেছেন। এটি একটি
                                এনসাইক্লোপিডিয়া—যাই নিজেকে প্রস্তুত করে নিতে সহায়তা করবে। <br />
                                বইটি এমনভাবে লেখা হয়েছে যে, পাঠকের মনে হবে নবিজীবনের আনন্দ-বেদনার সফরে সঙ্গী হয়ে রয়েছেন তিনিও। তায়েফ, উহুদ ও খন্দকের বেদনায় ভারাক্রান্ত হবে তার মন। বদর, মক্কা ও আরব জয়ের আনন্দে উল্লসিত হবে তার হৃদয়।
                            </p>

                            <div className="my-8">
                                <h3 className="mb-2 text-lg text-[#3B4856]">শেয়ার করুন</h3>
                                <p className="text-[#3B4856] my-6">সম্পূর্ণ  বইটি শেয়ার করুন। পাশে থাকুন। </p>
                                <div className="flex gap-[20px] xl:gap-[35px] ">
                                    <a href="#" className="text-[#1a4977] hover:text-[#1F618D] flex items-center justify-center p-4 xl:p-6 bg-[#F7F7F7] rounded-[8px] shadow-sm">
                                        <FaFacebookF  className="size-[20px] xl:size-[40px]" />
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#1F618D] flex items-center justify-center p-4 xl:p-6 bg-[#F7F7F7] rounded-[8px] shadow-sm">
                                        <FaInstagram className="size-[20px] xl:size-[40px]"/>
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#1F618D] flex items-center justify-center p-4 xl:p-6 bg-[#F7F7F7] rounded-[8px] shadow-sm">
                                        <FaTwitter className="size-[20px] xl:size-[40px]"  />
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#1F618D] flex items-center justify-center p-4 xl:p-6 bg-[#F7F7F7] rounded-[8px] shadow-sm">
                                        <FaPinterestP className="size-[20px] xl:size-[40px]"  />
                                    </a>
                                    <button className="text-[#1a4977] hover:text-[#1F618D] flex items-center justify-center p-4 xl:p-6 bg-[#F7F7F7] rounded-[8px] shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="size-[20px] xl:size-[40px]" 
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/images/dynamic-bg.png')] w-full h-24 bg-cover text-white text-[40px] lg:w-[85%] mx-auto font-semibold my-16 flex justify-center items-center rounded-md">
                বই এর সূচিপত্র
                </div>
            </div>
        </>
    );
}

export default BookInfo;
