import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Repeat, Clock, Wrench } from 'lucide-react'
import { T, MagneticButton, CTA_LINK, CTA_TRAINING_TEXT, OtherServices } from '../components/Shared'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
    const elRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.train-hero-item', {
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
                    <span className="train-hero-item" style={{
                        display: 'block',
                        fontFamily: '"Space Grotesk"',
                        fontWeight: 700,
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        color: T.paper,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.2rem',
                        textTransform: 'uppercase',
                    }}>
                        Your Team Has AI Tools.
                    </span>
                    <span className="train-hero-item font-drama" style={{
                        display: 'block',
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: T.offwhite,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        marginLeft: '-0.05em',
                    }}>
                        They Don't Have a System.
                    </span>
                </h1>

                <p className="train-hero-item" style={{ color: 'rgba(232,228,221,0.8)', fontSize: 'clamp(1rem, 1.25vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem', fontFamily: '"Space Mono"' }}>
                    I train marketing teams and agencies to build AI-powered operating systems. One person does the work of five without the overhead of five. Not a course. Not a webinar. Hands-on training in your actual workflows, with your actual tools.
                </p>

                <div className="train-hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <MagneticButton href={CTA_LINK} label={CTA_TRAINING_TEXT} />
                </div>
                <p className="train-hero-item font-data" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>30 MINUTES. NO PITCH DECK.</p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   2. THE PROBLEM (intro + icon cards)
   ═══════════════════════════════════════════════════════════════ */
function TheProblem() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.train-prob-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const problems = [
        {
            icon: <Repeat size={28} />,
            title: 'Same Work, Fancier Tools.',
            desc: "Your team uses GPT, Claude, and Midjourney the same way they used the last generation of tools. One task at a time, copied and pasted between eight browser tabs."
        },
        {
            icon: <Clock size={28} />,
            title: 'Manual Everything.',
            desc: "Building campaigns. Pulling reports. Managing ad spend. Qualifying leads. Your best people spend their days on work a well-built system handles in minutes."
        },
        {
            icon: <Wrench size={28} />,
            title: 'Adoption Without Architecture.',
            desc: "Everyone has the tools. Nobody wired them together. The adoption happened. The architecture didn't. That's the gap."
        }
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF', color: T.black }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="train-prob-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>THE PROBLEM</span>
                <h2 className="train-prob-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
                    You Bought the Tools. Nobody Built the System.
                </h2>

                <div className="train-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>I've seen this in every marketing team I've worked with in the last two years. Half a dozen AI tools, zero orchestration. The actual work still happens manually.</p>
                </div>

                <div className="train-prob-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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

                <div className="train-prob-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)' }}>
                    <p><strong>That's the gap I close.</strong></p>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   3. WHAT YOU LEARN
   ═══════════════════════════════════════════════════════════════ */
function WhatYouLearn() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.train-learn-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    const capabilities = [
        "Connect directly to your ad platforms, your CRM, your analytics, your email tools. Through their APIs, not their UIs.",
        "Generate hundreds of ad variations from real customer pain points scraped from Reddit and review sites. Bulk-upload them as drafts to Meta or Google in one command.",
        "Build dashboards that don't just show data but act on it. Kill underperformers. Scale winners. Flag anomalies before your team even opens the platform.",
        "Your team builds these workflows for their actual stack. Not theoretical demos with dummy data. Their campaigns, their tools, their clients."
    ]

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span className="train-learn-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>WHAT YOU LEARN</span>
                <h2 className="train-learn-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 2rem' }}>
                    One Person. Twelve Campaigns. Zero Busywork.
                </h2>

                <div className="train-learn-fade" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem' }}>
                    <p>Right now, your team works like musicians playing solo. One person writes copy. Another pulls analytics. Someone else builds the campaign in the ad platform. Each task is linear, manual, and bottlenecked on whoever's doing it.</p>
                    <p style={{ marginTop: '1.5rem' }}>After this training, they work like a conductor. One person orchestrating the whole operation from a single interface. What used to take four hours to build - one campaign, fully loaded - takes twelve minutes.</p>
                </div>

                <div className="train-learn-fade" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                    {capabilities.map((cap, i) => (
                        <div key={i} style={{
                            background: T.offwhite, border: `1px solid rgba(17,17,17,0.1)`,
                            padding: '1.5rem 2rem', borderRadius: '1rem',
                            fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)'
                        }}>
                            {cap}
                        </div>
                    ))}
                </div>

                <div className="train-learn-fade" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                    <p><strong>The person who used to manage two campaigns now manages twelve.</strong> Not by working harder. By building a system that does the middle work.</p>
                </div>
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
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>4h &rarr; 12min</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>CAMPAIGN BUILD TIME REDUCTION</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>12x</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>CAMPAIGN OUTPUT PER PERSON</p>
                    </div>
                    <div>
                        <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.signal, marginBottom: '0.5rem' }}>1 Week</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(17,17,17,0.6)', margin: 0 }}>TO FIRST AUTOMATED WORKFLOWS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   5. HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */
