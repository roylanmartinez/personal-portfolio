import { withContentCollections } from "@content-collections/next";

const isGithubPagesExport = process.env.EXPORT_TO_GITHUB_PAGES === "true";
const useGithubPagesSubpath = process.env.GITHUB_PAGES_USE_SUBPATH === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const hasProjectBasePath =
  useGithubPagesSubpath &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith(".github.io");
const basePath = hasProjectBasePath ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPagesExport
    ? {
        output: "export",
        images: {
          unoptimized: true,
        },
        ...(hasProjectBasePath
          ? {
              basePath,
              assetPrefix: `${basePath}/`,
            }
          : {}),
      }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "X-Frame-Options",
                  value: "DENY",
                },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
          ];
        },
      }),
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
