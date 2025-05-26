import React from "react";

import ShowAllBooks from "@/features/books/ShowAllBooks";

import { DynamicBanner } from "@/components/shared/DynamicBanner";
import { PaginationDemo } from "@/components/shared/PaginationDemo";
import SearchInput from "@/components/shared/SearchInput";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

function AllBooks() {
    return (
        <div>
            <Navbar/>
            <DynamicBanner heading="বই সমূহ" />
            <ShowAllBooks />
            <PaginationDemo />
            <Footer/>
        </div>
    );
}

export default AllBooks;
