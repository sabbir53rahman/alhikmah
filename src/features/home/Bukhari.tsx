import Image from "next/image";

const Bukhari = () => {
    return (
        <div className="xl_padding">
            <div
                className="container mx-auto xl:px-[40px] my-[50px] flex h-[200px] items-center justify-center bg-[length:100%_160px] bg-no-repeat md:my-[140px] md:h-[355px] md:bg-contain"
                style={{
                    backgroundImage: `url('/images/bg.png')`,
                    // backgroundSize: "10px",
                    backgroundPosition: "center",
                }}
            >
                {/* Content */}
                <div className="max-w-[90%] px-4 text-center text-black xl:max-w-[1050px]">
                    <p className="text-[14px] font-medium leading-[20px] text-[#3B4856] md:text-[18px] md:leading-[30px] xl:text-[30px] xl:leading-[42px]">
                        কসম খোদার! তোমার মাধ্যমে একজন মানুষের হেদায়েত হওয়াটা তোমার জন্য অনেকগুলি ‘লাল উটের’ মালিক হওয়ার চেও
                        অধিক সৌভাগ্যের বিষয়।
                    </p>
                    <h3 className="mt-2 text-[12px] font-bold leading-[20px] text-[#3B4856] sm:text-[20px] sm:leading-[36px] md:mt-4 md:text-[24px] md:leading-[42px] lg:text-[30px]">
                        বুখারী, ২৯৪২
                    </h3>
                </div>
            </div>
        </div>
        
    );
};

export default Bukhari;
