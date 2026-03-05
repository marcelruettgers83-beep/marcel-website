import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Users, DollarSign, FolderOpen } from 'lucide-react'
import { T, MagneticButton, CTA_LINK, OtherServices } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

const CTA_AFFILIATE = "Book an Affiliate Diagnostic"

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
    const elRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.aff-hero-item', {
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

            <div style={{ position: 'relative', zIndex: 2, padding: '12vh 6vw 4rem', maxWidth: '1000px' }}>
                <h1 style={{ margin: '0 0 2.5rem', lineHeight: 1.05 }}>
                    <span className="aff-hero-item font-drama" style={{
                        display: 'block',
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: T.offwhite,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        marginLeft: '-0.05em',
                    }}>
                        Most Affiliate Programs Fail Before They Start.
                    </span>
                </h1>

                <p className="aff-hero-item" style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.25vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem', fontFamily: '"Space Mono"' }}>
                    I build affiliate and partner programs that actually work. Then I hand them to your team to run. No agency retainer. No 12-month contract. A system that pays for itself.
                </p>

                <div className="aff-hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <MagneticButton href={CTA_LINK} label={CTA_AFFILIATE} />
                </div>
                <p className="aff-hero-item font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>30 MINUTES. NO PITCH DECK.</p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   2. THE PROBLEM (icon cards)
   ═══════════════════════════════════════════════════════════════ */
