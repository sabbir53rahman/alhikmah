import { Banner } from "@/features/home/Banner";
import BlogCarousel from "@/features/home/BlogCarousel";
import Bukhari from "@/features/home/Bukhari";
import ChildBooks from "@/features/home/ChildBooks";
import Donation from "@/features/home/Donation";
import { FeaturedBook } from "@/features/home/FeaturedBook";
import { HadisBooks } from "@/features/home/HadisBooks";
import NewBooks from "@/features/home/NewBooks";
import NewsletterForm from "@/features/home/NewsletterForm";
import PopularPublishers from "@/features/home/PopularPublishers";
import PopularWriters from "@/features/home/PopularWriters";
import WishlistBooks from "@/features/home/WishlistBooks";

import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import StatsSection from "@/features/home/StatsSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <StatsSection/>
            <FeaturedBook />
            <NewBooks />
            <Donation />
            <ChildBooks />
            <Bukhari />
            {/* on this PopularWriters page there are populerwriters and popularpublishers */}
            <PopularWriters />  
            {/* <PopularPublishers /> */}
            <HadisBooks />
            <Bukhari />
            <WishlistBooks />
            <BlogCarousel />
            <NewsletterForm />
            <Footer />
        </>
    );
}
