/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const SidebarFilter = ({ categories }:any) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section:any) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-full xl:w-[30%] p-4">
      {/* Header */}
      <div className="my-10 space-y-1 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">বই সমূহ</h1>
        <p className="text-sm text-muted-foreground">
          ৮০ টির মধ্যে ০১-১২ টি ফলাফল দেখানো হচ্ছে
        </p>
      </div>

      {/* Filters */}
      <Card className="space-y-6 bg-[#F7F7F7] p-[24px] rounded-[8px]">
        {categories.map((category:any) => (
          <Card
            key={category.id}
            className="my-2 bg-[#F1F1F1] rounded-[8px] py-[18px] px-[24px]"
          >
            <CardHeader
              className="flex flex-row py-0 justify-between items-center cursor-pointer"
              onClick={() => toggleSection(category.id)}
            >
              <h2 className="text-lg font-medium text-primary">
                {category.name} ({category.items.length})
              </h2>
              <span className="text-sm text-gray-500 gap-2">
                {openSection === category.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </CardHeader>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSection === category.id ? "max-h-[150px]" : "max-h-0"
              }`}
            >
              <CardContent className="mt-4 space-y-2">
                <Separator />
                {category.items.map((item:any) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <Label className="text-sm text-foreground">{item.name}</Label>
                    <Checkbox />
                  </div>
                ))}
              </CardContent>
            </div>
          </Card>
        ))}
      </Card>
    </aside>
  );
};

export default SidebarFilter;
