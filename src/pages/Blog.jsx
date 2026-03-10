import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { T, NEWSLETTER_URL } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../content/blog/posts'

function BlogHero() {
    return (
        <section style={{
            padding: '12vh 6vw 4rem', background: T.black, color: '#fff',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(217,119,87,0.22) 0%, transparent 70%), linear-gradient(to bottom right, #0a0a0f 0%, #141418 50%, #1a1a24 100%)`,
            }} />
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE BLOG</span>
                <h1 style={{
                    fontFamily: '"Space Grotesk"', fontWeight: 700,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase',
                    lineHeight: 1.05, margin: '0 0 1.5rem', color: T.paper,
                }}>
                    AI Implementation Thinking.
                </h1>
                <p style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.7, fontFamily: '"Space Mono"', maxWidth: '600px', margin: '0 auto' }}>
                    Clear thinking on AI adoption, systems design, and the decisions that compound. No hype. No prompt tricks.
                </p>
            </div>
        </section>
    )
}

function PostCard({ post }) {
    return (
        <Link to={`/blog/${post.slug}`} className="card-lift" style={{
            background: T.offwhite, border: `2px solid ${T.black}`, borderRadius: '2rem',
            padding: '2.5rem 2rem', textDecoration: 'none', color: T.black,
            display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', top: 0, left: '2rem', width: '3rem', height: '3px', background: T.signal, borderRadius: '0 0 2px 2px' }} />
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.75rem', letterSpacing: '0.1em' }}>{post.category.toUpperCase()}</span>
                <span className="font-data" style={{ color: 'rgba(17,17,17,0.4)', fontSize: '0.75rem' }}>{post.date}</span>
                <span className="font-data" style={{ color: 'rgba(17,17,17,0.4)', fontSize: '0.75rem' }}>{post.readTime}</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem', textTransform: 'uppercase', lineHeight: 1.2 }}>{post.title}</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', flex: 1, margin: '0 0 1.5rem' }}>{post.excerpt}</p>
            <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read Article <ArrowRight size={16} />
            </span>
        </Link>
    )
}

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState(null)

    const filteredPosts = activeCategory
        ? BLOG_POSTS.filter(p => p.category === activeCategory)
        : BLOG_POSTS

    useSEO({
        title: 'Blog | AI Implementation Insights | Ruettgers Digital',
        description: 'Practical insights on AI implementation, closing the adoption gap, and building systems that work. By Marcel Ruettgers.',
        canonical: 'https://www.ruettgersdigital.com/blog',
        ogImage: 'https://www.ruettgersdigital.com/og-image.jpg',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.ruettgersdigital.com/' },
            { name: 'Blog', url: 'https://www.ruettgersdigital.com/blog' }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ruettgers Digital Blog",
            "url": "https://www.ruettgersdigital.com/blog",
            "description": "AI implementation insights and systems thinking for growth companies.",
            "author": {
                "@type": "Person",
                "name": "Marcel Ruettgers",
                "url": "https://www.ruettgersdigital.com/about"
            },
            "blogPost": BLOG_POSTS.map(p => ({
                "@type": "BlogPosting",
                "headline": p.title,
                "datePublished": p.date,
                "url": `https://www.ruettgersdigital.com/blog/${p.slug}`,
                "author": { "@type": "Person", "name": "Marcel Ruettgers" }
            }))
        }
    })

    return (
        <>
            <BlogHero />
            <section style={{ padding: '4rem 6vw 8rem', background: '#FFFFFF' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Category Filters */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <button
                            onClick={() => setActiveCategory(null)}
                            className="font-data"
                            style={{
                                padding: '0.5rem 1.25rem', borderRadius: '9999px', border: `1px solid ${T.black}`,
                                background: !activeCategory ? T.black : 'transparent',
                                color: !activeCategory ? T.offwhite : T.black,
                                fontSize: '0.75rem', letterSpacing: '0.1em', cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            ALL
                        </button>
                        {BLOG_CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="font-data"
                                style={{
                                    padding: '0.5rem 1.25rem', borderRadius: '9999px', border: `1px solid ${T.black}`,
                                    background: activeCategory === cat ? T.black : 'transparent',
                                    color: activeCategory === cat ? T.offwhite : T.black,
                                    fontSize: '0.75rem', letterSpacing: '0.1em', cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Post Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {filteredPosts.map(post => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'rgba(17,17,17,0.5)', fontSize: '1.1rem', padding: '4rem 0' }}>
                            No posts in this category yet. Check back soon.
                        </p>
                    )}

                    {/* Newsletter CTA */}
                    <div style={{ textAlign: 'center', marginTop: '6rem', padding: '4rem 2rem', background: T.paper, borderRadius: '2rem' }}>
                        <h3 style={{ fontFamily: '"Space Grotesk"', fontSize: '1.5rem', textTransform: 'uppercase', margin: '0 0 1rem' }}>
                            Get This In Your Inbox.
                        </h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', maxWidth: '500px', margin: '0 auto 2rem' }}>
                            One essay per week on AI adoption and systems thinking. Subscribe on Substack.
                        </p>
                        <a href={NEWSLETTER_URL} target="_blank" rel="noreferrer" className="btn-magnetic"
                            style={{
                                background: T.signal, color: '#fff', padding: '1rem 2rem',
                                borderRadius: '9999px', fontSize: '1rem', fontWeight: 700,
                                textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-flex',
                                alignItems: 'center', gap: '0.75rem',
                            }}>
                            <span className="btn-slide" style={{ background: T.black }}></span>
                            <span className="btn-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                Subscribe <ArrowRight size={18} />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
