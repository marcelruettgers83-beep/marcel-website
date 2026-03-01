import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, ArrowRight } from 'lucide-react'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS - Preset C: Brutalist Signal
   ═══════════════════════════════════════════════════════════════ */
const T = {
  paper: '#E8E4DD',
  signal: '#E63B2E',
  offwhite: '#F5F3EE',
  black: '#111111',
}

const BRAND = "Ruettgers Digital"
const CTA_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda"

/* ═══════════════════════════════════════════════════════════════
   A. NAVBAR
   ═══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 1000, width: 'calc(100% - 2.5rem)', maxWidth: '900px',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: scrolled ? 'rgba(245,243,238,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? `1px solid rgba(17,17,17,0.15)` : '1px solid transparent',
        borderRadius: '9999px',
        padding: '0.6rem 1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontFamily: '"Space Mono"', fontSize: '0.85rem', letterSpacing: '0.05em', color: scrolled ? T.black : T.paper, fontWeight: 700, textDecoration: 'none', transition: 'color 0.5s ease' }}>
          RD_
        </a>
        <a href={CTA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic"
          style={{ background: T.signal, color: T.offwhite, padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}>
          <span className="btn-slide" style={{ background: T.black }}></span>
          <span className="btn-label">Book Your Affiliate Program Diagnostic</span>
        </a>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════════
   B. HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  const elRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        y: 40, opacity: 0, duration: 1.1, stagger: 0.08,
        ease: 'power3.out', delay: 0.2,
      })
    }, elRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={elRef} id="hero" style={{
      height: '100dvh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end', paddingBottom: '12vh',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1800&auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top, ${T.black} 0%, rgba(17,17,17,0.85) 40%, rgba(17,17,17,0.4) 75%, transparent 100%)`,
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '0 6vw', maxWidth: '1200px' }}>
        <h1 style={{ margin: '0 0 1.5rem', lineHeight: 1.05 }}>
          <span className="hero-item" style={{
            display: 'block',
            fontFamily: '"Space Grotesk"',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: T.paper,
            letterSpacing: '-0.02em',
            marginBottom: '0.2rem',
            textTransform: 'uppercase',
          }}>
            Most Affiliate Programs Fail Before They Start.
          </span>
          <span className="hero-item font-drama" style={{
            display: 'block',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: T.offwhite,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginLeft: '-0.05em',
          }}>
            Yours Doesn't Have To.
          </span>
        </h1>

        <p className="hero-item" style={{ color: 'rgba(232,228,221,0.7)', fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', maxWidth: '750px', lineHeight: 1.6, margin: '0 0 2rem', fontFamily: '"Space Mono"' }}>
          I build affiliate and partner programs that actually work - then hand them to your team to run. No agency retainers. No 12-month contracts. Just a system that pays for itself.
        </p>

        <div className="hero-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href={CTA_LINK}
            target="_blank" rel="noreferrer"
            className="btn-magnetic" style={{
              background: T.signal, color: T.offwhite, padding: '1.25rem 2.5rem',
              borderRadius: '9999px', fontSize: '1rem', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: '0.75rem'
            }}>
            <span className="btn-slide" style={{ background: T.paper }}></span>
            <span className="btn-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit' }}>
              Book Your Affiliate Program Diagnostic <ArrowRight size={18} />
            </span>
          </a>
          <span className="font-data" style={{ color: 'rgba(232,228,221,0.4)', fontSize: '0.8rem', letterSpacing: '0.1em' }}><ChevronDown size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', animation: 'bounce 2s infinite' }} />SCROLL TO INSPECT</span>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   C. FEATURES (The Problem Agitation)
   ═══════════════════════════════════════════════════════════════ */
