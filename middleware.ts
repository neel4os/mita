// export {auth as middleware } from "./auth";
import { auth } from "./auth"
export default auth((req) => {
    console.log("Middleware triggered for request:", req.auth);
    const publicRoutes = ["/", "/flows"];
    const apiRoutes = ["/api/auth", "/api/copilotkit"];
    if (apiRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
        console.log("Skipping authentication for API route:", req.nextUrl.pathname);
        return;
    }
    const isLoggedIn = req.auth?.user;
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
    console.log("Is user logged in:", isLoggedIn);
    console.log("Is public route:", isPublicRoute);
    if (!isLoggedIn && !isPublicRoute) {
        console.log("Redirecting to sign-in page for unauthenticated user.");
        const homeUrl = new URL("/", req.nextUrl.origin);
        homeUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return Response.redirect(homeUrl, 302);
    }

})

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.svg|public|.*\\..*).*)",],
}