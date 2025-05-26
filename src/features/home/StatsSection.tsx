import React from "react";

// Icons (you can replace these with your preferred icons)
import { FaBookOpen, FaFileAlt, FaUserEdit, FaUsers } from "react-icons/fa";

const StatsSection: React.FC = () => {
    const stats = [
        { id: 1, icon: <FaBookOpen size={40} />, number: "25k", label: "বই সমূহ" },
        { id: 2, icon: <FaUserEdit size={40} />, number: "20k", label: "প্রকাশক" },
        { id: 3, icon: <FaUsers size={40} />, number: "25k", label: "ইউজার" },
        { id: 4, icon: <FaFileAlt size={40} />, number: "12k", label: "লেখক" },
    ];

    return (
        <div className="xl:mx-auto mt-10 max-w-[1200px] rounded-[8px] lg:mt-[-65px] bg-white px-4 py-8 mx-5 shadow-lg sm:px-6 lg:px-8 ">
            <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:gap-0">
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className="relative flex w-full max-w-[300px] gap-[20px] items-center justify-center space-y-5 text-center lg:w-1/4"
                    >
                        {/* Icon */}
                        <div className="text-yellow-500">{stat.icon}</div>
                        <div>
                            {/* Number */}
                            <h2 className="text-3xl font-bold text-[#003366]">{stat.number}</h2>

                            {/* Label */}
                            <p className="text-[16px] text-gray-600">{stat.label}</p>
                        </div>

                        {/* Divider Line */}
                        {index < stats.length - 1 && (
                            <div className="absolute right-0 top-1/2 hidden h-16 w-[1px] -translate-y-1/2 bg-gray-300 lg:block"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
