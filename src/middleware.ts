import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

import PATHS from "@/lib/paths";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [PATHS.home()],
  afterAuth(auth, req) {
    // If user is logged in and on a public route
    if (auth.userId && auth.isPublicRoute) {
      let path = PATHS.selectOrganization();

      // If user has organization, redirect to organization route, else create organization
      if (auth.orgId) path = PATHS.organization(auth.orgId);
      return NextResponse.redirect(new URL(path, req.url));
    }
    // If user is not logged in and on a private route
    else if (!auth.userId && !auth.isPublicRoute) {
      // Ask user to log in
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // If user is logged in and don't have an organization active, and is not on select organization route
    else if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== PATHS.selectOrganization()
    ) {
      // Redirect to select organization route
      return NextResponse.redirect(
        new URL(PATHS.selectOrganization(), req.url),
      );
    }
  },
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
