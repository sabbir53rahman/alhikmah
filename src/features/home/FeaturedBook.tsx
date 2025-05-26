/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PrimaryButton from "@/components/shared/PrimaryButton";

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    description: "বইটি এমনভাবে লেখা হয়েছে যে, পাঠকের মনে হবে নবিজীবনের আনন্দ-বেদনার সফরে সঙ্গী হয়ে রয়েছেন তিনিও।",
    imageUrl: "../../../public/images/newbook1.png", // Replace with your actual image
  },
  {
    id: 2,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    description: "বইটি এমনভাবে লেখা হয়েছে যে, পাঠকের মনে হবে নবিজীবনের আনন্দ-বেদনার সফরে সঙ্গী হয়ে রয়েছেন তিনিও।",
    imageUrl: "../../../public/images/newbook1.png", // Replace with your actual image
  },
  {
    id: 3,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    description: "বইটি এমনভাবে লেখা হয়েছে যে, পাঠকের মনে হবে নবিজীবনের আনন্দ-বেদনার সফরে সঙ্গী হয়ে রয়েছেন তিনিও।",
    imageUrl: "../../../public/images/newbook1.png", // Replace with your actual image
  },
  // Add more books as needed
];

export function FeaturedBook() {
  const highlightText = (title:any) => {
    const splitTitle = title.split("(৪ খন্ড)");
    return (
      <>
        {splitTitle[0]}
        <span className="text-[#4B93FF] font-bold">(৪ খন্ড)</span>
        {splitTitle[2]}
      </>
    );
  };

  return (
    <div className=" relative flex items-center w-full pt-[120px] xl_padding">
      <div className="relative mx-auto container px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {books.map((book) => (
              <CarouselItem key={book.id}>
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between text-center lg:text-start mx-auto max-w-[1200px]">
                  <div>
                    <h2 className="mb-4 lg:text-[64px] max-w-[660px] text-[#000000]">
                      {highlightText(book.title)}
                    </h2>
                    <div className="space-y-2 text-dark-200 lg:mt-5">
                      <p>লেখক : {book.author}</p>
                      <p className="lg:max-w-[400px]">{book.description}</p>
                    </div>
                    <Link href="/details-book">
                    <PrimaryButton text="বইটি পড়ুন" className="mt-[20px]"/>
                    </Link>
                  </div>

                  <div className="mb-8  ">
                    <Image
                      src={`/images/newbook1.png`}
                      alt={book.title}
                      height={500}
                      quality={100}
                      width={500}
                      className="md:h-[500px] h-[250px] w-[200px] md:w-[400px] rounded-[8px] object-contain  "
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center pt-[50px] gap-[20px] px-4">
            <CarouselPrevious className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
            <CarouselNext className="static h-12 w-12 rounded-full border border-gray-200 bg-white hover:bg-[#007CE3] hover:text-white" />
          </div>
        </Carousel>
      </div>

      {/* Backgrounds */}
      <div className="bg-shade lg:!size-[200px] -top-10 left-0 xl:-left-10"></div>
      <div className="bg-shade lg:!size-[200px] xl:right-[10%] bottom-0 md:top-[50%] right-[5%]"></div>

      <Image
        className="bg-star lg:top-[5%] right-4 xl:right-[10%] "
        src="/images/bgStar.png"
        height={40}
        width={40}
        alt="star"
      ></Image>
      <Image
        className="bg-star top-[10%] left-[20%] "
        src="/images/bgStar.png"
        height={18}
        width={18}
        alt="star"
      ></Image>
      <Image
        className="bg-star top-[50%] left-[60%] "
        src="/images/bgStar.png"
        height={15}
        width={15}
        alt="star"
      ></Image>
      <Image
        className="bg-star bottom-0 left-[5%] -z-10"
        src="/images/bgStar.png"
        height={15}
        width={15}
        alt="star"
      ></Image>
    </div>
  );
}
