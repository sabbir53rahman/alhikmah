import React from "react";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

type SingleBookProps = {
    book: {
        imageUrl: string;
        title: string;
        readMoreLink: string;
        rating:number;
    };
};

const SingleBook: React.FC<SingleBookProps> = ({ book }) => {
    return (
            <Card className="overflow-hidden rounded-[8px] border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="relative aspect-[3/4] w-full group">
                                    {/* Image */}
                                    <Image
                                        src={book.imageUrl}
                                        alt={book.title}
                                        fill
                                        className="object-cover "
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#164564E3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white">
                                        <h3 className="mb-2 text-[20px] md:text-[24px] lg:text-[28px] font-bold">{book.title}</h3>
                                        <a
                                            href="/details-book"
                                            className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#F3F630] hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            {book.readMoreLink}
                                        </a>
                                         {/* Book Rating */}
                                    {book.rating && (
                                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-3 py-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium ">{book.rating}</span>
                                        </div>
                                    )}
                                    </div>
                        
                                   
                                </div>
                            </Card>
    );
};

export default SingleBook;
