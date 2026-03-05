import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X } from 'lucide-react'
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
                        Your Business Has Traction.
                    </span>
                    <span className="hero-item font-drama" style={{
                        display: 'block',
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: T.offwhite,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        marginLeft: '-0.05em',
                    }}>
                        Your Systems Don't.
                    </span>
                </h1>

                <p className="hero-item" style={{ color: 'rgba(232,228,221,0.9)', fontSize: 'clamp(1rem, 1.25vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem', fontFamily: '"Space Mono"' }}>
                    I build growth systems for founder-led companies between $1M and $10M - so you stop being the bottleneck. I diagnose what's broken in your go-to-market, build the fix with your team, and hand it over so it runs without me.
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

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span className="prob-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE PROBLEM</span>
                <h2 className="prob-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 2rem' }}>
                    The Pattern I See at Every Company at This Stage.
                </h2>

                <div className="prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>You have traction. Revenue is real. But growth keeps getting harder, not easier.</p>
                    <p>Leads come in and sit too long. Deals stall in a pipeline where "qualified" means something different to everyone. Marketing and sales blame each other. Your CRM says one thing; your bank account says another.</p>
                    <p>And you're still in every decision. Not because you want to be - because nothing runs without you.</p>
                    <p>I've seen this pattern from the inside - 20 years across enterprise operations and high-growth startups. The problem is always the same. It isn't talent. It isn't budget. <strong>It's that everything runs through you - and nothing is designed to stop.</strong></p>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   3. HOW I WORK (The X-Ray)
   ═══════════════════════════════════════════════════════════════ */
