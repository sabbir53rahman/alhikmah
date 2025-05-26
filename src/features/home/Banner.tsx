"use client";
import CustomFormInput from '@/components/custom-ui/CustomFormInput';
import Bismillah from '../../../public/images/Bismillah.png'
import Image from "next/image";
import BannerSearchBar from '@/components/shared/BannerSearchBar';

export function Banner() {
    return (
        <div className="flex min-h-[80vh] w-full flex-col items-center bg-[url('/images/bannerBg.png')] bg-cover bg-top bg-no-repeat py-16">
            <div className="container mx-auto px-4">
                <Image
                    src={Bismillah}
                    alt={"Bismillah"}
                    className="h-[200px] mx-auto w-[500px] object-contain mb-[40x] lg:mb-[70px]"
                    height={400}
                    width={400}
                    quality={100}
                />
                <BannerSearchBar/>

                <div className='pt-[30px] lg:pb-[100px]'>
                    <h2 className='text-center text-white pb-[25px]'>আপনার <span className='text-[#F3F630]'>পছন্দের</span>  বই খুঁজুন সহজেই</h2>
                    <p className='text-[20px] text-center text-white max-w-[652px] mx-auto'>বাংলাদেশের সব চেয়ে বড় অনলাইন লাইব্রেরি। বাংলাদেশের সব চেয়ে বড় অনলাইন লাইব্রেরি। বাংলাদেশের সব চেয়ে বড় অনলাইন লাইব্রেরি।</p>
                </div> 
            </div>
        </div>
    );
}
