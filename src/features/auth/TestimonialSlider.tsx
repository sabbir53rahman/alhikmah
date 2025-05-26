"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    content: "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয় ভিত্তি করে বই পড়তে।",
    author: "আল ফারুক",
    role: "প্রোডাক্ট ডিজাইনার",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
  },
  {
    content: "একটি অসাধারণ প্ল্যাটফর্ম যা শিক্ষার্থীদের জন্য নতুন দিগন্ত খুলে দিয়েছে।",
    author: "সাদিয়া আক্তার",
    role: "শিক্ষক",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
  },
  {
    content: "সহজ ইন্টারফেস এবং সমৃদ্ধ কন্টেন্ট লাইব্রেরি আমাকে মুগ্ধ করেছে।",
    author: "রাফি হাসান",
    role: "ছাত্র",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    content: "এই প্ল্যাটফর্মটি আমার পড়াশোনার অভিজ্ঞতাকে আরও সমৃদ্ধ করেছে।",
    author: "নুসরাত জাহান",
    role: "গবেষক",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop"
  }
];

export function TestimonialSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-h-[230px] flex items-center justify-start  ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-transparent border-none">
                <TestimonialCard {...testimonial} />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </div>
  );
}