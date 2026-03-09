import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, ArrowRight, AlertTriangle, Layers, Ghost, ShieldAlert, TrendingDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { T, MagneticButton, CTA_LINK, CTA_TEXT, CTA_XRAY_TEXT, FAQItem, OtherServices, NEWSLETTER_URL } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
    const elRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-item', {
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
                    <span className="hero-item" style={{
                        display: 'block',
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 700,
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        color: T.paper,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.2rem',
                        textTransform: 'uppercase',
                    }}>
                        Your Company Bought the AI Tools.
                    </span>
                    <span className="hero-item font-drama" style={{
                        display: 'block',
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: T.offwhite,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        marginLeft: '-0.05em',
                    }}>
                        Nobody Redesigned the Factory Floor.
                    </span>
                </h1>

                <p className="hero-item" style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.25vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem', fontFamily: '"Space Mono"' }}>
                    Anthropic's latest data shows a 65-point gap between what AI can do and what companies actually use it for. 95% of AI pilots fail. Not because the technology doesn't work. Because nobody builds the system around it. I audit your workflows, find where AI creates real value, build it with your team, and hand it over.
                </p>

                <div className="hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <MagneticButton href={CTA_LINK} label={CTA_TEXT} />
                </div>
                <p className="hero-item font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>30 MINUTES. NO PITCH DECK.</p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   2. THE PROBLEM
   ═══════════════════════════════════════════════════════════════ */
