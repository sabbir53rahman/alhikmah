import React from "react";

import { Books } from "@/data/Books";

import { DynamicBooks } from "./DynamicBooks";
import Image from "next/image";

const WishlistBooks = () => {
    return (
        <div className="relative mx-5 xl_padding">
            <DynamicBooks
                books={Books}
                heading1={"উইশলিস্ট "}
                heading2={"সমূহ"}
                highlight={"বই"}
                description={
                    "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                }
            />
            {/* backgorunds */}
            <div className="bg-shade  lg:!size-[170px] -top-10 left-0 xl:-left-10"></div>
            <div className="bg-shade lg:!size-[230px] lg:!blur-[200px] -bottom-10 left-0 xl:-left-10"></div>
            <div className="bg-shade  lg:!size-[230px] lg:!blur-[200px]  bottom-0 md:top-[30%] right-[10%]"></div>

            <Image className="absolute  top-[2%] right-[4%] z-20 rotate-[60deg]" src="/images/bgStar.png" height={28} width={28} alt="star"></Image> 
            <Image className="absolute  top-[2%] right-[4%] z-20 rotate-[60deg]" src="/images/bgStar.png" height={28} width={28} alt="star"></Image> 
            <Image className="absolute bottom-10 left-[25%] z-20 rotate-[60deg]" src="/images/bgStar.png" height={15} width={15} alt="star"></Image>/
        </div>
    );
};

export default WishlistBooks;
