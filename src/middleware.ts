import { NextRequest, NextResponse } from "next/server";

// import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
    // const { pathname } = req.nextUrl;
    // const session = await auth();
    // const isAuthenticated = !!session?.user;

    // const protectedRoutes = [
    //     "/dashboard",
    //     "/mock-test",
    //     "/section-test",
    //     "/practice-question",
    //     "/result-history",
    //     "/support",
    //     "/study-progress",
    //     "/device-test",
    //     "/onboarding",
    //     "/profile",
    // ];

    // const publicRoutes = ["/about-us", "/blogs", "/sign-in", "/sign-up", "/terms-and-conditions"];

    // const publicButAccessWhenLogin = ["/pricing", "/contact-us", "/community"];

    // if (
    //     isAuthenticated &&
    //     !protectedRoutes.some((route) => pathname.startsWith(route)) &&
    //     !publicButAccessWhenLogin.some((route) => pathname.includes(route))
    // ) {
    //     return NextResponse.redirect(new URL(`/dashboard`, req.url));
    // }

    // const isPublicRoute =
    //     ([...publicRoutes, ...publicButAccessWhenLogin].some((route) => pathname.startsWith(route)) ||
    //         pathname === "/") &&
    //     !protectedRoutes.some((route) => pathname.includes(route));

    // if (!isAuthenticated && !isPublicRoute) {
    //     return NextResponse.redirect(new URL(`/sign-in?callbackUrl=${encodeURIComponent(pathname)}`, req.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [
        //Match all request paths except for the ones starting with:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
