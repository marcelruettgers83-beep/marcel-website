/**
 * Postbuild pre-rendering script.
 * Launches a local static server from dist/, visits each route with Puppeteer,
 * waits for React to render (including useSEO meta tags and schema injection),
 * and saves the full HTML to route-specific index.html files.
 */
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4173
const BASE = `http://localhost:${PORT}`

const ROUTES = [
    '/about',
    '/affiliates',
    '/training',
    '/ai-systems',
    '/blog',
    '/blog/what-is-the-ai-adoption-gap',
    '/blog/why-ai-pilots-fail',
    '/blog/what-is-an-ai-readiness-audit',
    '/',  // Home page last so it overwrites dist/index.html after others are done
]

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
}

function startServer(spaFallbackPath) {
    return new Promise((resolve) => {
        const server = createServer((req, res) => {
            let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url)
            // For SPA fallback, always serve the original (unmodified) index.html
            if (!existsSync(filePath) || !extname(filePath)) {
                filePath = spaFallbackPath
            }
            try {
                const content = readFileSync(filePath)
                const ext = extname(filePath)
                res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
                res.end(content)
            } catch {
                res.writeHead(404)
                res.end('Not found')
            }
        })
        server.listen(PORT, () => resolve(server))
    })
}

async function prerender() {
    console.log('Starting pre-render...')

    // Save original index.html before we overwrite it
    const originalIndex = join(DIST, '_original_index.html')
    copyFileSync(join(DIST, 'index.html'), originalIndex)

    const server = await startServer(originalIndex)
    const browser = await puppeteer.launch({ headless: true })

    for (const route of ROUTES) {
        const page = await browser.newPage()
        const url = `${BASE}${route}`
        console.log(`  Rendering ${route}...`)

        await page.goto(url, { waitUntil: 'networkidle0' })
        // Wait for useSEO hook useEffect to fire
        await new Promise(r => setTimeout(r, 1500))

        const html = await page.content()
        const outDir = route === '/' ? DIST : join(DIST, route.slice(1))
        if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

        const outFile = join(outDir, 'index.html')
        writeFileSync(outFile, html)
        console.log(`  Saved ${outFile}`)

        await page.close()
    }

    await browser.close()
    server.close()

    // Clean up the backup
    const { unlinkSync } = await import('fs')
    try { unlinkSync(originalIndex) } catch {}

    console.log('Pre-render complete!')
}

prerender().catch(err => {
    console.error('Pre-render failed:', err)
    process.exit(1)
})
