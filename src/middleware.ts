import { authMiddleware } from "@clerk/nextjs";

import PATHS from "@/lib/paths";

export default authMiddleware({
  publicRoutes: [PATHS.home()],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
