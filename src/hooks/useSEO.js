import { useEffect } from 'react'

const BASE_URL = 'https://ruettgersdigital.com'

function setMeta(selector, attr, value) {
    const el = document.querySelector(selector)
    if (el) el.setAttribute(attr, value)
}

export function useSEO({ title, description, canonical, ogImage, schema, breadcrumbs, noindex }) {
    useEffect(() => {
        // Store originals for cleanup
        const origTitle = document.title
        const origDesc = document.querySelector('meta[name="description"]')?.getAttribute('content')
        const origOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content')
        const origOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content')
        const origOgUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content')
        const origOgImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content')
        const origTwTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')
        const origTwDesc = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content')
        const origTwImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')
        const origCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href')

        // Set title
        if (title) document.title = title

        // Set meta tags
        if (description) {
            setMeta('meta[name="description"]', 'content', description)
            setMeta('meta[property="og:description"]', 'content', description)
            setMeta('meta[name="twitter:description"]', 'content', description)
        }
        if (title) {
            setMeta('meta[property="og:title"]', 'content', title)
            setMeta('meta[name="twitter:title"]', 'content', title)
        }
        if (canonical) {
            setMeta('meta[property="og:url"]', 'content', canonical)
            setMeta('link[rel="canonical"]', 'href', canonical)
        }
        if (ogImage) {
            setMeta('meta[property="og:image"]', 'content', ogImage)
            setMeta('meta[name="twitter:image"]', 'content', ogImage)
        }

        // Handle noindex for pages like 404
        let robotsMeta = null
        if (noindex) {
            robotsMeta = document.createElement('meta')
            robotsMeta.name = 'robots'
            robotsMeta.content = 'noindex, nofollow'
            document.head.appendChild(robotsMeta)
        }

        // Inject schema.org
        let schemaEl = null
        if (schema) {
            schemaEl = document.createElement('script')
            schemaEl.type = 'application/ld+json'
            schemaEl.id = 'page-schema'
            schemaEl.textContent = JSON.stringify(schema)
            document.head.appendChild(schemaEl)
        }

        // Inject breadcrumbs schema
        let breadcrumbEl = null
        if (breadcrumbs && breadcrumbs.length > 0) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": crumb.name,
                    "item": crumb.url
                }))
            }
            breadcrumbEl = document.createElement('script')
            breadcrumbEl.type = 'application/ld+json'
            breadcrumbEl.id = 'breadcrumb-schema'
            breadcrumbEl.textContent = JSON.stringify(breadcrumbSchema)
            document.head.appendChild(breadcrumbEl)
        }

        // Cleanup on unmount
        return () => {
            document.title = origTitle
            if (origDesc) setMeta('meta[name="description"]', 'content', origDesc)
            if (origOgTitle) setMeta('meta[property="og:title"]', 'content', origOgTitle)
            if (origOgDesc) setMeta('meta[property="og:description"]', 'content', origOgDesc)
            if (origOgUrl) setMeta('meta[property="og:url"]', 'content', origOgUrl)
            if (origOgImage) setMeta('meta[property="og:image"]', 'content', origOgImage)
            if (origTwTitle) setMeta('meta[name="twitter:title"]', 'content', origTwTitle)
            if (origTwDesc) setMeta('meta[name="twitter:description"]', 'content', origTwDesc)
            if (origTwImage) setMeta('meta[name="twitter:image"]', 'content', origTwImage)
            if (origCanonical) setMeta('link[rel="canonical"]', 'href', origCanonical)
            if (schemaEl) schemaEl.remove()
            if (breadcrumbEl) breadcrumbEl.remove()
            if (robotsMeta) robotsMeta.remove()
        }
    }, [])
}