function TheProblem() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.aff-prob-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const problems = [
        {
            icon: <Users size={28} />,
            title: 'Wrong Partners.',
            desc: "Most companies recruit anyone with a pulse. They end up with coupon sites cannibalizing existing customers and content creators who have zero overlap with their actual audience."
        },
        {
            icon: <DollarSign size={28} />,
            title: 'Wrong Incentives.',
            desc: "A flat 20% commission sounds generous. But if your product has a 90-day sales cycle and you're only tracking last-click, your best affiliates are subsidizing your worst ones."
        },
        {
            icon: <FolderOpen size={28} />,
            title: 'No Systems.',
            desc: "The program lives in someone's side project folder. No onboarding flow. No content assets. No performance reviews. No one owns it."
        }
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="aff-prob-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE PROBLEM</span>
                <h2 className="aff-prob-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
                    Three Ways Companies Botch Their Affiliate Program.
                </h2>

                <div className="aff-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem' }}>
                    <p>The pattern is always the same. Someone on the team signs up for a platform, sets a commission rate based on whatever competitors are doing, recruits a handful of partners, and waits. Six months later, the program has generated enough revenue to cover maybe one month of the platform fee.</p>
                </div>

                <div className="aff-prob-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {problems.map((p, i) => (
                        <div key={i} style={{
                            background: T.offwhite, borderRadius: '1.5rem', padding: '2rem',
                        }}>
                            <div style={{
                                width: '3.5rem', height: '3.5rem', borderRadius: '50%',
                                background: 'rgba(217,119,87,0.12)', color: T.signal,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                {p.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.75rem' }}>{p.title}</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', margin: 0 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="aff-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)' }}>
                    <p><strong>The program doesn't fail because affiliate marketing doesn't work. It fails because nobody built the machine.</strong></p>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   3. THE METHOD (Sticky card stack)
   ═══════════════════════════════════════════════════════════════ */
function TheMethod() {
    const containerRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.aff-method-card')
            cards.forEach((card, i) => {
                if (i === 0) return
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 20%', scrub: 0.5 },
                    opacity: 0,
                })
                ScrollTrigger.create({
                    trigger: card, start: 'top 75%',
                    onEnter: () => {
                        if (cards[i - 1]) gsap.to(cards[i - 1], { scale: 0.95, filter: 'blur(8px)', opacity: 0.3, duration: 0.6, ease: 'power2.inOut' })
                    },
                    onLeaveBack: () => {
                        if (cards[i - 1]) gsap.to(cards[i - 1], { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.6, ease: 'power2.inOut' })
                    }
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    const phases = [
        {
            n: '1', title: 'Diagnose (Week 1-2)',
            desc: "Full audit of your current setup. If you're starting from scratch, I map who your competitors are partnering with and why. I build your ideal partner profiles from your actual ICP, not from a generic influencer-tier spreadsheet. You get a clear roadmap: what to build, in what order, and why."
        },
        {
            n: '2', title: 'Build (Week 3-6)',
            desc: "Platform setup. Commission structure designed around your unit economics, not your competitor's homepage. First cohort of vetted, high-quality partners recruited and onboarded. Tracking, attribution, CRM integration, fraud prevention. Content assets your partners can actually use."
        },
        {
            n: '3', title: 'Transfer (Week 7-8)',
            desc: "I train your team to run everything I built. Operations playbook with step-by-step SOPs. Performance dashboard with the metrics that matter. 30 days of post-handoff support for questions and troubleshooting."
        }
    ]

    return (
        <section ref={containerRef} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE METHOD</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 1.5rem' }}>
                    The Affiliate Architecture Method.
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    <p>I don't manage affiliate programs. I build them, train your team, and get out of the way. Three phases. Six to eight weeks. You own everything when I leave.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                {phases.map((s, i) => (
                    <div key={s.n} className="aff-method-card" style={{
                        background: T.offwhite, border: `2px solid ${T.black}`, padding: 'clamp(2rem, 5vw, 4rem)',
                        position: 'sticky', top: `${6 + i * 2}rem`, willChange: 'transform, opacity, filter',
                        borderRadius: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: T.signal, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Space Mono"', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
                            <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em' }}>PHASE {s.n}</span>
                        </div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1.5rem', textTransform: 'uppercase' }}>{s.title}</h3>
                        <p style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.7)', lineHeight: 1.7, margin: 0 }}>
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ maxWidth: '800px', margin: '4rem auto 0' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    The diagnostic is a standalone engagement. You get the full roadmap whether or not you move to the build phase. Most companies do, because by the end of week two the path is obvious. But if the answer is "affiliate isn't the right channel for you right now," I'll say that and you'll have spent two weeks instead of six months finding out.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <MagneticButton href={CTA_LINK} label={CTA_AFFILIATE} dark={true} />
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   4. PROOF (stat callouts)
   ═══════════════════════════════════════════════════════════════ */
function Proof() {
    return (
        <section style={{ padding: '8rem 6vw', background: '#e1ddd6', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>800%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>CUSTOMER GROWTH IN 9 MONTHS</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>6-8 Weeks</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>FROM DIAGNOSTIC TO FULL HANDOVER</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>30 Days</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>POST-HANDOFF SUPPORT INCLUDED</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   5. WHY NOT AN AGENCY (side-by-side comparison)
   ═══════════════════════════════════════════════════════════════ */
function WhyNotAgency() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.aff-agency-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const agencyItems = [
        '$5K-$25K/month ongoing retainer',
        'Incentivized to keep you dependent',
        'Generic partner recruitment',
        'Black-box reporting',
        'You never own the program'
    ]

    const myItems = [
        'One-time build, you own everything',
        'Designed to make you self-sufficient',
        'Partners matched to your actual ICP',
        'Transparent dashboards your team runs',
        'Advisory retainer only if you want it'
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="aff-agency-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE DIFFERENCE</span>
                <h2 className="aff-agency-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 2rem' }}>
                    Agencies Need You Dependent. I Build You Out of That.
                </h2>

                <div className="aff-agency-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem' }}>
                    <p>Affiliate agencies charge $5,000 to $25,000 per month to manage your program. Their business model requires you to stay dependent. I build the program so your team owns it.</p>
                </div>

                <div className="aff-agency-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '1.5rem', padding: '2rem' }}>
                        <h3 className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: 'rgba(17,17,17,0.5)', margin: '0 0 1.5rem' }}>TYPICAL AGENCY</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {agencyItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <X size={18} style={{ color: '#991B1B', flexShrink: 0, marginTop: '0.2rem' }} />
                                    <span style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(17,17,17,0.7)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: T.offwhite, borderRadius: '1.5rem', padding: '2rem', border: `2px solid ${T.signal}` }}>
                        <h3 className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: T.signal, margin: '0 0 1.5rem' }}>MY APPROACH</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {myItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <Check size={18} style={{ color: '#166534', flexShrink: 0, marginTop: '0.2rem' }} />
                                    <span style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(17,17,17,0.8)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   6. WHO THIS IS FOR
   ═══════════════════════════════════════════════════════════════ */
function WhoThisIsFor() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.aff-who-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.offwhite }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="aff-who-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Post-Traction Companies</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            With at least $500K in revenue that want to turn affiliate into a real growth channel. Not an experiment. Not a side project. A revenue engine your team operates.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Companies Burned by Agencies</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            Who are paying $10K+ per month and still don't own their program. Or companies whose in-house attempt stalled because nobody had the time or expertise to build it properly.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#991B1B' }}>
                            <X size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>This Isn't For You</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            If you're pre-revenue. Fix the product first. If you want someone to manage your program indefinitely, that's an agency. If you're looking for a quick win without putting someone on your team in charge, the program will die the month after I leave. I'll tell you that upfront.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   7. WHY ME (expanded with 2-col grid)
   ═══════════════════════════════════════════════════════════════ */
function WhyMe() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.aff-why-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="aff-why-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>WHY ME</span>
                <div className="aff-why-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>In my most recent role, I designed the affiliate and partner program that helped drive 800% customer growth in 9 months. Before that, I spent 15 years in enterprise operations building systems that survive after the person who built them leaves.</p>
                    <p style={{ marginTop: '1.5rem' }}>I use AI to compress the research, partner outreach, and content creation that takes agencies weeks of billable hours. That's why the timeline is 6-8 weeks instead of 6 months.</p>
                </div>

                <div className="aff-why-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Testimonial */}
                    <div style={{ background: T.offwhite, padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="font-drama" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: T.black, marginBottom: '1.5rem' }}>
                            "Marcel exceeded our ambitious goals. He is a rare structured thinker that executes and leads with high precision."
                        </p>
                        <div className="font-data" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: T.signal }}>
                            EDDIE WU — COO, BLAZE.AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>AI content platform</div>
                    </div>

                    {/* Stat cards stacked */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>300 &rarr; 2,700</div>
                            <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>CUSTOMERS/MONTH AT BLAZE.AI</p>
                        </div>
                        <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>20 Years</div>
                            <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>ENTERPRISE OPS + HIGH-GROWTH STARTUPS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   8. CLOSING CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
    return (
        <section style={{ padding: '10rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 2rem', textTransform: 'uppercase' }}>
                    Right Now, Your Affiliate Channel Is Either Costing You Money or Making Someone Else's.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>The partners sending junk traffic are still getting paid. The good affiliates you never recruited are promoting your competitor. The platform fee renews next month whether the program works or not.</p>
                    <p>Start with the diagnostic. Two weeks. You'll know whether affiliate is the right channel and exactly what it takes to build it properly. If the answer is "don't bother," I'll say that too.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_AFFILIATE} />
            </div>
        </section>
    )
}

export default function Affiliates() {
    useSEO({
        title: 'Affiliate Program Architecture | Ruettgers Digital',
        description: "I build affiliate and partner programs that actually work. Then I hand them to your team to run. No agency retainer. A system that pays for itself.",
        canonical: 'https://ruettgersdigital.com/affiliates',
        ogImage: 'https://ruettgersdigital.com/og-image.jpg',
        schema: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Affiliate Program Architecture",
            "provider": { "@type": "ProfessionalService", "name": "Ruettgers Digital", "url": "https://ruettgersdigital.com" },
            "description": "Build affiliate programs that work, train your team, and hand it over.",
            "areaServed": ["Europe", "North America"]
        }
    })

    return (
        <>
            <Hero />
            <TheProblem />
            <TheMethod />
            <Proof />
            <WhyNotAgency />
            <WhoThisIsFor />
            <WhyMe />
            <OtherServices current="/affiliates" />
            <ClosingCTA />
        </>
    )
}
