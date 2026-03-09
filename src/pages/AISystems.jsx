import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Clock, Database, Bot, ShieldAlert } from 'lucide-react'
import { T, MagneticButton, CTA_LINK, OtherServices } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

const CTA_AI = "Book an AI Systems Audit"

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
    const elRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.ai-hero-item', {
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
                    <span className="ai-hero-item" style={{
                        display: 'block',
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 700,
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        color: T.paper,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.2rem',
                        textTransform: 'uppercase',
                    }}>
                        You Bought the AI Tools.
                    </span>
                    <span className="ai-hero-item font-drama" style={{
                        display: 'block',
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: T.offwhite,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        marginLeft: '-0.05em',
                    }}>
                        Nobody Built the System.
                    </span>
                </h1>

                <p className="ai-hero-item" style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.25vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem', fontFamily: '"Space Mono"' }}>
                    95% of AI pilots produce zero business impact. Not because the technology fails. Because nobody builds the system around it. I design and implement AI-powered growth systems for revenue teams - speed-to-lead, outbound, CRM automation - then hand them to your team to run.
                </p>

                <div className="ai-hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <MagneticButton href={CTA_LINK} label={CTA_AI} />
                </div>
                <p className="ai-hero-item font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>30 MINUTES. NO PITCH DECK.</p>
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
            gsap.from('.ai-prob-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const problems = [
        {
            icon: <Clock size={28} />,
            title: 'The Speed-to-Lead Gap.',
            desc: "78% of customers buy from whoever responds first. Your average response time is 42 hours. The math is brutal: by the time your team picks up the phone, your prospect has already opened four other tabs. Over 40% of high-intent inquiries arrive after hours. Nobody's home."
        },
        {
            icon: <Database size={28} />,
            title: 'The CRM Graveyard.',
            desc: "Your reps spend 10 minutes after every call updating deal stage and next steps. When they're busy, they skip it. Pipeline data goes stale. Forecasts become guesswork. The CRM tells you one story, your bank account tells another. Businesses waste $30 billion a year on software nobody actually uses."
        },
        {
            icon: <Bot size={28} />,
            title: 'The Chatbot Backlash.',
            desc: "You deployed an AI SDR. It burned through your prospect database in two months. Reply rate: 0.3%. The emails read like ChatGPT wrote them for a generic audience - because it did. Your chatbot can't answer basic questions. 60% of your customers still prefer talking to a human. They're not wrong."
        },
        {
            icon: <ShieldAlert size={28} />,
            title: 'Expensive Shelf-Ware.',
            desc: "One company spent $20,000 on an AI SDR tool over six months. Closed two deals. The tool worked fine. The implementation didn't. This is the pattern everywhere: martech utilization sits at 33%. Two-thirds of what you're paying for is doing nothing."
        }
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="ai-prob-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE PROBLEM</span>
                <h2 className="ai-prob-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
                    Four Ways Companies Waste Money on AI.
                </h2>

                <div className="ai-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>The pattern is always the same. Someone buys a tool, sets it up based on whatever the vendor demo showed, and waits for the results the sales deck promised. Six months and $50,000 later, the tool is doing exactly what it was designed to do. The problem is nobody designed the system around it.</p>
                </div>

                <div className="ai-prob-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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

                <div className="ai-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)' }}>
                    <p><strong>This is a strategy problem. Not a technology problem. The tech works. Most implementations don't.</strong></p>
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
            const cards = gsap.utils.toArray('.ai-method-card')
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
            n: '1', title: 'Audit (Week 1-2)',
            desc: "I map your entire revenue operation end-to-end. Every touchpoint from first contact to closed deal. Where are leads dying? Where are reps spending time on work a system should handle? Where does AI create real leverage - and where is it theater? You get a clear-eyed report. Not a pitch for more tools."
        },
        {
            n: '2', title: 'Design (Week 3)',
            desc: "Architecture the system. Which processes get automated, which stay human, how they connect. Speed-to-lead routing. Qualification logic. Outbound sequencing. CRM workflows. Every design decision documented with the reasoning behind it. Human-in-the-loop is the default, not the exception."
        },
        {
            n: '3', title: 'Build (Week 4-6)',
            desc: "Build the actual workflows in your existing tools. Lead routing that responds in minutes, not hours. CRM automation that keeps pipeline data honest without reps doing data entry. Outbound sequences based on real buying signals, not spray-and-pray lists. Your team builds alongside me. That's not optional."
        },
        {
            n: '4', title: 'Train (Week 7)',
            desc: "Your team learns to operate and maintain everything. Not a demo with dummy data. Hands-on with their actual pipeline, their actual leads, their actual CRM. They need to understand the logic behind every workflow - because the team that understands the system is the team that improves it."
        },
        {
            n: '5', title: 'Hand Over (Week 8)',
            desc: "Full documentation. Runbooks. Performance dashboards. Everything your team needs to run and iterate without me. Advisory retainer available for the strategic decisions that come up - but the system runs on its own. The best outcome is the one where you don't need me anymore."
        }
    ]

    return (
        <section ref={containerRef} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE METHOD</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 1.5rem' }}>
                    Implementation That Actually Sticks.
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    <p>This follows the same Growth Architecture Method I use across all engagements - applied here to your AI revenue infrastructure. Every engagement starts with understanding where AI creates real leverage and where it doesn't. Not every process needs automation. The ones that do need it built right - with your team, in your tools, designed for your actual capacity.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                {phases.map((s, i) => (
                    <div key={s.n} className="ai-method-card" style={{
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
                <MagneticButton href={CTA_LINK} label={CTA_AI} dark={true} />
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
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>78%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>BUY FROM WHOEVER RESPONDS FIRST</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>42 Hours</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>AVERAGE B2B LEAD RESPONSE TIME</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>95%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>OF AI PILOTS YIELD ZERO IMPACT</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   5. ANTI-HYPE (What I Won't Do — side-by-side comparison)
   ═══════════════════════════════════════════════════════════════ */
function AntiHype() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.ai-anti-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const vendorItems = [
        'Replace your sales team with chatbots',
        'Spray-and-pray outbound at scale',
        'Black-box AI nobody on your team understands',
        'Sell you more tools on top of unused ones',
        'Promise "10x results" in 30 days'
    ]

    const myItems = [
        'AI amplifies your team, never replaces them',
        'Signal-based outbound to qualified prospects only',
        'Every system documented, your team operates it',
        'Fix the architecture before adding tools',
        'Honest assessment of where AI helps and where it doesn\'t'
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="ai-anti-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE STAND</span>
                <h2 className="ai-anti-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 2rem' }}>
                    What I Won't Do.
                </h2>

                <div className="ai-anti-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem' }}>
                    <p>Most AI vendors are incentivized to sell you autonomy. Fully automated pipelines. AI that "thinks for you." The pitch sounds great. The results don't show up. I take the opposite approach: AI handles the repetitive work so your people can focus on the work that actually requires a human.</p>
                </div>

                <div className="ai-anti-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
            gsap.from('.ai-who-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.offwhite }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="ai-who-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Post-Traction Companies</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            Revenue past $1M. You have a sales process that works manually. Leads come in, deals close, customers renew. But it's slow, inconsistent, and entirely dependent on individual reps doing everything right every time. You want to make it faster and more reliable without losing the human touch that got you here.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Teams Drowning in Tools</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            You have the CRM, the outreach platform, the analytics dashboard, the AI assistant. None of them talk to each other. Leads fall through cracks between systems. Follow-ups are manual. Your reps spend more time on data entry than selling. The tools aren't the problem. The wiring is.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#991B1B' }}>
                            <X size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>This Isn't For You</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            If you're pre-revenue, fix the product first. If you want a chatbot to replace your customer service team, that's not what I build. If you're looking for a magic button that does the selling for you - that doesn't exist. This is for companies willing to do the strategy work that makes AI actually useful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   7. WHY ME (credibility + testimonial + stats)
   ═══════════════════════════════════════════════════════════════ */
function WhyMe() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.ai-why-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="ai-why-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>WHY ME</span>
                <div className="ai-why-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>At Blaze.ai, I built the AI-powered growth engine that scaled the company from 300 to 2,700 customers per month. Partner programs, marketing automation, revenue operations - all wired together into one system. Before that, I spent 15 years in enterprise operations at IKEA building processes designed to survive after the person who built them leaves.</p>
                    <p style={{ marginTop: '1.5rem' }}>I use AI every day to run growth operations. Not as a demo. As the actual operating system. The method works because I run it myself. Not last year. This morning.</p>
                </div>

                <div className="ai-why-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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

                    {/* Stat cards */}
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
   8. CLOSING CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
    return (
        <section style={{ padding: '10rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 2rem', textTransform: 'uppercase' }}>
                    Your Competitors Are Already Building This.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>Speed-to-lead is a compounding advantage. Every day your team responds in 42 hours while a competitor responds in 5 minutes is a day you lose deals you never knew you had. That gap widens every month.</p>
                    <p>Start with the audit. Two weeks. You'll know exactly where AI creates real leverage in your revenue operation and where it's just noise. If the answer is "you don't need AI here," I'll tell you that too.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_AI} />
            </div>
        </section>
    )
}

export default function AISystems() {
    useSEO({
        title: 'AI Systems Audit & Implementation for Revenue Teams | Ruettgers Digital',
        description: "AI-powered growth systems that actually work. Speed-to-lead, CRM automation, outbound agents. Built with your team, handed over to run. Based in Amsterdam.",
        canonical: 'https://www.ruettgersdigital.com/ai-systems',
        ogImage: 'https://www.ruettgersdigital.com/og-image.jpg',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.ruettgersdigital.com/' },
            { name: 'AI Systems', url: 'https://www.ruettgersdigital.com/ai-systems' }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Systems Audit & Implementation",
            "provider": {
                "@type": "ProfessionalService",
                "name": "Ruettgers Digital",
                "url": "https://www.ruettgersdigital.com",
                "address": { "@type": "PostalAddress", "addressLocality": "Amsterdam", "addressCountry": "NL" }
            },
            "description": "AI-powered growth systems implementation for revenue teams. Speed-to-lead, outbound agents, CRM automation. Built with your team, handed over to run.",
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
            <TheMethod />
            <Proof />
            <AntiHype />
            <WhoThisIsFor />
            <WhyMe />
            <OtherServices current="/ai-systems" />
            <ClosingCTA />
        </>
    )
}
