import type { NextConfig } from "next";

// GitHub Pages serves this project site under /<repo>/. Apply the base path only
// for production builds so local `npm run dev` keeps working at the root.
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/copilot-billing-forecast";

// Short commit SHA of the deployed build. CI passes the full SHA via
// NEXT_PUBLIC_COMMIT_SHA (from github.sha). Local/dev builds leave it empty so
// the UI shows "development" rather than a misleading SHA that ignores
// uncommitted changes.
const commitSha = (process.env.NEXT_PUBLIC_COMMIT_SHA ?? "").slice(0, 7);

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  // next/image optimization needs a server, which static export does not have.
  images: { unoptimized: true },
  // Serve pages with trailing slashes so deep links resolve as static files.
  trailingSlash: true,
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_COMMIT_SHA: commitSha,
  },
};

export default nextConfig;
