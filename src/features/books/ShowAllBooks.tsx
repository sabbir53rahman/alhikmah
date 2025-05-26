"use client";
import React from "react";

import { allbooks } from "@/data/allbooks";

import SingleBook from "./SingleBook";
import SearchInput from "@/components/shared/SearchInput";
import SidebarFilter from "./SidebarFilter";

const categoriesData = [
    {
      id: "brand",
      name: "ব্র্যান্ড",
      items: [
        { id: 1, name: "আয়ন পাবলিকেশন" },
        { id: 2, name: "আই আই ইউ বি প্রেস" },
        { id: 3, name: "আলিয়া পাবলিকেশন" },
      ],
    },
    {
      id: "publisher",
      name: "প্রকাশক",
      items: [
        { id: 4, name: "আয়ন পাবলিকেশন" },
        { id: 5, name: "আই আই ইউ বি প্রেস" },
      ],
    },
    {
      id: "subject",
      name: "বিষয় অনুযায়ী",
      items: [
        { id: 6, name: "ধর্মীয় বই" },
        { id: 7, name: "উপন্যাস" },
      ],
    },
  ];

function ShowAllBooks() {
    return (
        <div className="flex flex-col xl:flex-row xl_padding container gap-6 mx-auto">
            {/* Left Sidebar - Filters */}
            <SidebarFilter categories={categoriesData} />

            {/* Right Section - Search and Books */}
            <div className="w-full xl:w-[70%]">
                {/* Search Input */}
                <SearchInput />

                {/* Books Grid */}
                <div className="pt-[50px] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                    {allbooks.map((ele) => (
                        <SingleBook key={ele.id}  book={ele} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShowAllBooks;
