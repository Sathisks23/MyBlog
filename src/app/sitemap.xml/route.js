import { blogPosts } from "@/src/data/data";

export async function GET() {
    const baseUrl = process.env.BASE_URL
    const urls = blogPosts
    .map((post)=>`<url><loc>${baseUrl}/${post.slug}</loc></url>`)
    .join('\n')
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${baseUrl}</loc></url>
      ${urls}
    </urlset>`;
    return new Response(sitemap, {
        headers: {
          "Content-Type": "application/xml",
        },
      });
}