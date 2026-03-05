import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Linkedin } from 'lucide-react'
import { T, MagneticButton, CTA_LINK, CTA_TEXT, OtherServices } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   1. HERO (with portrait)
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
    const elRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.about-hero-item', {
                y: 40, opacity: 0, duration: 1.1, stagger: 0.08,
                ease: 'power3.out', delay: 0.2,
            })
        }, elRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={elRef} id="hero" style={{
            minHeight: '100dvh', position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            background: T.black, color: '#fff'
        }}>
            <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(217,119,87,0.22) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(232,228,221,0.12) 0%, transparent 60%), linear-gradient(to bottom right, #0a0a0f 0%, #141418 50%, #1a1a24 100%)`,
            }} />

            <div style={{
                position: 'relative', zIndex: 2, padding: '12vh 6vw 4rem', maxWidth: '1200px',
                display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center',
            }}>
                <div className="about-hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'clamp(2rem, 4vw, 4rem)',
                    alignItems: 'center',
                }}>
                    <div>
                        <span className="about-hero-item font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>ABOUT</span>
                        <h1 className="about-hero-item" style={{ margin: '0 0 1rem', lineHeight: 1.05 }}>
                            <span style={{
                                display: 'block',
                                fontFamily: '"Space Grotesk"',
                                fontWeight: 700,
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: T.paper,
                                textTransform: 'uppercase',
                            }}>
                                Marcel Ruettgers
                            </span>
                            <span className="font-drama" style={{
                                display: 'block',
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                color: 'rgba(232,228,221,0.7)',
                                marginTop: '0.5rem',
                            }}>
                                Strategic Growth Advisor & Architect
                            </span>
                        </h1>

                        <p className="about-hero-item" style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', maxWidth: '550px', lineHeight: 1.7, margin: '0 0 2.5rem', fontFamily: '"Space Mono"' }}>
                            I help founder-led companies go from putting out fires to knowing exactly what to do next - by connecting the dots across marketing, sales, and ops into one growth system that actually works.
                        </p>

                        <div className="about-hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <MagneticButton href={CTA_LINK} label={CTA_TEXT} />
                        </div>
                        <a className="about-hero-item" href="https://www.linkedin.com/in/marcelruettgers/" target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>

                    <div className="about-hero-item" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/marcel-portrait-800.jpg"
                            srcSet="/marcel-portrait-400.jpg 400w, /marcel-portrait-800.jpg 800w"
                            sizes="(max-width: 768px) 400px, 800px"
                            alt="Marcel Ruettgers"
                            loading="lazy"
                            width={400}
                            height={533}
                            style={{
                                width: '100%', maxWidth: '400px',
                                borderRadius: '2rem',
                                objectFit: 'cover',
                                aspectRatio: '3/4',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY
   ═══════════════════════════════════════════════════════════════ */
function Story() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.about-story-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span className="about-story-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE SHORT VERSION</span>

                <div className="about-story-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>I spent 15 years in enterprise operations - most of it at IKEA, leading sales operations and growth initiatives across markets. I learned how systems work at scale: how to build processes that survive after the person who built them leaves, how to get alignment across large organizations, and how to turn messy data into clear decisions.</p>

                    <p>Then I went to the other end of the spectrum. At Blaze.ai, a high-growth AI startup, I built the growth engine that scaled the company from 300 to 2,700 customers per month in 9 months. Affiliate programs, partner channels, marketing automation, revenue operations - all wired together into one system.</p>

                    <p>Now I do both. I take the pattern recognition from enterprise and the execution speed from startups and apply it to founder-led companies between $1M and $10M who've hit the wall where growth gets harder instead of easier. I diagnose what's broken, build the fix with their team, and hand it over so it runs without me.</p>

                    <p>I work from Amsterdam. I'm async by default. I care more about clarity than flash, and I'd rather build something that works quietly for years than something that looks impressive for a month.</p>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   3. APPROACH / WHAT I BELIEVE
   ═══════════════════════════════════════════════════════════════ */
function Approach() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.about-approach-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const beliefs = [
        { title: 'Systems Over Heroics', desc: "If growth depends on one person working harder, it's not a system. It's a liability. I build machines, not dependencies." },
        { title: 'Clarity Before Action', desc: "Most growth problems aren't talent problems or budget problems. They're visibility problems. Fix the diagnosis and the prescription writes itself." },
        { title: 'Build to Hand Over', desc: "The best outcome is the one where you don't need me anymore. Everything I build is designed for your team to own and operate." },
        { title: 'Calm Over Chaos', desc: "Sustainable pace, clear communication, structured work. I don't do fire drills. The companies that grow the most are the ones that stop running on adrenaline." },
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper, color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="about-approach-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>HOW I THINK</span>
                <h2 className="about-approach-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 3rem' }}>
                    Four Beliefs That Shape How I Work.
                </h2>

                <div className="about-approach-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {beliefs.map((b, i) => (
                        <div key={i} style={{
                            background: T.offwhite, borderRadius: '1.5rem', padding: '2rem',
                        }}>
                            <div style={{
                                width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                                background: T.signal, color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: '"Space Mono"', fontSize: '0.9rem', fontWeight: 700,
                                marginBottom: '1.25rem'
                            }}>
                                {i + 1}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.75rem', textTransform: 'uppercase' }}>{b.title}</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', margin: 0 }}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   4. CLOSING CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
    return (
        <section style={{ padding: '10rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 2rem', textTransform: 'uppercase' }}>
                    Let's See If There's a Fit.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>If your growth feels harder than it should and you're tired of guessing, let's talk. Thirty minutes, no pitch deck. We'll figure out if I can help.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_TEXT} />
                <p className="font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', letterSpacing: '0.05em', marginTop: '1.5rem' }}>
                    Or <a href="mailto:hello@ruettgersdigital.com" style={{ color: T.signal, textDecoration: 'underline' }}>send me an email</a> if you'd prefer to start there.
                </p>
            </div>
        </section>
    )
}

export default function About() {
    useSEO({
        title: 'About Marcel Ruettgers | Ruettgers Digital',
        description: 'Marcel Ruettgers - Strategic Growth Advisor & Architect. 20 years building growth systems across enterprise operations and high-growth startups.',
        canonical: 'https://ruettgersdigital.com/about',
        ogImage: 'https://ruettgersdigital.com/og-image.jpg',
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Marcel Ruettgers",
            "jobTitle": "Strategic Growth Advisor & Architect",
            "worksFor": { "@type": "ProfessionalService", "name": "Ruettgers Digital", "url": "https://ruettgersdigital.com" },
            "url": "https://ruettgersdigital.com/about",
            "sameAs": ["https://www.linkedin.com/in/marcelruettgers/"]
        }
    })

    return (
        <>
            <Hero />
            <Story />
            <Approach />
            <OtherServices current="/about" />
            <ClosingCTA />
        </>
    )
}
