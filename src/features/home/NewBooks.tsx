import React from "react";
import booksSectionBg from "../../../public/images/booksSectionBg.png";
import { Books } from "@/data/Books";
import { DynamicBooks } from "@/features/home/DynamicBooks";
import Image from "next/image";

function NewBooks() {
  return (
    <div
      className="bg-[url('/images/booksSectionBg.png')] relative bg-top bg-cover bg-no-repeat bg-[rgba(255,255,255,0.19)] lg:pb-[150px] xl_padding"
    >
      {/* Content Section */}
      <div className="p-5">
        <DynamicBooks
          books={Books}
          heading1={"নূতন "}
          heading2={" বই সমূহ"}
          highlight={"প্রকাশিত"}
          description={
            "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
          }
        />
      </div>
      {/* backgrounds */}
      <Image className="bg-star top-[4%] lg:top-[10%] right-[14%] xl:right-[18%] 2xl:right-[22%]" src="/images/bgStar.png" height={30} width={30} alt="star"></Image>
      <Image className="bg-star bottom-[4%] lg:bottom-[20%] left-[14%] xl:left-[18%] 2xl:left-[22%]" src="/images/bgStar.png" height={40} width={40} alt="star"></Image>
    </div>
  );
}

export default NewBooks;
