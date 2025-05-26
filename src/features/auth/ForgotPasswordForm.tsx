"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircle } from "react-icons/bs";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

// Define the schema for email validation
const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
});

const ForgotPasswordForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className="">
            <div className="pb-[30px]">
                <Link href="/auth/sign-in">
                    <BsArrowLeftCircle className="size-[40px] opacity-75 text-[#3d6d90]" />
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Heading */}
                    <h1 className="text-[22px] md:text-[32px] text-[#343f4c] pb-[20px]">
                        পাসওয়ার্ড <span className="text-[#64AFE5]">ভুলে </span> গেছেন
                    </h1>

                    <p className="pb-[20px] text-[14px]  text-[#838383]">
                        নির্ধারিত ক্ষেত্রে আপনার অ্যাকাউন্টের সাথে যুক্ত ইমেল <br /> ঠিকানা প্রদান করুন
                    </p>

                    {/* Email Input */}
                    <CustomFormInput
                        name="email"
                        placeholder="আপনার ইমেইল লিখুন"
                        label="ইমেইল"
                        control={form.control}
                        type="email"
                    />

                    {/* Submit Button */}
                    <Button
                        className="mt-[30px] sign_up_button_bg w-full bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        পরবর্তী
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ForgotPasswordForm;
