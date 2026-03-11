import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react'
import { T, MagneticButton, CTA_LINK, CTA_TEXT, NEWSLETTER_URL } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'
import { getPostBySlug, BLOG_POSTS } from '../content/blog/posts'

// Parse inline markdown: **bold**, [link text](/url)
function parseInline(text) {
    const parts = []
    const regex = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g
    let lastIndex = 0
    let match
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
        }
        if (match[2]) {
            // Bold
            parts.push(<strong key={match.index}>{match[2]}</strong>)
        } else if (match[3] && match[4]) {
            // Link
            const isExternal = match[4].startsWith('http')
            parts.push(
                <a key={match.index} href={match[4]}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    style={{ color: T.signal, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    {match[3]}
                </a>
            )
        }
        lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }
    return parts.length > 0 ? parts : text
}

function renderContent(content) {
    return content.map((block, i) => {
        if (block.startsWith('### ')) {
            return <h3 key={i} style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', fontWeight: 700, textTransform: 'uppercase', margin: '2.5rem 0 1rem', lineHeight: 1.2, color: T.signal }}>{block.slice(4)}</h3>
        }
        if (block.startsWith('## ')) {
            return <h2 key={i} style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(1.35rem, 4vw, 1.75rem)', fontWeight: 700, textTransform: 'uppercase', margin: '3rem 0 1.5rem', lineHeight: 1.2 }}>{block.slice(3)}</h2>
        }
        // Image blocks: ![alt text](/path/to/image.jpg)
        const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
        if (imgMatch) {
            return <figure key={i} style={{ margin: '2.5rem 0', padding: 0 }}>
                <img
                    src={imgMatch[2]}
                    alt={imgMatch[1]}
                    loading="lazy"
                    style={{
                        width: '100%', maxWidth: '100%', height: 'auto',
                        borderRadius: '1.5rem', display: 'block',
                        border: `2px solid ${T.black}`,
                    }}
                />
                {imgMatch[1] && (
                    <figcaption className="font-data" style={{
                        fontSize: '0.75rem', color: 'rgba(17,17,17,0.5)',
                        letterSpacing: '0.03em', marginTop: '0.75rem', textAlign: 'center',
                    }}>{imgMatch[1]}</figcaption>
                )}
            </figure>
        }
        if (/^\d+\.\s/.test(block)) {
            return <p key={i} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', margin: '0 0 0.75rem', paddingLeft: '1.5rem' }}>{parseInline(block)}</p>
        }
        return <p key={i} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', margin: '0 0 1.5rem' }}>{parseInline(block)}</p>
    })
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = getPostBySlug(slug)

    if (!post) return <Navigate to="/blog" replace />

    const otherPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2)

    useSEO({
        title: `${post.title} | Ruettgers Digital`,
        description: post.excerpt,
        canonical: `https://www.ruettgersdigital.com/blog/${post.slug}`,
        ogImage: 'https://www.ruettgersdigital.com/og-image.jpg',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.ruettgersdigital.com/' },
            { name: 'Blog', url: 'https://www.ruettgersdigital.com/blog' },
            { name: post.title, url: `https://www.ruettgersdigital.com/blog/${post.slug}` }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
                "@type": "Person",
                "name": "Marcel Ruettgers",
                "url": "https://www.ruettgersdigital.com/about",
                "jobTitle": "Fractional Chief AI Officer"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Ruettgers Digital",
                "url": "https://www.ruettgersdigital.com"
            },
            "description": post.excerpt,
            "mainEntityOfPage": `https://www.ruettgersdigital.com/blog/${post.slug}`,
            "articleSection": post.category,
        }
    })

    return (
        <>
            {/* Article Header */}
            <section style={{
                padding: '12vh 6vw 4rem', background: T.black, color: '#fff',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(217,119,87,0.22) 0%, transparent 70%), linear-gradient(to bottom right, #0a0a0f 0%, #141418 50%, #1a1a24 100%)`,
                }} />
                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.3s ease' }}>
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span className="font-data" style={{ color: T.signal, fontSize: '0.75rem', letterSpacing: '0.1em' }}>{post.category.toUpperCase()}</span>
                        <span className="font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{post.date}</span>
                        <span className="font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{post.readTime}</span>
                    </div>
                    <h1 style={{
                        fontFamily: '"Space Grotesk"', fontWeight: 700,
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase',
                        lineHeight: 1.1, margin: '0 0 1.5rem', color: T.paper,
                    }}>
                        {post.title}
                    </h1>
                    <p style={{ color: 'rgba(232,228,221,0.8)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '650px' }}>
                        {post.excerpt}
                    </p>
                </div>
            </section>

            {/* Article Body */}
            <section style={{ padding: '4rem 6vw 6rem', background: '#FFFFFF' }}>
                <article style={{ maxWidth: '750px', margin: '0 auto' }}>
                    {renderContent(post.content)}
                </article>
            </section>

            {/* Author Box */}
            <section style={{ padding: '0 6vw 4rem', background: '#FFFFFF' }}>
                <div style={{
                    maxWidth: '750px', margin: '0 auto', padding: '2.5rem',
                    background: T.offwhite, borderRadius: '2rem', border: `2px solid ${T.black}`,
                    display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap',
                }}>
                    <img src="/marcel-portrait-400.jpg" alt="Marcel Ruettgers" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Marcel Ruettgers</div>
                        <div className="font-data" style={{ fontSize: '0.75rem', color: T.signal, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>AI IMPLEMENTATION & GROWTH SYSTEMS ARCHITECT</div>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(17,17,17,0.7)', margin: 0 }}>
                            I close the gap between what AI can do and what your company uses it for. Based in Amsterdam.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a href="https://www.linkedin.com/in/marcelruettgers/" target="_blank" rel="noreferrer" style={{ color: T.black, opacity: 0.5, transition: 'opacity 0.3s' }}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ padding: '4rem 6vw', background: '#FFFFFF' }}>
                <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem', background: T.paper, borderRadius: '2rem' }}>
                    <h3 style={{ fontFamily: '"Space Grotesk"', fontSize: '1.35rem', textTransform: 'uppercase', margin: '0 0 1rem' }}>
                        Get This In Your Inbox.
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', maxWidth: '450px', margin: '0 auto 2rem' }}>
                        Weekly essays on AI adoption and the decisions that compound.
                    </p>
                    <a href={NEWSLETTER_URL} target="_blank" rel="noreferrer" className="btn-magnetic"
                        style={{
                            background: T.signal, color: '#fff', padding: '1rem 2rem',
                            borderRadius: '9999px', fontSize: '0.95rem', fontWeight: 700,
                            textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-flex',
                            alignItems: 'center', gap: '0.75rem',
                        }}>
                        <span className="btn-slide" style={{ background: T.black }}></span>
                        <span className="btn-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            Subscribe on Substack <ArrowRight size={18} />
                        </span>
                    </a>
                </div>
            </section>

            {/* Related Posts */}
            {otherPosts.length > 0 && (
                <section style={{ padding: '4rem 6vw 8rem', background: '#FFFFFF' }}>
                    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                        <h3 className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '2rem' }}>KEEP READING</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {otherPosts.map(p => (
                                <Link key={p.slug} to={`/blog/${p.slug}`} className="card-lift" style={{
                                    background: T.offwhite, border: `2px solid ${T.black}`, borderRadius: '1.5rem',
                                    padding: '2rem', textDecoration: 'none', color: T.black,
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                                }}>
                                    <div>
                                        <div className="font-data" style={{ color: T.signal, fontSize: '0.7rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{p.category.toUpperCase()}</div>
                                        <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{p.title}</div>
                                    </div>
                                    <ArrowRight size={20} style={{ color: T.signal, flexShrink: 0 }} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Closing CTA */}
            <section style={{ padding: '6rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.1, margin: '0 0 1.5rem', textTransform: 'uppercase' }}>
                        Ready to Close the Gap?
                    </h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(245,243,238,0.8)', marginBottom: '2.5rem' }}>
                        Start with the audit. Two weeks to full clarity.
                    </p>
                    <MagneticButton href={CTA_LINK} label={CTA_TEXT} />
                </div>
            </section>
        </>
    )
}