function HowIWork() {
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
        { n: '1', title: 'Diagnose (Week 1-2)', desc: "I map your entire go-to-market end-to-end. You get a diagnostic report with clear answers, not caveats." },
        { n: '2', title: 'Fix the Foundation (Week 3-4)', desc: "Before building anything new, I fix what's broken. Data, handoffs, pipeline definitions, reporting. In my experience, 80% of growth problems are plumbing problems. I fix the plumbing first." },
        { n: '3', title: 'Build (Week 5+)', desc: "Workflows, playbooks, automation - designed for your team's actual capacity. Not theoretical capacity. Not what the org chart says. What your people can actually run when I'm gone. Your team builds alongside me. That's not optional. I've watched enough handoffs fail to know: systems the team didn't help build die the week you leave them alone." },
        { n: '4', title: 'Hand Over', desc: "I train your team to run everything without me. Then I step into advisory - available for the decisions that matter, gone for everything else. That's when the shift happens: growth stops being something you push and starts being something your system produces. The best outcome is the one where you don't need me anymore." }
    ]

    return (
        <section ref={containerRef} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>HOW I WORK</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 1.5rem' }}>
                    The X-Ray.
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    <p>Every engagement starts with a diagnostic. Before I touch anything in your business, I need to see the whole picture - not what your dashboard says, but what's actually happening.</p>
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
                <p className="font-data" style={{ marginTop: '1.5rem', color: 'rgba(17,17,17,0.5)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>TWO WEEKS TO FULL CLARITY ON WHAT'S BROKEN AND WHAT TO FIX FIRST.</p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   4. PROOF
   ═══════════════════════════════════════════════════════════════ */
function Proof() {
    return (
        <section style={{ padding: '8rem 6vw', background: '#e1ddd6', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Results in Numbers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem', textAlign: 'center' }}>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>800%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>CUSTOMER GROWTH IN 9 MONTHS</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>2 Weeks</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>FROM DIAGNOSTIC TO FULL CLARITY</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>20 Years</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>ENTERPRISE OPS + HIGH-GROWTH STARTUPS</p>
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
   5. IS THIS RIGHT FOR YOU? & HOW WE WORK TOGETHER
   ═══════════════════════════════════════════════════════════════ */
function IsThisRight() {
    const engagements = [
        { name: 'The X-Ray', timeline: '2 WEEKS', desc: "A full diagnostic of your go-to-market. You get a clear report showing exactly what's broken and a prioritized roadmap to fix it. Most people start here because it answers the question they've been guessing at for months.", highlight: false },
        { name: 'Strategy Buildout', timeline: '4-8 WEEKS', desc: "Full systems design, implementation, and team training. I build the fix with your team so they own it when I leave. Workflows, playbooks, automation - designed for your team's actual capacity.", highlight: true },
        { name: 'Advisory Retainer', timeline: 'ONGOING', desc: 'For when the buildout is done and you want strategic access without the full engagement. Available for the decisions that matter, gone for everything else.', highlight: false },
    ]

    return (
        <section style={{ padding: '8rem 6vw', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Fit / Not Fit */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Who this is for.</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            You're past $1M. Growth is real but it feels harder than it should. You've tried hiring for it and the bottleneck didn't move - because the bottleneck isn't people, it's architecture. Your pipeline tells you a story that doesn't match your bank account. You're ready to build something that works without you pushing it every day.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#991B1B' }}>
                            <X size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Who this isn't for.</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            If you need someone to run your ads and emails daily, that's an agency - not me. If you're pre-revenue, the honest advice is: sell first, systematize second.
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
                        Or <a href="mailto:hello@ruettgersdigital.com" style={{ color: T.signal, textDecoration: 'underline' }}>send me an email</a> if you'd prefer to start there.
                    </p>
                </div>

            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   6. FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQ() {
    const faqs = [
        { q: "We've tried consultants before. How are you different?", a: "Yeah, I hear this a lot. Here's what usually happened: someone gave you a strategy deck, maybe a few workshops, then moved on. The deck is sitting in a Google Drive folder right now. Nothing changed.\nI don't do that. I'm in your CRM, in your workflows, building the thing with your team - because strategy that doesn't work in practice isn't strategy. It's a PDF." },
        { q: "Why not just hire a full-time Head of Growth?", a: "A senior growth leader costs $150K to $200K a year - plus three to six months to find, hire, and onboard them. And if your systems are broken, you're hiring someone into a mess. They'll spend their first six months diagnosing problems I can find in two weeks.\nI come in, fix the architecture, and build the infrastructure. Then you hire into a working system - or you don't, because the systems run without a dedicated person. Either way, you're in a better position." },
        { q: "How long until we see results?", a: "The diagnostic takes two weeks. You'll have full clarity on what's broken and what to fix first.\nAfter that, most companies see quick wins within the first month of implementation - usually in pipeline visibility, lead response time, and reporting accuracy. The full system buildout runs four to eight weeks depending on complexity. But the real shift happens earlier: once your team stops guessing and starts operating from a clear plan, the drag disappears fast." },
        { q: "What does the diagnostic actually include?", a: "A full audit of your go-to-market, end to end. I map your pipeline stages, lead flow, handoff points, CRM data quality, marketing-to-sales alignment, reporting accuracy, and conversion bottlenecks.\nYou get a written report with specific findings - not a deck with buzzwords - and a prioritized action plan your team can execute against. If your systems aren't the problem, I'll tell you. You walk away with the diagnostic regardless." },
        { q: "Do you work with remote or distributed teams?", a: "Yes. Most of my clients are remote or hybrid. I work async by default - structured updates, shared dashboards, documented decisions. The diagnostic and buildout work just as well over video as they do in person. I've done this across time zones from Amsterdam to San Francisco." },
        { q: "What if our team pushes back on changes?", a: "This is exactly why I build with your team, not for them. When people help design the system, they actually run it.\nI've seen enough top-down implementations die on arrival. The playbooks, workflows, and dashboards your team builds alongside me are the ones they'll use after I leave. Adoption isn't a compliance problem - it's a design problem. We solve it from day one." },
        { q: "Can you work with our existing tools and tech stack?", a: "Yes. I work with whatever you have - HubSpot, Salesforce, Pipedrive, custom setups. The problem is almost never the tools. It's how they're connected and whether anyone is using them consistently.\nI fix the architecture, not the vendor. If a tool genuinely isn't fit for purpose, I'll tell you. But most of the time, the stack you have is fine. It just needs to be wired together properly." }
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
        <section style={{ padding: '8rem 6vw', background: T.offwhite }}>
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
   7. NEWSLETTER
   ═══════════════════════════════════════════════════════════════ */
function Newsletter() {
    return (
        <section style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE NEWSLETTER</span>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, textTransform: 'uppercase', margin: '0 0 1.5rem' }}>
                    Weekly Systems Thinking for Growth Leaders.
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.7)', margin: '0 0 2.5rem' }}>
                    One essay per week on growth, systems, and the decisions that compound. No hacks. No templates. Just clear thinking from 20 years of building what works.
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
   8. CLOSING CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
    return (
        <section style={{ padding: '10rem 6vw', color: T.offwhite, textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(217,119,87,0.20) 0%, transparent 70%), linear-gradient(to bottom, #0e0e12 0%, #111111 100%)` }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 2rem', textTransform: 'uppercase' }}>
                    Two Weeks From Now, You'll Know Exactly What's Broken.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>Right now you're making growth decisions based on incomplete data and gut feel. You know it. Your team knows it.</p>
                    <p>Two weeks from now, you won't have to. The X-Ray gives you the full picture - what's broken, what's actually working, and what to fix first. That clarity alone is worth more than most consulting engagements you've paid for.</p>
                    <p>If we're the right fit, we keep going. If not, you still walk away with the diagnostic. No ambiguity either way.</p>
                    <p style={{ fontStyle: 'italic', color: 'rgba(245,243,238,0.6)' }}>It starts with a 30-minute call. If we're the right fit, the diagnostic runs over two weeks. You'll know exactly what to fix and in what order.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_XRAY_TEXT} />
            </div>
        </section>
    )
}

export default function Home() {
    useSEO({
        title: 'Growth Systems for Founder-Led Companies | Ruettgers Digital',
        description: "I build growth systems for founder-led companies between $1M and $10M. Diagnose what's broken, build the fix, hand it over.",
        canonical: 'https://ruettgersdigital.com/',
        ogImage: 'https://ruettgersdigital.com/og-image.jpg',
    })

    return (
        <>
            <Hero />
            <TheProblem />
            <HowIWork />
            <Proof />
            <IsThisRight />
            <FAQ />
            <OtherServices current="/" />
            <Newsletter />
            <ClosingCTA />
        </>
    )
}
