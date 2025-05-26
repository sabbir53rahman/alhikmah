"use client";

import { useRouter } from "next/navigation";

import { FileUploadComponent } from "@/features/dashboard/FileUploadComponent";
import { MediaType } from "@/features/types";
import { useAddAuthorMutation } from "@/redux/features/author/author-api";
import { useAppDispatch } from "@/redux/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";
import CustomFormTextarea from "@/components/custom-ui/CustomFormTextarea";

const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    author_id: z.string().min(1, { message: "Author is required" }),
    publisher_id: z.string().min(1, { message: "Publisher is required" }),
    price: z.number().min(1, { message: "Price is required" }),
    description: z.string().min(1, { message: "Description is required" }),
});

const AddBookPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author_id: "",
            publisher_id: "",
            price: 0,
            description: "",
        },
    });

    const [addAuthor, { isLoading }] = useAddAuthorMutation();

    const uploadMedia = (file: File, type: MediaType) => {
        console.log(file, type);
    };

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        addAuthor({
            ...data,
            id: 0,
            name: "",
            image: "",
        })
            .unwrap()
            .then((res) => {
                toast.success("Author added successfully");
                const searchParams = new URLSearchParams(window.location.search);
                const redirectUrl = searchParams.get("redirect") || "/dashboard";
                router.replace(redirectUrl);
            })
            .catch((error) => {
                toast.error(error.data.detail);
            });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex items-center gap-4 2xl:pb-6">
                    <button
                        onClick={() => router.back()}
                        className="center rounded-full border border-muted-foreground p-1.5 hover:bg-muted"
                    >
                        <ChevronLeft className="size-6" />
                    </button>
                    <h3 className="text-xl text-secondary-foreground 2xl:text-2xl">বই যোগ করুন</h3>
                </div>

                <div className="space-y-4 rounded-xl border bg-white p-8">
                    <div className="col2">
                        <CustomFormInput
                            label="টাইটেল"
                            name="title"
                            placeholder="টাইটেল"
                            control={form.control}
                            type="text"
                        />

                        <CustomFormInput
                            label="লেখক"
                            name="author_id"
                            placeholder="লেখক"
                            control={form.control}
                            type="text"
                        />
                    </div>

                    <div className="col2">
                        <CustomFormInput
                            label="প্রকাশক"
                            name="publisher_id"
                            placeholder="প্রকাশক"
                            control={form.control}
                            type="text"
                        />

                        <CustomFormInput
                            label="মূল্য"
                            name="price"
                            placeholder="মূল্য"
                            control={form.control}
                            type="number"
                        />
                    </div>

                    <CustomFormTextarea
                        label="বই বিবরণ"
                        name="description"
                        placeholder="বই বিবরণ"
                        control={form.control}
                    />

                    <FileUploadComponent
                        type={MediaType.IMAGE}
                        uploadMedia={uploadMedia}
                        isLoading={isLoading}
                        isError={false}
                    />

                    <Button type="submit" className="w-full" isLoading={isLoading} disabled={isLoading}>
                        Add Book
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddBookPage;