function TheProblem() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.prob-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const problems = [
        {
            icon: <AlertTriangle size={28} />,
            title: 'Pilot Purgatory.',
            desc: "Two-thirds of companies are stuck here. Five AI experiments running, none in production. No clear criteria for what \"success\" looks like. Innovation team runs pilots. Operations team ignores them. Six months and $50,000 later, nothing changed."
        },
        {
            icon: <Layers size={28} />,
            title: 'Tool Sprawl, Zero Orchestration.',
            desc: "Your team has ChatGPT, Copilot, three automation tools, and an AI SDR. None of them talk to each other. Leads fall through cracks between systems. Every department bought their own solution. Nobody wired them together."
        },
        {
            icon: <Ghost size={28} />,
            title: 'Shadow AI Everywhere.',
            desc: "78% of your employees are already using AI tools you didn't approve. 80% of companies have had AI-related data incidents. Your team is pasting customer data into consumer tools because the approved solution is too slow or too locked down."
        },
        {
            icon: <ShieldAlert size={28} />,
            title: 'Training That Doesn\'t Stick.',
            desc: "You ran the workshop. Everyone learned to prompt. A month later, only 13% use AI with real confidence. Literacy is not fluency. The gap between \"knows about AI\" and \"uses AI daily with good judgment\" takes 4-6 weeks of hands-on practice. Most programs skip that part."
        },
        {
            icon: <TrendingDown size={28} />,
            title: 'The Intensification Trap.',
            desc: "AI makes your team faster, so the company demands more output instead of better output. Productivity gains go to the spreadsheet, not the people. Burnout rises. Resistance builds. The AI initiative becomes the thing everyone resents."
        }
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="prob-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE PROBLEM</span>
                <h2 className="prob-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
                    Five Ways Companies Waste Money on AI.
                </h2>

                <div className="prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>By 1900, electricity had been available for 20 years. Less than 5% of factories used it. Not because it didn't work. Because they kept the old layout and just swapped steam for electricity. The productivity explosion came when they redesigned the factory floor around the new technology.</p>
                    <p style={{ marginTop: '1.5rem' }}>AI is the exact same story. The tools work. The implementations don't.</p>
                </div>

                <div className="prob-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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

                <div className="prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)' }}>
                    <p><strong>This isn't a technology problem. It's a systems design problem. The same kind I've been solving for 20 years.</strong></p>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   3. THE GAP METHOD (Sticky card stack)
   ═══════════════════════════════════════════════════════════════ */
function TheGapMethod() {
    const containerRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.method-card')
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
        { n: '1', title: 'Map (Weeks 1-2)', desc: "I map your entire operation end-to-end. Every workflow, every handoff, every tool. Then I identify the \"jagged frontier\" from the Harvard/BCG research: the specific tasks where AI creates real value vs. where it actively makes things worse. You get a clear-eyed report. Not a pitch for more tools. Not a generic \"AI roadmap.\" A map of where the gap lives in your business and what closing it is worth." },
        { n: '2', title: 'Design (Week 3)', desc: "Architecture the system. Which processes get AI, which stay human, how they connect. Every design decision documented with the reasoning behind it. Human-in-the-loop is the default, not the exception. I design for your team's actual capacity. Not theoretical capacity. Not what the org chart says. What your people can actually run when I'm gone." },
        { n: '3', title: 'Build (Weeks 4-6)', desc: "Build the actual workflows in your existing tools. AI-augmented processes, prompt templates, automation, governance guardrails. Your team builds alongside me. That's not optional. I've watched enough top-down implementations die on arrival. The team that helps build the system is the team that actually runs it." },
        { n: '4', title: 'Train (Week 7)', desc: "Fluency, not literacy. Your team learns to operate and improve everything. Not a workshop with slides and dummy data. Hands-on with their actual workflows, their actual tools, their actual work. The research is clear: 4-6 weeks of structured practice is what moves people from \"knows about AI\" to \"uses AI daily with good judgment.\" Most training programs skip this entirely." },
        { n: '5', title: 'Hand Over (Week 8)', desc: "Full documentation. Playbooks. Internal AI champions identified and trained. Performance dashboards showing what changed. Everything your team needs to run and iterate without me. Advisory retainer available for the strategic decisions that come up. But the system runs on its own. The best outcome is the one where you don't need me anymore." }
    ]

    return (
        <section ref={containerRef} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE GAP METHOD</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 1.5rem' }}>
                    Close the Gap in 8 Weeks.
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    <p>Every engagement follows the same model: map where the gap lives, design the system, build it with your team, train them to fluency, hand it over. I call it The Gap Method. Before I touch anything in your business, I need to see where AI actually creates value and where it's just expensive noise.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                {phases.map((s, i) => (
                    <div key={s.n} className="method-card" style={{
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

            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <MagneticButton href={CTA_LINK} label={CTA_XRAY_TEXT} dark={true} />
                <p className="font-data" style={{ marginTop: '1.5rem', color: 'rgba(17,17,17,0.5)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>TWO WEEKS TO FULL CLARITY ON WHERE AI CREATES REAL VALUE IN YOUR BUSINESS.</p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   4. PROOF
   ═══════════════════════════════════════════════════════════════ */
function Proof() {
    useEffect(() => {
        const reviewSchema = {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ruettgers Digital",
            "url": "https://www.ruettgersdigital.com",
            "review": [
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Eddie Wu" },
                    "reviewBody": "Marcel exceeded our ambitious goals. He is a rare structured thinker that executes and leads with high precision.",
                    "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Joe Girton" },
                    "reviewBody": "A true force multiplier for any team that wants to move fast without breaking things.",
                    "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Edward van den Bergh" },
                    "reviewBody": "He created a clear plan, provided regular updates on results, and the plan he is executing is already showing results.",
                    "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 5,
                "reviewCount": 3,
                "bestRating": 5
            }
        }
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'review-schema'
        script.textContent = JSON.stringify(reviewSchema)
        document.head.appendChild(script)
        return () => {
            const el = document.getElementById('review-schema')
            if (el) el.remove()
        }
    }, [])

    return (
        <section style={{ padding: '8rem 6vw', background: '#e1ddd6', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Results in Numbers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem', textAlign: 'center' }}>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>65 pts</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>GAP BETWEEN AI CAPABILITY AND ACTUAL USE</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>95%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>OF AI PILOTS FAIL TO SCALE</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>6-8 Weeks</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>FROM AUDIT TO FIRST MEASURABLE ROI</p>
                    </div>
                </div>

                {/* Testimonials */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <p className="font-drama" style={{ fontSize: '1.35rem', lineHeight: 1.6, color: T.black, marginBottom: '2rem' }}>
                            "Marcel exceeded our ambitious goals. He is a rare structured thinker that executes and leads with high precision."
                        </p>
                        <div className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: T.signal }}>
                            EDDIE WU — COO, BLAZE.AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>AI content platform</div>
                    </div>

                    <div>
                        <p className="font-drama" style={{ fontSize: '1.35rem', lineHeight: 1.6, color: T.black, marginBottom: '2rem' }}>
                            "A true force multiplier for any team that wants to move fast without breaking things."
                        </p>
                        <div className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: T.signal }}>
                            JOE GIRTON — CHIEF OF STAFF, BLAZE.AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>AI content platform</div>
                    </div>

                    <div>
                        <p className="font-drama" style={{ fontSize: '1.35rem', lineHeight: 1.6, color: T.black, marginBottom: '2rem' }}>
                            "He created a clear plan, provided regular updates on results, and the plan he is executing is already showing results."
                        </p>
                        <div className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: T.signal }}>
                            EDWARD VAN DEN BERGH — CEO, THE GREAT OUTDOORS
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>Outdoor adventure company</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   5. ANTI-HYPE
   ═══════════════════════════════════════════════════════════════ */
function AntiHype() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.anti-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const vendorItems = [
        'Replace your team with AI agents',
        'Deploy 15 tools, integrate later',
        'Black-box AI nobody understands',
        'Promise "10x results" in 30 days',
        '"AI strategy" deck that sits in a Google Drive folder'
    ]

    const myItems = [
        'AI amplifies your team. It doesn\'t replace them.',
        'Fix the architecture before adding tools',
        'Every system documented. Your team operates it.',
        'Honest about where AI helps and where it doesn\'t',
        'I build the thing, train your team, and leave'
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="anti-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE STAND</span>
                <h2 className="anti-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 2rem' }}>
                    What I Won't Do.
                </h2>

                <div className="anti-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem' }}>
                    <p>Most AI vendors are incentivized to sell you autonomy. Fully automated everything. AI that "thinks for you." The pitch sounds great. The results don't show up. I take the opposite approach: AI handles the repetitive work so your people can focus on the work that actually requires judgment.</p>
                </div>

                <div className="anti-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '1.5rem', padding: '2rem' }}>
                        <h3 className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: 'rgba(17,17,17,0.5)', margin: '0 0 1.5rem' }}>TYPICAL AI VENDOR</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {vendorItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <X size={18} style={{ color: '#991B1B', flexShrink: 0, marginTop: '0.2rem' }} />
                                    <span style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(17,17,17,0.7)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: T.offwhite, borderRadius: '1.5rem', padding: '2rem', border: `2px solid ${T.signal}` }}>
                        <h3 className="font-data" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: T.signal, margin: '0 0 1.5rem' }}>THE GAP METHOD</h3>
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
   6. IS THIS RIGHT FOR YOU? & HOW WE WORK TOGETHER
   ═══════════════════════════════════════════════════════════════ */
