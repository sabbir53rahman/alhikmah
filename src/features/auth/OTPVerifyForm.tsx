"use client";

import VerificationInput from "react-verification-input";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/ui/backButton";



const OTPVerifyForm = () => {


    return <div className=" ">
        <form className="my-10">
            <BackButton></BackButton>  
            <h1 className="md:text-[38px] text-[22px] text-[#3B4856] py-[8px]">
                ভেরিফিকেশন <span className="text-[#64AFE5]">কোড</span>
            </h1>
            <p className="text-base my-5  text-[#838383]">
                আমরা আপনার মেইল ​​ঠিকানায় কোডটি পাঠিয়েছি যা আপনি অন্তর্ভুক্ত করেছেন : {''}
            </p>
            <VerificationInput
                classNames={{
                    container: "container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                    characterFilled: "character--filled",
                }}
            />
                
                {''}
            
            <Button
                className="mt-[20px] w-full sign_up_button_bg py-[8px] lg:py-[30px] text-[14px] lg:text-[17px] hover:bg-primary-600"
                type="submit"
            >
                পরবর্তী
            </Button>
            <p className="underline my-5 text-blue-600 ">আবার কোড পাঠান</p>
        </form>
    </div>
};

export default OTPVerifyForm;
