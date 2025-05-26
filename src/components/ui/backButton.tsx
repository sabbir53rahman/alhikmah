"use client";

import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation'; // Correct import for App Router

const BackButton = () => {
    const router = useRouter();

    const goBack = () => {
        router.back(); // Navigate to the previous page
    };

    return (
        <button onClick={goBack}>
            <div className="rounded-full bg-slate-50 bg-opacity-70 text-[#1F618D] my-4 text-base border border-[#1F618D] size-10 flex justify-center items-center">
                <FaArrowLeftLong />
            </div>
        </button>
    );
};

export default BackButton;