function IsThisRight() {
    const engagements = [
        { name: 'AI Readiness Audit', timeline: '2 WEEKS', desc: "A full diagnostic of your workflows, tools, and team. You get a clear map showing exactly where AI creates real value in your business and where it's just noise. Most people start here because it answers the question they've been guessing at for months.", highlight: false },
        { name: 'The Gap Method', timeline: '8-12 WEEKS', desc: "Full implementation: map, design, build, train, hand over. I build AI-augmented workflows with your team so they own it when I leave. Prompt templates, automation, governance guardrails. Designed for your team's actual capacity.", highlight: true },
        { name: 'Advisory Retainer', timeline: 'ONGOING', desc: 'For when the implementation is done and you want strategic access without the full engagement. Monthly metric reviews, new use case identification, governance updates. Available for the decisions that matter, gone for everything else.', highlight: false },
    ]

    return (
        <section style={{ padding: '8rem 6vw', background: T.offwhite }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Fit / Not Fit */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Who this is for.</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            You're past $5M in revenue. You've bought AI tools, maybe run a pilot or two, and the results didn't match the promise. Your team has ChatGPT accounts but no system. Different departments use different tools with zero coordination. You know AI matters but you're not sure where it actually moves the needle. You're ready to stop experimenting and start building something that works.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#991B1B' }}>
                            <X size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Who this isn't for.</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            If you're pre-revenue, fix the product first. If you want a chatbot to replace your team, that's not what I build. If you're looking for a magic button or a "10x overnight" promise, that doesn't exist. This is for companies willing to do the systems work that makes AI actually useful.
                        </p>
                    </div>
                </div>

                {/* How We Work Together */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, textTransform: 'uppercase', margin: '0 0 1rem' }}>
                        How We Work Together.
                    </h2>
                    <p style={{ fontFamily: '"Space Mono"', fontSize: '1.1rem', color: 'rgba(17,17,17,0.6)' }}>Three ways to engage, depending on where you are.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {engagements.map((t) => (
                        <div key={t.name} style={{
                            background: t.highlight ? T.black : T.paper,
                            color: t.highlight ? T.offwhite : T.black,
                            padding: '3rem 2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: '"Space Mono"', margin: '0 0 0.75rem', fontWeight: 700 }}>{t.name}</h3>
                            <div className="font-data" style={{ fontSize: '0.8rem', margin: '0 0 1.5rem', color: T.signal, letterSpacing: '0.1em' }}>{t.timeline}</div>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.8, flex: 1, margin: 0 }}>{t.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <MagneticButton href={CTA_LINK} label="Book a Call" />
                    <p className="font-data" style={{ color: 'rgba(17,17,17,0.5)', fontSize: '0.85rem', letterSpacing: '0.05em', marginTop: '1.5rem' }}>
                        Or <a href="mailto:marcel@ruettgersdigital.com" style={{ color: T.signal, textDecoration: 'underline' }}>send me an email</a> if you'd prefer to start there.
                    </p>
                </div>

            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   7. WHY ME
   ═══════════════════════════════════════════════════════════════ */
function WhyMe() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.why-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="why-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>WHY ME</span>
                <div className="why-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>At Blaze.ai, I built the growth engine that scaled the company from 300 to 2,700 customers per month. AI-powered workflows across partner programs, marketing automation, and revenue operations. All wired together into one system. Before that, I spent 15 years in enterprise operations at IKEA building processes designed to survive after the person who built them leaves.</p>
                    <p style={{ marginTop: '1.5rem' }}>I use AI every day to run operations. Not as a demo. As the actual operating system. The method works because I run it myself. Not last year. This morning.</p>
                    <p style={{ marginTop: '1.5rem' }}>That combination matters. Most AI consultants know the technology but not the operations. Most operations people know the business but not the technology. I sit in the middle. I've been building systems that work at scale for 20 years. AI is the most powerful tool I've ever had for doing it.</p>
                </div>

                <div className="why-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: T.offwhite, padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="font-drama" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: T.black, marginBottom: '1.5rem' }}>
                            "Marcel exceeded our ambitious goals. He is a rare structured thinker that executes and leads with high precision."
                        </p>
                        <div className="font-data" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: T.signal }}>
                            EDDIE WU — COO, BLAZE.AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>AI content platform</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>300 &rarr; 2,700</div>
                            <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>CUSTOMERS/MONTH USING AI SYSTEMS</p>
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
   8. FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQ() {
    const faqs = [
        { q: "What is The Gap Method?", a: "The Gap Method is my framework for closing the gap between what AI can do and what your company actually uses it for. It's five phases: Map your workflows and find where AI creates real value. Design the system. Build it with your team. Train them to fluency. Hand it over. The whole process runs 8-12 weeks. You own everything when I leave." },
        { q: "We've tried AI tools and they didn't work. How is this different?", a: "That's the pattern I see everywhere. Companies buy tools, set them up based on whatever the vendor demo showed, and wait for results. The tools work fine. The implementation doesn't.\nI start with your workflows, not the technology. The audit maps where AI actually creates value in your specific business. Then we build the system around that reality, with your team, in your existing tools. Most AI failures are systems design failures. That's what I fix." },
        { q: "What does the AI Readiness Audit include?", a: "A full audit of your workflows, tools, data readiness, team capabilities, and governance posture. I map the \"jagged frontier\" from the Harvard/BCG research: the specific tasks where AI improves performance vs. where it actively makes things worse.\nYou get a written report with specific findings and a prioritized roadmap with estimated ROI per use case. If AI isn't the answer for some of your processes, I'll tell you that too. You walk away with the diagnostic regardless of whether we continue." },
        { q: "How long until we see results?", a: "The audit takes two weeks. You'll have full clarity on where AI creates real value in your business.\nAfter that, most companies see measurable impact within the first 6-8 weeks of implementation. The Harvard/BCG research shows 12-25% productivity gains on tasks inside the AI frontier. The key is knowing which tasks those are. That's what the audit gives you." },
        { q: "What size company is this for?", a: "Companies between $5M and $50M in revenue, 50 to 500 employees. Big enough to have workflow complexity that benefits from AI. Small enough that one person can drive the change.\nYou're too small for McKinsey but too complex for a $50/month SaaS tool. That's the gap I fill." },
        { q: "Why not just hire a Head of AI or Chief AI Officer?", a: "A senior AI hire costs $150K to $250K a year, plus three to six months to find and onboard. And if your systems aren't ready, you're hiring someone into a mess.\nI come in, audit the opportunity, build the infrastructure, and train your team. Then you hire into a working system, or you don't, because the systems run without a dedicated person. Either way, you're in a better position. The audit alone costs less than two months of a bad hire." },
        { q: "Do you work with remote or distributed teams?", a: "Yes. Most of my clients are remote or hybrid. I work async by default. Structured updates, shared dashboards, documented decisions. The audit and implementation work just as well over video as they do in person. I've done this across time zones from Amsterdam to San Francisco." },
        { q: "What if our team pushes back on AI adoption?", a: "This is exactly why I build with your team, not for them. When people help design the system, they actually use it.\nI've seen enough top-down implementations die on arrival. The workflows your team builds alongside me are the ones they'll run after I leave. Adoption isn't a compliance problem. It's a design problem. We solve it from day one." },
        { q: "What tools do you work with?", a: "Whatever you have. I'm vendor-agnostic. The problem is almost never the tools. It's how they're connected and whether anyone is using them consistently.\nI've worked with HubSpot, Salesforce, Pipedrive, custom setups, Zapier, Make, n8n, Claude, GPT, Copilot, and dozens of specialized AI tools. The architecture matters more than the vendor. If a tool genuinely isn't fit for purpose, I'll tell you. But most of the time, the stack you have is fine. It just needs to be wired together properly." },
        { q: "How much does this cost?", a: "The AI Readiness Audit is a standalone two-week engagement. The full Gap Method implementation runs 8-12 weeks depending on scope. Advisory retainers are ongoing and light-touch.\nI price based on the engagement, not hourly. The audit alone pays for itself because it shows you exactly where AI creates real value and what's just expensive noise. Most companies I work with are between $5M and $50M in revenue." },
        { q: "What is an AI readiness audit?", a: "An AI readiness audit is a structured assessment of your company's ability to adopt AI effectively. I evaluate five dimensions: data readiness, technology infrastructure, people and skills, process maturity, and governance posture.\nThe output is a prioritized map of where AI creates real value in your specific business, where it doesn't, and what you need to fix before AI can deliver results. Think of it as an X-ray for your AI adoption gap. Two weeks, and you walk away knowing exactly what to do and in what order." },
    ]

    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a.replace(/\n/g, ' ')
                }
            }))
        }
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'faq-schema'
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
        return () => {
            const el = document.getElementById('faq-schema')
            if (el) el.remove()
        }
    }, [])

    return (
        <section style={{ padding: '8rem 6vw', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, textTransform: 'uppercase', margin: '0 0 3rem' }}>
                    FAQ
                </h2>
                <div>
                    {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   9. NEWSLETTER
   ═══════════════════════════════════════════════════════════════ */
function Newsletter() {
    return (
        <section style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE NEWSLETTER</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, textTransform: 'uppercase', margin: '0 0 1.5rem' }}>
                    Weekly AI Implementation Thinking.
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', margin: '0 0 2.5rem' }}>
                    One essay per week on AI adoption, systems thinking, and the decisions that compound. No hype. No prompt tricks. Just clear thinking from 20 years of building what works.
                </p>
                <iframe
                    src="https://marcelruettgers.substack.com/embed"
                    width="100%"
                    height="150"
                    style={{ border: 'none', background: 'transparent', maxWidth: '480px', display: 'block', margin: '0 auto' }}
                    frameBorder="0"
                    scrolling="no"
                    title="Subscribe to newsletter"
                />
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   10. CLOSING CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
    return (
        <section style={{ padding: '10rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 2rem', textTransform: 'uppercase' }}>
                    The Companies That Close This Gap First Win the Next Five Years.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>Right now, the gap between what AI can do and what your company uses it for is 65 points wide. That gap is a compounding disadvantage. Every month you spend in pilot purgatory is a month your competitors are building real systems.</p>
                    <p>Start with the audit. Two weeks. You'll know exactly where AI creates real value in your business and where it's just noise. If the answer is "you don't need this right now," I'll tell you that too.</p>
                    <p style={{ fontStyle: 'italic', color: 'rgba(245,243,238,0.6)' }}>It starts with a 30-minute call. If we're the right fit, the audit runs over two weeks. You'll know exactly what to build and in what order.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_XRAY_TEXT} />
            </div>
        </section>
    )
}

