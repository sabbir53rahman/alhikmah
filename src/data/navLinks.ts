export interface NavLink {
    id: number;
    title: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { id: 1, title: "হোম", href: "/" },
    { id: 2, title: "কুরআন ও তাফসীর", href: "/#" },
    { id: 3, title: "হাদীস গ্রন্থসমূহ", href: "/#" },
    { id: 4, title: "আমাদের গ্রন্থসমূহ", href: "/all-books" },
];
