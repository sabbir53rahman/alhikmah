"use client";

import Image from "next/image";

import admin from "@/assets/images/admin.png";
import champion from "@/assets/images/champion.png";
import order from "@/assets/images/order.png";
import property from "@/assets/images/property.png";
import userImage from "@/assets/images/user.png";
import { useGetOverviewQuery } from "@/redux/features/dashboard/dashboard-api";
import { useAppSelector } from "@/redux/hook";

const Dashboard = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { data, isSuccess } = useGetOverviewQuery({});

    const dashboardCards = [
        {
            imageUrl: order,
            title: "Total Books",
            value: data?.total_books || 0,
        },
        {
            imageUrl: property,
            title: "Total Authors",
            value: data?.total_authors || 0,
        },
        {
            imageUrl: admin,
            title: "Total Publishers",
            value: data?.total_publishers || 0,
        },
        {
            imageUrl: champion,
            title: "Total Blogs",
            value: data?.total_blogs || 0,
        },
        {
            imageUrl: userImage,
            title: "Total Users",
            value: data?.total_users || 0,
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-5">
                <div className="col-span-2 flex flex-col justify-center pl-4 md:pl-6 lg:col-span-4 lg:pl-12">
                    <p className="text-[#6D6D6D]">Good Morning</p>
                    <p className="text-2xl font-semibold capitalize text-black md:text-3xl">
                        {user?.name || "Dear Admin"}
                    </p>
                </div>

                {/* {isSuccess ? ( */}
                <>
                    {dashboardCards.map((card) => (
                        <div
                            key={card?.title}
                            className="flex flex-col items-center justify-center rounded-2xl bg-[#F8F8F8] px-2 py-4"
                        >
                            <Image
                                width={48}
                                height={48}
                                src={card?.imageUrl}
                                alt={card?.title}
                                className="size-12 rounded-full object-contain"
                            />
                            <p className="py-2 text-sm text-[#454545]">{card?.title}</p>
                            <h3 className="text-2xl font-bold text-[#414141]">{card?.value}</h3>
                        </div>
                    ))}
                </>
                {/* ) : ( */}
                {/* <CustomLoading /> */}
                {/* )} */}
            </div>
        </div>
    );
};

export default Dashboard;
