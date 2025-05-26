import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className=" px-[18px] py-[6px] 2xl:px-[28px] 2xl:py-[6px] text-[#646464] transition-colors text-[14px] 2xl:text-[18px] font-semibold navlink_hover"
        >
            {children}
        </Link>
    );
}
