import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SITE_URL = 'https://deploystudio.net'

const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/services', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    crittersOptions: false,
    dirStyle: 'nested',
    onFinished(dir) {
      const lastmod = new Date().toISOString().slice(0, 10)
      const urls = routes
        .map(
          ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
        )
        .join('\n')

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
      writeFileSync(join(dir, 'sitemap.xml'), sitemap)
    },
  },
})