function ShufflerCard() {
  const items = [
    { label: 'Anyone with a pulse', sub: 'Coupon sites cannibalizing existing customers.' },
    { label: 'Zero Audience Overlap', sub: 'Content creators with no relevance.' },
    { label: 'Identify and Vet', sub: 'Quality partners don\'t just appear.' },
  ]
  const [cards, setCards] = useState([...items])

  useEffect(() => {
    const id = setInterval(() => {
      setCards(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <div style={{ width: 8, height: 8, background: T.signal }} />
        <span className="font-data" style={{ color: T.signal, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Issue #1</span>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {cards.map((card, i) => (
          <div key={card.label} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${i * 70}px`,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            background: i === 0 ? T.black : T.paper,
            border: `1px solid ${i === 0 ? T.black : 'rgba(17,17,17,0.1)'}`,
            borderRadius: '1rem', padding: '1rem 1.25rem',
            opacity: i > 2 ? 0 : 1 - i * 0.15,
            transform: `scale(${1 - i * 0.02})`,
          }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: i === 0 ? T.offwhite : T.black }}>{card.label}</div>
            <div style={{ fontSize: '0.8rem', color: i === 0 ? 'rgba(245,243,238,0.7)' : 'rgba(17,17,17,0.6)', marginTop: '0.25rem' }}>{card.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypewriterCard() {
  const messages = [
    'A flat 20% commission sounds generous...',
    'But with a 90-day sales cycle...',
    'And only tracking last-click...',
    'Best affiliates subsidize the worst...',
  ]
  const [msgIdx, setMsgIdx] = useState(0)
  const [text, setText] = useState('')
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (charIdx < messages[msgIdx].length) {
      const t = setTimeout(() => {
        setText(prev => prev + messages[msgIdx][charIdx])
        setCharIdx(c => c + 1)
      }, 40)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setMsgIdx(m => (m + 1) % messages.length)
        setText('')
        setCharIdx(0)
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [charIdx, msgIdx])

  const logs = [
    { time: '01:04', msg: 'Economics evaluated' },
    { time: '01:12', msg: 'Attribution tracked' },
    { time: '01:44', msg: 'Commission mismatch' },
  ]

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <div style={{ width: 8, height: 8, background: T.signal, animation: 'pulse-dot 1s infinite step-end' }} />
        <span className="font-data" style={{ color: T.signal, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Issue #2</span>
      </div>
      <div style={{ flex: 1, background: '#000', borderRadius: '0.5rem', padding: '1.25rem', fontFamily: '"Space Mono"', fontSize: '0.75rem', border: `1px solid rgba(255,255,255,0.1)` }}>
        {logs.map(l => (
          <div key={l.time} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>[{l.time}]</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{l.msg}</span>
          </div>
        ))}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <span style={{ color: T.signal }}>{`>`}</span>
          <span style={{ color: '#fff' }}>{text}<span style={{ borderRight: `8px solid ${T.signal}`, marginLeft: 2, animation: 'blink 1s step-end infinite' }}>&nbsp;</span></span>
        </div>
      </div>
    </div>
  )
}

function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [active, setActive] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const targets = [2, 4]
    let step = 0
    const run = () => {
      if (step < targets.length) {
        setPhase(1)
        setCursorPos({ x: targets[step] * 38 + 24, y: 44 })
        setTimeout(() => {
          setPhase(2)
          setActive(targets[step])
          step++
          setTimeout(run, 600)
        }, 500)
      } else {
        setTimeout(() => {
          setPhase(1)
          setCursorPos({ x: 220, y: 120 })
          setTimeout(() => {
            setActive(null)
            setPhase(0)
            step = 0
            setTimeout(run, 1500)
          }, 400)
        }, 1000)
      }
    }
    const init = setTimeout(run, 1000)
    return () => clearTimeout(init)
  }, [])

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <div style={{ width: 8, height: 8, background: T.black }} />
        <span className="font-data" style={{ color: T.black, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Issue #3</span>
      </div>
      <p style={{ fontSize: '0.9rem', color: 'rgba(17,17,17,0.7)', marginBottom: '1.5rem', lineHeight: 1.5, flex: 1 }}>
        The program lives in someone's side project folder. No onboarding flow, no content assets.
      </p>
      <div style={{ position: 'relative', padding: '1rem', background: '#fff', borderRadius: '0.5rem', border: '1px solid rgba(17,17,17,0.1)' }}>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'space-between' }}>
          {days.map((d, i) => (
            <div key={i} style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: active === i ? T.signal : 'transparent',
              border: `1px solid ${active === i ? T.signal : 'rgba(17,17,17,0.1)'}`,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              <span className="font-data" style={{ fontSize: '0.75rem', color: active === i ? '#fff' : 'rgba(17,17,17,0.4)', fontWeight: 700 }}>{d}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <div style={{ background: T.black, color: '#fff', fontSize: '0.65rem', padding: '0.4rem 0.8rem', fontFamily: '"Space Mono"' }}>ERROR: NO SYSTEMS</div>
        </div>

        {phase > 0 && (
          <svg className="scheduler-cursor" style={{
            position: 'absolute', top: cursorPos.y, left: cursorPos.x,
            width: 20, height: 20, fill: T.black, stroke: '#fff', strokeWidth: 1.5,
            pointerEvents: 'none', zIndex: 10,
            transform: phase === 2 ? 'scale(0.85)' : 'scale(1)'
          }} viewBox="0 0 24 24">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
        )}
      </div>
    </div>
  )
}

function Features() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feat-head', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.feat-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={{ padding: '8rem 6vw', background: T.offwhite }}>
      <div className="feat-head" style={{ marginBottom: '4rem', maxWidth: '850px' }}>
        <h2 style={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, margin: '0 0 1rem', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          The Three Ways Companies Botch Their Affiliate Programs
        </h2>
        <p style={{ fontFamily: '"Space Mono"', fontSize: '1rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.6 }}>
          Here's the pattern I see over and over. A company decides affiliate marketing is the next growth channel. Someone on the team signs up for a platform. They recruit a handful of partners. They wait. Six months later, it fails because nobody built the machine.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="feat-card">
          <ShufflerCard />
          <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>1. Wrong partners.</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.6 }}>Quality partners don't just appear - they need to be identified, vetted, and sold on why your program is worth their time.</p>
        </div>
        <div className="feat-card">
          <TypewriterCard />
          <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>2. Wrong incentives.</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.6 }}>Commission structures need to match your economics, not your competitor's homepage.</p>
        </div>
        <div className="feat-card">
          <SchedulerCard />
          <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>3. No systems.</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.6 }}>The program doesn't fail because affiliate marketing doesn't work. It fails because nobody built the machine.</p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   D. PHILOSOPHY
   ═══════════════════════════════════════════════════════════════ */
function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: 'power3.out'
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={{ position: 'relative', background: T.black, padding: '10rem 6vw', color: T.offwhite, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop')`,
        backgroundSize: 'cover', backgroundAttachment: 'fixed', opacity: 0.1, mixBlendMode: 'luminosity'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <p className="philo-text" style={{ fontFamily: '"Space Mono"', fontSize: '0.9rem', color: 'rgba(245,243,238,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
          Built to Run Without Me. <br /><span style={{ color: 'rgba(245,243,238,0.8)' }}>Built to Grow With Me.</span>
        </p>
        <h2 className="philo-text" style={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, margin: '0 0 1rem' }}>
          Agencies want you dependent.
        </h2>
        <h2 className="philo-text font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, color: T.signal }}>
          I build it so your team owns it.
        </h2>
        <p className="philo-text" style={{ fontFamily: '"Space Mono"', fontSize: '1.1rem', marginTop: '2rem', color: 'rgba(245,243,238,0.7)', maxWidth: '800px', margin: '2rem auto 0', lineHeight: 1.6 }}>
          The core program - platform, partners, tracking, playbooks - is yours after the build. Your team can run it independently from day one.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   E. PROTOCOL
   ═══════════════════════════════════════════════════════════════ */
function CircularAnim() {
  const ref = useRef(null)
  useEffect(() => {
    gsap.to(ref.current, { rotation: 360, duration: 20, repeat: -1, ease: 'linear' })
  }, [])
  return (
    <svg ref={ref} width="120" height="120" viewBox="0 0 120 120" stroke={T.black} fill="none" strokeWidth="1" style={{ opacity: 0.15 }}>
      <circle cx="60" cy="60" r="50" strokeDasharray="4 8" />
      <rect x="25" y="25" width="70" height="70" />
      <polygon points="60,10 110,110 10,110" />
    </svg>
  )
}

function GridAnim() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill={T.black} style={{ opacity: 0.15 }}>
      {[...Array(8)].map((_, r) => [...Array(8)].map((_, c) => (
        <rect key={`${r}-${c}`} x={c * 15 + 3} y={r * 15 + 3} width="9" height="9" />
      )))}
    </svg>
  )
}

function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.proto-card')
      cards.forEach((card, i) => {
        if (i === 0) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card, start: 'top 85%', end: 'top 20%', scrub: 0.5,
          },
          opacity: 0,
        })
        ScrollTrigger.create({
          trigger: card, start: 'top 75%',
          onEnter: () => {
            if (cards[i - 1]) {
              gsap.to(cards[i - 1], { scale: 0.95, filter: 'blur(8px)', opacity: 0.3, duration: 0.6, ease: 'power2.inOut' })
            }
          },
          onLeaveBack: () => {
            if (cards[i - 1]) {
              gsap.to(cards[i - 1], { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.6, ease: 'power2.inOut' })
            }
          }
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { num: '01', title: 'Phase 1: Diagnose (Week 1-2)', desc: 'I run a full diagnostic on your current setup. Audit tracking gaps, map competitive landscape, and identify ideal partner profiles.', anim: <CircularAnim /> },
    { num: '02', title: 'Phase 2: Build (Week 3-8)', desc: 'I build the complete program. Platform setup, commission design, partner recruitment, creative assets, tracking, and fraud prevention.', anim: <GridAnim /> },
    { num: '03', title: 'Phase 3: Transfer (Week 7-8)', desc: 'I train your team to run everything I built. Hands-on training, operations playbook, performance dashboards, and post-handoff support.', anim: <CircularAnim /> },
  ]

  return (
    <section ref={containerRef} style={{ padding: '8rem 6vw', background: T.paper }}>
      <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.black, textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1rem' }}>
          The Affiliate Architecture Method
        </h2>
        <p style={{ fontFamily: '"Space Mono"', fontSize: '0.9rem', color: 'rgba(17,17,17,0.7)', lineHeight: 1.6 }}>
          I don't manage affiliate programs. I build them, train your team, and get out of the way. Three phases. Six to eight weeks. You own everything when I leave.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {steps.map((s, i) => (
          <div key={s.num} className="proto-card" style={{
            background: T.offwhite, border: `2px solid ${T.black}`, padding: 'clamp(2rem, 5vw, 4rem)',
            position: 'sticky', top: `${6 + i * 2}rem`, willChange: 'transform, opacity, filter',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'
          }}>
            <div style={{ flex: 1 }}>
              <span className="font-data" style={{ color: T.signal, fontSize: '1.25rem', display: 'block', marginBottom: '1rem' }}>[{s.num}]</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem', textTransform: 'uppercase' }}>{s.title}</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(17,17,17,0.7)', lineHeight: 1.6, maxWidth: '500px' }}>{s.desc}</p>
            </div>
            <div style={{ display: 'none', '@media (minWidth: 768px)': { display: 'block' } }}>
              {s.anim}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   F. PRICING / OFFERS
   ═══════════════════════════════════════════════════════════════ */
function Offers() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.offer-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out'
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const tiers = [
    { name: 'Affiliate Program Diagnostic', price: '$3k - $5k', desc: 'Current program audit/opportunity assessment, competitive analysis, partner mapping, commission recommendations, platform evaluation.', highlight: false },
    { name: 'Full Affiliate Program Build', price: '$8k - $15k', desc: 'Everything in Diagnostic + Platform setup, recruitment, content assets, tracking/attribution, fraud prevention, team training.', highlight: true },
    { name: 'Growth Retainer', price: '$2.5k / mo', desc: 'Monthly performance review, next-wave recruitment, commission adjustments, quarterly strategic reviews, and async access.', highlight: false },
  ]

  return (
    <section ref={ref} style={{ padding: '8rem 6vw', background: T.offwhite }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1rem' }}>How We Work Together</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {tiers.map((t) => (
          <div key={t.name} className="offer-card" style={{
            background: t.highlight ? T.black : T.paper,
            color: t.highlight ? T.offwhite : T.black,
            padding: '3rem 2rem', border: `2px solid ${T.black}`, display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: '"Space Mono"', margin: '0 0 1rem' }}>{t.name}</h3>
            <div className="font-drama" style={{ fontSize: '2.5rem', margin: '0 0 1.5rem', color: t.highlight ? T.signal : T.black }}>{t.price}</div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.8, flex: 1, marginBottom: '2rem' }}>{t.desc}</p>
            <a href={CTA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic" style={{
              background: t.highlight ? T.signal : T.black, color: T.offwhite, padding: '1rem', textAlign: 'center',
              fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem'
            }}>
              <span className="btn-slide" style={{ background: t.highlight ? T.paper : T.signal }}></span>
              <span className="btn-label" style={{ color: t.highlight ? 'inherit' : '#fff' }}>Select Option</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   G. FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{
      background: T.black, color: T.offwhite, padding: '4rem 6vw 2rem',
      borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem'
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', fontFamily: '"Space Mono"', fontWeight: 700 }}>{BRAND}_</h2>
          <p style={{ color: 'rgba(245,243,238,0.5)', fontSize: '0.9rem', maxWidth: '300px' }}>High-performance affiliate systems for growing tech companies.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.25rem', borderRadius: '9999px' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF00', animation: 'pulse-dot 2s infinite' }} />
          <span className="font-data" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#00FF00' }}>SYSTEM OPERATIONAL</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '1rem' }}>
        <span className="font-data" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy</a>
          <a href="#" className="font-data link-lift" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Offers />
      <Footer />
    </>
  )
}
