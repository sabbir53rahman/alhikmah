import React from "react";
import Image from "next/image";


import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DynamicHeader } from "@/components/shared/DynamicHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { Publishers } from "@/data/Publishers";

function PopularPublishers() {
    return (
        <div className="w-full bg-[url('/images/writterBg.png')] bg-cover bg-center bg-no-repeat px-4 py-12">
            <div className="container mx-auto">
                {/* Carousel for Writers */}
                <Carousel className="w-full px-4">
                    {/* Dynamic Header */}
                    <div className="flex items-center justify-between">
                        <DynamicHeader
                            heading1={"জনপ্রিয় "}
                            highlight={"প্রকাশক"}
                            heading2={" সমূহ"}
                            description={
                                "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                            }
                        />
                        <div className="flex gap-[20px]">
                            <CarouselPrevious className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                            <CarouselNext className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                        </div>
                    </div>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {Publishers?.length > 0 ? (
                            Publishers.map((publisher) => (
                                <CarouselItem key={publisher.id} className="pl-2 md:basis-1/5 md:pl-4">
                                    <div className="group rounded-[8px] bg-[#F7F7F7] p-[20px]">
                                        <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                                            {/* Image Row */}
                                            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                                <Image
                                                    src={publisher.imageUrl}
                                                    alt={publisher.name}
                                                    className="h-[200px] w-full object-contain"
                                                    height={200}
                                                    width={200}
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">কোন প্রকাশক পাওয়া যায়নি।</p>
                        )}
                    </CarouselContent>

                    {/* Navigation and Button */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <PrimaryButton text="সকল প্রকাশক" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default PopularPublishers;
