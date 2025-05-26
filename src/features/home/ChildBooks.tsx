import React from "react";

import { Books } from "@/data/Books";
import { DynamicBooks } from "@/features/home/DynamicBooks";
import Image from "next/image";

function ChildBooks() {
    return (
        <div className="relative xl_padding">
            <DynamicBooks
                books={Books}
                heading1={"শিশু কিশোরদের জন্য "}
                heading2={" বই"}
                highlight={"ইসলামিক"}
                description={
                    "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                }
            />

            {/* backgrounds */}
                <div className="bg-shade  lg:!size-[200px] top-10 left-0 xl:left-10"></div>
                <div className="bg-shade  lg:!size-[200px] bottom-10 right-[5%] xl:right-[10%]"></div>

                <Image className="bg-star lg:hidden top-[22%]  right-[5%]" src="/images/bgStar.png" height={20} width={20} alt="star"></Image>
                <Image className="bg-star hidden lg:block top-[5%] lg:top-[0%] right-[10%]" src="/images/bgStar.png" height={40} width={40} alt="star"></Image>
                <Image className="bg-star top-[2%] left-[20%]" src="/images/bgStar.png" height={22} width={22} alt="star"></Image>
                <Image className="bg-star hidden lg:block bottom-[10%] left-[60%]" src="/images/bgStar.png" height={15} width={15} alt="star"></Image>
                <Image className="bg-star bottom-0 left-[5%] " src="/images/bgStar.png" height={25} width={25} alt="star"></Image>

        </div>
    );
}

export default ChildBooks;