export default function Home() {
    useSEO({
        title: 'AI Implementation Consultant | Close the AI Adoption Gap | Ruettgers Digital',
        description: "95% of AI pilots fail. Not because the technology doesn't work. Because nobody builds the system around it. I audit your workflows, build AI systems with your team, and hand them over. The Gap Method.",
        canonical: 'https://www.ruettgersdigital.com/',
        ogImage: 'https://www.ruettgersdigital.com/og-image.jpg',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.ruettgersdigital.com/' }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Implementation - The Gap Method",
            "provider": {
                "@type": "ProfessionalService",
                "name": "Ruettgers Digital",
                "url": "https://www.ruettgersdigital.com",
                "address": { "@type": "PostalAddress", "addressLocality": "Amsterdam", "addressCountry": "NL" }
            },
            "description": "AI implementation consulting using The Gap Method. Audit workflows, find where AI creates real value, build the system with your team, train to fluency, hand over.",
            "areaServed": [
                {"@type": "Continent", "name": "Europe"},
                {"@type": "Continent", "name": "North America"}
            ]
        }
    })

    return (
        <>
            <Hero />
            <TheProblem />
            <TheGapMethod />
            <Proof />
            <AntiHype />
            <IsThisRight />
            <WhyMe />
            <FAQ />
            <OtherServices current="/" />
            <Newsletter />
            <ClosingCTA />
        </>
    )
}
