"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircle } from "react-icons/bs";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";
import BackButton from "@/components/ui/backButton";

// Define schema for password and confirm password validation
const formSchema = z
    .object({
        password: z
            .string()
            .min(1, { message: "Password is required" })
            .min(8, { message: "Password must be at least 8 characters long" }),
        confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

const ResetPasswordForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className="my-5">
            <div className="my-5">
                <BackButton></BackButton>
            </div>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Heading */}
                    <h1 className="lg:text-[32px] text-[24px] text-[#343f4c] pb-[20px]">
                        পাসওয়ার্ড <span className="text-[#64AFE5]">রিসেট</span> করুন
                    </h1>

                    {/* Password Input */}
                    <CustomFormInput
                        name="password"
                        placeholder="নিউ পাসওয়ার্ড  টাইপ করুন "
                        label="নূতন পাসওয়ার্ড "
                        control={form.control}
                        type="password"
                    />
                    {''}

                    {/* Confirm Password Input */}
                    <CustomFormInput
                        name="confirmPassword"
                        placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
                        label="কনফার্ম পাসওয়ার্ড"
                        control={form.control}
                        type="password"
                    />

                    {/* Submit Button */}
                    <Button
                        className="mt-[30px] w-full sign_up_button_bg bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        সাবমিট 
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ResetPasswordForm;
