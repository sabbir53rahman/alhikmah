"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PrimaryButton from "@/components/shared/PrimaryButton";

import hadis from "../../../public/images/hadis.png";
import Link from "next/link";

type Book = {
    id: number;
    title: string;
    imageUrl: string;
};

const books: Book[] = [
    {
        id: 1,
        title: "সহিহ বুখারী",
        imageUrl: "/images/hadis1.png",
    },
    {
        id: 2,
        title: "সুনান ইবনে মাজাহ",
        imageUrl: "/images/hadis2.png",
    },
    {
        id: 3,
        title: "মুয়াত্তা ইমাম মালিক",
        imageUrl: "/images/hadis3.png",
    },
    {
        id: 4,
        title: "সুনান আবু দাউদ",
        imageUrl: "/images/hadis4.png",
    },
    {
        id: 5,
        title: "সুনান আবু দাউদ",
        imageUrl: "/images/hadis2.png",
    },
];

export function HadisBooks() {
    return (
        <div className="relative z-20 mt-0 flex items-center overflow-hidden rounded-[12px] bg-gradient-to-r from-[#007CE3] to-[#072253]  lg:mb-[100px] lg:py-[90px] xl_padding">
            <div className="absolute inset-0 z-0 rounded-[12px]">
                <div>
                    <Image src={hadis} alt="" height={400}
                    width={400}
                    quality={100} className="w-full" />
                </div>
            </div>
            <div className="mx-auto container px-4 py-16">
                <div className="w-full px-4">
                    <Carousel className="w-full">
                        {/* Dynamic Header */}
                        <div className="md:flex items-center justify-between">
                            <div className="mb-12 md:max-w-[950px]">
                                <h2 className="pb-[16px] text-[32px] text-center md:text-start font-semibold leading-[42px] text-white sm:leading-[52px] md:text-[48px] md:leading-[62px]">
                                    <span className="text-[#FFDC05]">হাদিসের </span>
                                    বই সমূহ
                                </h2>
                                <p className="pb-[30px] text-[18px] text-center md:text-start text-[#A5ABB1] md:pb-[55px] md:text-[24px] lg:text-[28px]">
                                    ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন
                                    বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।
                                </p>
                            </div>
                            <div className="flex justify-center gap-[20px]">
                                <CarouselPrevious className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
                                <CarouselNext className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
                            </div>
                        </div>
                        <CarouselContent className="-ml-4">
                            {books.map((book) => (
                                <CarouselItem key={book.id} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4">
                                    <Card className="rounded-[8px] border-none bg-[#11354E] p-4 transition-all duration-300 hover:bg-[#1d4a69]">
                                        <div className="mb-4 aspect-[3/4] overflow-hidden rounded-[8px]">
                                            <Image
                                                src={book.imageUrl}
                                                alt={book.title}
                                                className="h-full w-full object-cover"
                                                height={256}
                                                width={256}
                                            />
                                        </div>
                                        <h3 className="text-center text-xl font-semibold text-white">{book.title}</h3>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="mt-8 flex items-center justify-center gap-4">
                        <Link href="/all-books" > <PrimaryButton text="সকল বই"/></Link>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
