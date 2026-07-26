import fs from "fs";
import path from "path";

const DOMAIN = "https://mohdali.me";
const today = new Date().toISOString().split("T")[0];

const routes = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "#hero", priority: "0.8", changefreq: "monthly" },
  { path: "#services", priority: "0.8", changefreq: "monthly" },
  { path: "#tech-stack", priority: "0.9", changefreq: "monthly" },
  { path: "#work", priority: "0.9", changefreq: "monthly" },
  { path: "#publications", priority: "0.9", changefreq: "monthly" },
  { path: "#methodology", priority: "0.7", changefreq: "monthly" },
  { path: "#certifications", priority: "0.8", changefreq: "monthly" },
  { path: "#testimonials", priority: "0.7", changefreq: "monthly" },
  { path: "#contact", priority: "0.8", changefreq: "monthly" },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}/${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

const publicDir = path.join(process.cwd(), "public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml.trim(), "utf-8");
console.log(`[SEO] Generated public/sitemap.xml successfully for ${DOMAIN}`);

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt.trim(), "utf-8");
console.log(`[SEO] Generated public/robots.txt successfully pointing to ${DOMAIN}/sitemap.xml`);
