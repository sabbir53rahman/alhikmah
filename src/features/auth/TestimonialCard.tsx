import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
    content: string;
    author: string;
    role: string;
    image: string;
}

export function TestimonialCard({ content, author, role, image }: TestimonialProps) {
    return (
        <div className="flex flex-col items-center xl:mb-7 backdrop-blur-[4px] bg-white/15 space-y-4 max-h-[300px] rounded-[8px] bg-primary-800 p-4 text-center text-white lg:items-start lg:p-6 lg:text-start">
            <div className="space-y-2">
                <p className="text-[15px] font- noto-font leading-[20px] md:text-[14px] md:leading-[26px] lg:text-[19px] lg:leading-[34px]">
                    {content}
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0">
                <Avatar className="h-[45px] w-[45px] md:h-[48px] md:w-[48px] lg:h-[50px] lg:w-[50px]">
                    <AvatarImage src={image} alt={author} className="" />
                    <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <div className="text-center lg:text-left">
                    <h3 className="text-[13px] m-0  font-semibold md:text-[16px]">{author}</h3>
                    <p className="text-[12px] text-primary-200 opacity-80 md:text-[15px]">{role}</p>
                </div>
            </div>
        </div>
    );
}
