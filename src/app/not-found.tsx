import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import NotFoundImage from "@/assets/images/img-404.png";

import { Button } from "@/components/ui/button";

const NotFoundPage: NextPage = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-center">
                <div className="w-[600]">
                    <Image src={NotFoundImage} alt="404 Not Found" height={282} width={570} />
                    <h1 className="mt-4 text-3xl md:text-[40px]">Page Not Found</h1>
                    <p className="mt-1 text-sm md:text-base">{"The page you are looking for couldn't be found."}</p>
                    <Link href="/">
                        <Button className="mt-6 w-full text-xs font-medium md:text-base">Go Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
