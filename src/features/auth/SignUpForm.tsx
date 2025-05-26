"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";
import { Checkbox } from "@/components/ui/checkbox";
import { FaArrowLeftLong } from "react-icons/fa6";
import BackButton from "@/components/ui/backButton";
import SocialAuth from "./SocialAuth";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignUpForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className=" ">
            <Form {...form}>
                
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <BackButton></BackButton>  
                    <h1 className="text-[26px]  text-[#3B4856] pb-[8px]">
                        সাইন <span className="text-[#64AFE5]">আপ</span>{" "}
                    </h1>
                    <CustomFormInput
                        name="name"
                        placeholder="আপনার নাম লিখুন
"
                        label="সম্পূর্ণ নাম"
                        control={form.control}
                        type="text"
                    />
                    <CustomFormInput
                        name="email"
                        placeholder="আপনার ইমেইল লিখুন
"
                        label="ইমেইল"
                        control={form.control}
                        type="email"
                    />
                    <CustomFormInput
                        name="password"
                        placeholder="পাসওয়ার্ড"
                        label="পাসওয়ার্ড"
                        control={form.control}
                        type="password"
                    />
                    <div className="flex items-start justify-start space-x-2 pt-[10px]">
                        <Checkbox id="terms" className="mt-[3px]"  />
                        <label
                            htmlFor="terms"
                            className="text-[13px]  text-foreground leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            আপনি একটি অ্যাকাউন্ট তৈরি করে <span className="text-[#6AB6E8]">আমাদের শর্তাবলী</span> <br /> এবং <span className="text-[#6AB6E8]">গোপনীয়তা নীতিতে</span>  সম্মত হন।
                        </label>
                    </div>
                    <Button
                        className="mt-[20px] w-full  sign_up_button_bg py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        সাইন আপ
                    </Button>

                    <p className="text-[17px] text-dark-500 pt-[15px] text-center text-foreground">অথবা</p>
                    <SocialAuth />
                    <p className="mb-5 mx-auto text-center text-sm text-foreground">অলরেডি অ্যাকাউন্ট আছে ?
                        <Link href="/auth/sign-in" className="text-blue-600 underline text-base"> সাইন-ইন করুন</Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default SignUpForm;
