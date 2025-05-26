import { BlogPost } from "@/data/BlogPost";
import { BlogCard } from "@/features/home/BlogCard";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DynamicHeader } from "@/components/shared/DynamicHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

const BlogCarousel = () => {
    return (
        <div className="bg-[url('/images/booksSectionBg.png')] bg-top bg-cover bg-no-repeat bg-[rgba(255,255,255,0.19)] lg:pb-[150px] xl_padding">
            <div className="container mx-auto px-4 py-12">
                <Carousel className="w-full">
                    {/* Dynamic Header */}
                    <div className="md:flex items-center justify-between">
                        <DynamicHeader
                            heading1="আমাদের"
                            heading2=" সমূহ"
                            highlight="ব্লগ"
                            description="ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                        />
                        <div className="flex justify-center pt-[20px] md:pt-0 gap-[20px]">
                            <CarouselPrevious className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
                            <CarouselNext className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
                        </div>
                    </div>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {BlogPost.map((post) => (
                            <CarouselItem key={post.id} className="pl-2 md:basis-1/2 md:pl-4">
                                <BlogCard post={post} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-8 flex items-center justify-center pt-[40px]">
                        <Link href="/all-blogs">
                        <PrimaryButton text="সকল ব্লগ" />
                        </Link>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default BlogCarousel;
