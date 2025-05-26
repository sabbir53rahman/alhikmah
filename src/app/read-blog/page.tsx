
import Image from 'next/image'
import React from 'react'
import booktheme from '../../../public/images/booktheme.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { DynamicHeader } from '@/components/shared/DynamicHeader'
import { BlogPost } from '@/data/BlogPost'
import { BlogCard } from '@/features/home/BlogCard'
import Link from 'next/link'
import PrimaryButton from '@/components/shared/PrimaryButton'
import { DynamicBanner } from '@/components/shared/DynamicBanner'
import { Navbar } from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

function page() {
  return (
    <div>
        <Navbar/>
        <DynamicBanner heading='ব্লগ পড়ুন'/>
        <div className='container mx-auto px-[20px] xl_padding'>
            {/* Image and Text Content */}
            <div className="overflow-hidden bg-white rounded-none pt-[50px] lg:pt-[100px] ">
            <div className="relative h-[250px] lg:h-[550px] w-full">
                <Image
                src={booktheme}
                alt="Prayer"
                quality={100}
                fill
                className=""
                />
            </div>
            <div className="p-6">
                <p className='pb-[12px]'>নও মুসলিমের কাহিনী</p>
                <h2 className="pb-[20px]">
                    জার্মান নও-মুসলিম তানিয়া পোলিং
                </h2>
                <p className="text-gray-700 text-[14px] lg:text-[18px] leading-relaxed">
                <span className='font-semibold text-[#200E32] text-[16px] lg:text-[20px]'>সিরিয়ার শরণার্থী সংখ্যা ২০ লাখে উন্নীত <br /></span>
                
                জাতিসংঘের শরণার্থী পর্যবেক্ষণ বিষয়ক সংস্থা ইউএনএইচসিআর জানিয়েছে, সিরিয়ার ২০ লাখেরও বেশি নাগরিক প্রতিবেশী দেশগুলিতে শরণার্থী হিসাবে আশ্রয় নিয়েছে। গত তিন মাসেই সিরিয়া ছেড়ে পালিয়েছে ৫ লাখ লোক। এর মধ্যে কেবল লেবাননেই আশ্রয় নিয়েছে ৭ লাখ শরণার্থী। এছাড়া বর্তমান বিশ্বে সিরিয়ার নাগরিকরাই অন্য যেকোন দেশের নাগরিকদের চেয়ে বেশি উদ্বাস্তু বলে জানিয়েছে সংস্থাটি। উল্লেখ্য, ২ বছর আগে সিরিয়ায় যুদ্ধ শুরু হওয়ার সময় থেকেই সে দেশের নাগরিকরা প্রাণ রক্ষার্থে প্রতিবেশী দেশগুলিতে আশ্রয় নিতে শুরু করে। প্রতিবেশী দেশ তুরস্ক ছাড়া ইরাকের কুর্দী শাসিত অঞ্চলে ব্যাপকসংখ্যক সিরীয় উদ্বাস্তু আশ্রয় নিয়ে মানবেতর জীবন যাপন করছে। এইসব হতভাগ্য শরণার্থীদের মধ্যে নারী ও শিশুর সংখ্যাই বেশি। দেশত্যাগে বাধ্য করা এসব নাগরিকদের মধ্যে প্রায় অর্ধেকই অর্থাৎ ১০ লাখই হচ্ছে শিশু এবং এদের তিন চতুর্থাংশের বয়স ১১ বছরের নীচে।
                </p><br />
                 <p className="text-gray-700 text-[14px] lg:text-[18px] leading-relaxed">
                <span className='font-semibold text-[#200E32] text-[16px] lg:text-[20px]'>সিরিয়ার শরণার্থী সংখ্যা ২০ লাখে উন্নীত <br /></span>
                
                জাতিসংঘের শরণার্থী পর্যবেক্ষণ বিষয়ক সংস্থা ইউএনএইচসিআর জানিয়েছে, সিরিয়ার ২০ লাখেরও বেশি নাগরিক প্রতিবেশী দেশগুলিতে শরণার্থী হিসাবে আশ্রয় নিয়েছে। গত তিন মাসেই সিরিয়া ছেড়ে পালিয়েছে ৫ লাখ লোক। এর মধ্যে কেবল লেবাননেই আশ্রয় নিয়েছে ৭ লাখ শরণার্থী। এছাড়া বর্তমান বিশ্বে সিরিয়ার নাগরিকরাই অন্য যেকোন দেশের নাগরিকদের চেয়ে বেশি উদ্বাস্তু বলে জানিয়েছে সংস্থাটি। উল্লেখ্য, ২ বছর আগে সিরিয়ায় যুদ্ধ শুরু হওয়ার সময় থেকেই সে দেশের নাগরিকরা প্রাণ রক্ষার্থে প্রতিবেশী দেশগুলিতে আশ্রয় নিতে শুরু করে। প্রতিবেশী দেশ তুরস্ক ছাড়া ইরাকের কুর্দী শাসিত অঞ্চলে ব্যাপকসংখ্যক সিরীয় উদ্বাস্তু আশ্রয় নিয়ে মানবেতর জীবন যাপন করছে। এইসব হতভাগ্য শরণার্থীদের মধ্যে নারী ও শিশুর সংখ্যাই বেশি। দেশত্যাগে বাধ্য করা এসব নাগরিকদের মধ্যে প্রায় অর্ধেকই অর্থাৎ ১০ লাখই হচ্ছে শিশু এবং এদের তিন চতুর্থাংশের বয়স ১১ বছরের নীচে।
                </p><br />
            </div>
            </div>


            {/* রিলেটেড ব্লগ পোস্ট সমূহ? */}
            <Carousel className="w-full lg:pt-[100px] pt-[50px] ">
                    {/* Dynamic Header */}
                    <div className="md:flex items-center justify-between">
                        <DynamicHeader
                            heading1="রিলেটেড ব্লগ"
                            heading2=" সমূহ"
                            highlight="পোস্ট"
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

                    <div className=" flex items-center justify-center py-[40px]">
                        <Link href="/all-blogs">
                        <PrimaryButton text="সকল ব্লগ" />
                        </Link>
                    </div>
                </Carousel>
        </div>
        <Footer/>
    </div>
    
  )
}

export default page