function HowItWorks() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.train-how-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.offwhite }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="train-how-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>HOW IT WORKS</span>
                <h2 className="train-how-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1, margin: '0 0 1.5rem' }}>
                    Two Formats. Both Hands-On.
                </h2>

                <div className="train-how-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {/* Live Workshops */}
                    <div style={{
                        background: '#FFFFFF', border: `2px solid ${T.black}`,
                        padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '2rem',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', display: 'block', marginBottom: '1rem', letterSpacing: '0.1em' }}>FORMAT 1</span>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1.5rem', textTransform: 'uppercase' }}>Live Workshops</h3>
                        <div style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.7)', lineHeight: 1.7, flex: 1 }}>
                            <p style={{ margin: '0 0 1.5rem' }}>For teams of 3 to 15. One or two intensive days. You bring your actual tools, actual campaigns, actual data. By the end, your team has built working automations they take back to the office and run the next morning.</p>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>A campaign launcher that generates and uploads ad variations in bulk.</li>
                                <li>A reporting layer that flags problems before you see them.</li>
                                <li>Custom workflows designed for your stack.</li>
                            </ul>
                            <p style={{ margin: '1.5rem 0 0', fontWeight: 600 }}>Not slides. Not theory.</p>
                        </div>
                    </div>

                    {/* 1-on-1 Consulting */}
                    <div style={{
                        background: T.black, color: T.offwhite, border: `2px solid ${T.black}`,
                        padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '2rem',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', display: 'block', marginBottom: '1rem', letterSpacing: '0.1em' }}>FORMAT 2</span>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1.5rem', textTransform: 'uppercase' }}>1-on-1 Consulting</h3>
                        <div style={{ fontSize: '1.05rem', color: 'rgba(245,243,238,0.7)', lineHeight: 1.7, flex: 1 }}>
                            <p style={{ margin: '0 0 1.5rem' }}>For agency owners or marketing leads who want a custom implementation. I audit your current workflow, design the orchestration layer, build it with you, and train your team to run it.</p>
                            <p style={{ margin: 0 }}>Same model as my growth work: build, train, hand over. The goal is a system you own. Not a dependency on me.</p>
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
            gsap.from('.train-who-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="train-who-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Marketing Teams</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            That have adopted AI tools but still work one task at a time. You know there's more potential in the stack. You just haven't had someone show you how to wire it together.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#166534' }}>
                            <Check size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>Agency Owners</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            Who want to serve more clients without hiring more people. The math is simple: if your team can produce 3x the output per client, you either take on more clients or deliver dramatically better work for the ones you have. Or both.
                        </p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#991B1B' }}>
                            <X size={24} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>This Isn't For You</h3>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(17,17,17,0.8)' }}>
                            If you're looking for a ChatGPT tutorial or a prompt engineering workshop. This is for operators who want to build a machine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════════════
   7. WHY ME (expanded)
   ═══════════════════════════════════════════════════════════════ */
function WhyMe() {
    const ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.train-why-fade', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} style={{ padding: '8rem 6vw', background: T.paper }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span className="train-why-fade font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>WHY ME</span>
                <h2 className="train-why-fade" style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 2rem' }}>
                    I Built the System I'm Teaching You.
                </h2>

                <div className="train-why-fade" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.8)', marginBottom: '3rem', maxWidth: '800px' }}>
                    <p>I spent 15 years building growth systems across enterprise operations at IKEA and high-growth startups. Then I used that experience at Blaze.ai, where AI-powered workflows helped drive 800% customer growth in 9 months.</p>
                    <p style={{ marginTop: '1.5rem' }}>I use AI every day to run growth operations, build campaigns, pull data, and manage workflows across multiple clients. The method works because I run it myself. Not last year. This morning.</p>
                </div>

                <div className="train-why-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                        <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>20 Years</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>ENTERPRISE + STARTUP SYSTEMS</p>
                    </div>
                    <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                        <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>800%</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>GROWTH USING THESE METHODS</p>
                    </div>
                    <div style={{ background: T.black, color: T.offwhite, padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                        <div className="font-drama" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: T.signal, marginBottom: '0.5rem' }}>Daily</div>
                        <p className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'rgba(245,243,238,0.6)', margin: 0 }}>AI WORKFLOW PRACTITIONER</p>
                    </div>
                </div>

                <div className="train-why-fade" style={{ background: T.offwhite, padding: '2.5rem', borderRadius: '1.5rem' }}>
                    <p className="font-drama" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: T.black, marginBottom: '1.5rem' }}>
                        "A true force multiplier for any team that wants to move fast without breaking things."
                    </p>
                    <div className="font-data" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: T.signal }}>
                        JOE GIRTON — CHIEF OF STAFF, BLAZE.AI
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', marginTop: '0.25rem' }}>AI content platform</div>
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
                    The Teams That Figure This Out First Win the Next 18 Months.
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,243,238,0.8)', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>Right now, most marketing teams are using AI the way people used the internet in 1998. For email and basic search. The teams that learn to orchestrate it will have a compounding advantage that's nearly impossible to catch once it's built.</p>
                    <p>You're not a little behind. You're about to be 18 months behind.</p>
                    <p>But here's the thing: this isn't a six-month transformation. Most teams I train are running their first automated workflows within a week. The system compounds from there.</p>
                </div>

                <p className="font-data" style={{ color: T.signal, fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>30 MINUTES. NO PITCH DECK.</p>
                <MagneticButton href={CTA_LINK} label={CTA_TRAINING_TEXT} />
            </div>
        </section>
    )
}

export default function Training() {
    useEffect(() => {
        document.title = 'AI Training for Marketing Teams | Ruettgers Digital'
    }, [])

    return (
        <>
            <Hero />
            <TheProblem />
            <WhatYouLearn />
            <Proof />
            <HowItWorks />
            <WhoThisIsFor />
            <WhyMe />
            <OtherServices current="/training" />
            <ClosingCTA />
        </>
    )
}
