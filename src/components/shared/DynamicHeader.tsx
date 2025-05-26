import React from "react";

export function DynamicHeader({
    heading1,
    heading2,
    highlight,
    description,
}: {
    heading1: string;
    heading2: string;
    highlight: string;
    description: string;
}) {
    return (
        <div className=" ">
            <h2 className="h2 text-center md:text-start pb-[15px]">
                {heading1} <span className="text-[#6AB6E8]">{highlight} </span>
                {heading2}{" "}
            </h2>
            <p className="mx-auto max-w-[950px] pb-[30px] text-center md:text-start text-[18px] text-[#838383] md:pb-[32px] md:text-[20px] lg:text-[24px]">
                {description}
            </p>
        </div>
    );
}
