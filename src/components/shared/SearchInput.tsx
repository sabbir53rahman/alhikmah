"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsFilterSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

// Define the schema for search input validation
const formSchema = z.object({
    search: z.string().min(1, { message: "Search field cannot be empty" }),
});

const SearchInput = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Search Query:", data.search);
        // You can add additional functionality here, such as making an API call with the search term.
    };

    return (
        <div className="container flex xl:gap-1 justify-between mx-auto my-[50px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  lg:w-[85%]">
                    <div className="flex  justify-center gap-[20px] rounded-[8px] bg-grey-200 p-[5px] px-[20px]">
                        <div className="w-full">
                            {/* Search Input */}
                            <CustomFormInput  
                                label="সার্চ করুন"
                                name="search"
                                placeholder="বইয়ের নাম ও লেখকের নাম দিয়ে সার্চ"
                                control={form.control}
                                type="text"
                                icon={<IoSearch className="size-[25px] text-grey-800" />}
                                iconPosition="end"
                            />
                        </div>

                    </div>
                </form>
            </Form>
            <Select >
                <div className="flex flex-col xl:mx-3">
                    <label className="my-2 font-semibold text-[14px] text-[#3B4856]">সর্ট করুন</label>
                    <SelectTrigger className="max-w-[180px] shadow border lg:w-[180px]  px-4 py-6 text-slate-500">
                        <SelectValue placeholder={"Popularity"} />
                    </SelectTrigger>
                </div>
                <SelectContent className="">
                    <SelectGroup>
                        <SelectLabel ></SelectLabel>
                        <SelectItem  value="Popularity">Popularity</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SearchInput;
