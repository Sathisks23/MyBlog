/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/sitemap.xml",
            headers: [{ key: "Cache-Control", value: "max-age=0, must-revalidate" }],
          },
          {
            source: "/robots.txt",
            headers: [{ key: "Cache-Control", value: "max-age=0, must-revalidate" }],
          },
        ];
      },
    
};

export default nextConfig;
