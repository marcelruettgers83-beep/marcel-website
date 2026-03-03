import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import { gsap } from 'gsap'

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS - Preset C: Brutalist Signal
   ═══════════════════════════════════════════════════════════════ */
export const T = {
    paper: '#E8E4DD',
    signal: '#E63B2E',
    offwhite: '#F5F3EE',
    black: '#111111',
}

export const BRAND = "Ruettgers Digital"
export const CTA_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda"
export const CTA_TEXT = "Start With The X-Ray"
export const CTA_TRAINING_TEXT = "Book a Training Call"
export const CTA_AFFILIATE_TEXT = "Book an Affiliate Diagnostic"

const CTA_BY_ROUTE = {
    '/': CTA_TEXT,
    '/about': CTA_TEXT,
    '/training': CTA_TRAINING_TEXT,
    '/affiliates': CTA_AFFILIATE_TEXT,
}

export function MagneticButton({ href, label, dark = false }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="btn-magnetic"
            style={{
                background: dark ? T.black : T.signal,
                color: dark ? '#fff' : T.offwhite,
                padding: '1.25rem 2.5rem',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
            }}>
            <span className="btn-slide" style={{ background: dark ? T.paper : T.black }}></span>
            <span className="btn-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: dark ? 'inherit' : '#fff' }}>
                {label} <ArrowRight size={18} />
            </span>
        </a>
    )
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */
export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const ctaText = CTA_BY_ROUTE[location.pathname] || CTA_TEXT

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navLinks = [
        { label: 'Growth Strategy', path: '/' },
        { label: 'Affiliate Programs', path: '/affiliates' },
        { label: 'AI Training', path: '/training' },
        { label: 'About', path: '/about' }
    ]

    return (
        <nav
            style={{
                position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
                zIndex: 1000, width: 'calc(100% - 2.5rem)', maxWidth: '1000px',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: scrolled ? 'rgba(245,243,238,0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                border: scrolled ? `1px solid rgba(17,17,17,0.15)` : '1px solid transparent',
                borderRadius: '9999px',
                padding: '0.6rem 1.5rem',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/" style={{ fontFamily: '"Space Mono"', fontSize: '0.85rem', letterSpacing: '0.05em', color: scrolled ? T.black : T.paper, fontWeight: 700, textDecoration: 'none', transition: 'color 0.5s ease' }}>
                    RD_
                </Link>

                {/* Desktop Links */}
                <div style={{ display: 'none', '@media (minWidth: 768px)': { display: 'flex' }, gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: location.pathname === link.path ? T.signal : (scrolled ? T.black : T.paper),
                                textDecoration: 'none',
                                opacity: location.pathname === link.path ? 1 : 0.8,
                                transition: 'all 0.3s ease'
                            }}
                            className="hover:opacity-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <a href={CTA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic"
                    style={{ background: T.signal, color: T.offwhite, padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}>
                    <span className="btn-slide" style={{ background: T.black }}></span>
                    <span className="btn-label">{ctaText}</span>
                </a>
            </div>
        </nav>
    )
}

/* ═══════════════════════════════════════════════════════════════
   FAQ ITEM (shared accordion)
   ═══════════════════════════════════════════════════════════════ */
export function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    useEffect(() => {
        if (open) {
            gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' })
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
        }
    }, [open])

    return (
        <div style={{ borderBottom: `1px solid rgba(17,17,17,0.1)`, padding: '1.5rem 0' }}>
            <button
                onClick={() => setOpen(!open)}
                style={{ width: '100%', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: 0, color: T.black, textAlign: 'left' }}
            >
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, paddingRight: '2rem', lineHeight: 1.4 }}>{q}</h4>
                <div style={{ color: T.signal, flexShrink: 0 }}>
                    {open ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <div ref={contentRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
                <div style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    {a.split('\n').map((line, i) => <p key={i} style={{ margin: '0 0 1rem' }}>{line}</p>)}
                </div>
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
export function Footer() {
    return (
        <footer style={{
            background: T.black, color: T.offwhite, padding: '4rem 6vw 2rem',
            borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem', marginTop: '-3rem', position: 'relative', zIndex: 10
        }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', fontFamily: '"Space Mono"', fontWeight: 700 }}>{BRAND}_</h2>
                    <p style={{ color: 'rgba(245,243,238,0.5)', fontSize: '0.9rem', maxWidth: '300px' }}>Growth systems for founder-led companies.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.25rem', borderRadius: '9999px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF00', animation: 'pulse-dot 2s infinite' }} />
                    <span className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#00FF00' }}>SYSTEM OPERATIONAL</span>
                </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '1rem' }}>
                <span className="font-data" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} {BRAND}.</span>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>Growth Strategy</Link>
                    <Link to="/affiliates" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>Affiliate Programs</Link>
                    <Link to="/training" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>AI Training</Link>
                    <Link to="/about" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>About</Link>
                    <a href="mailto:hello@ruettgersdigital.com" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>Contact</a>
                </div>
            </div>
        </footer>
    )
}
