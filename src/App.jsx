import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, Twitter, ArrowUpRight, Menu, X, MapPin, ChevronDown } from 'lucide-react'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS - Preset A: Organic Tech
   ═══════════════════════════════════════════════════════════════ */
const T = {
  moss: '#2E4036',
  clay: '#CC5833',
  cream: '#F2F0E9',
  charcoal: '#1A1A1A',
}

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
        background: scrolled ? 'rgba(242,240,233,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid rgba(46,64,54,0.15)' : '1px solid transparent',
        borderRadius: '9999px',
        padding: '0.6rem 1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.85rem', letterSpacing: '0.05em', color: scrolled ? T.moss : T.cream, fontWeight: 700, textDecoration: 'none', transition: 'color 0.5s ease' }}>
          MR_
        </a>
        {/* Book a Call — always visible */}
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda" target="_blank" rel="noreferrer" className="btn-magnetic"
          style={{ background: T.clay, color: T.cream, padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}>
          <span className="btn-slide" style={{ background: T.moss }}></span>
          <span className="btn-label">Book a Call</span>
        </a>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════════
   B. HERO SECTION - "The Opening Shot"
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  const elRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        y: 50, opacity: 0, duration: 1.1, stagger: 0.1,
        ease: 'power3.out', delay: 0.3,
      })
    }, elRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={elRef} id="hero" style={{
      height: '100dvh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      {/* Heavy gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top, ${T.charcoal} 0%, rgba(26,26,26,0.85) 40%, rgba(46,64,54,0.5) 70%, transparent 100%)`,
      }} />

      {/* Content - centered */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 8vw', maxWidth: '1100px', textAlign: 'center' }}>

        <h1 style={{ margin: '0 0 2rem', lineHeight: 1.08 }}>
          <span className="hero-item" style={{
            display: 'block',
            fontFamily: '"Plus Jakarta Sans"',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)',
            color: 'rgba(242,240,233,0.75)',
            letterSpacing: '-0.01em',
            marginBottom: '0.3rem',
          }}>
            Your Growth Shouldn't Depend on You
          </span>
          <span className="hero-item font-drama" style={{
            display: 'block',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: T.cream,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}>
            Being in Every Room.
          </span>
        </h1>

        <p className="hero-item" style={{ color: 'rgba(242,240,233,0.65)', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', maxWidth: '520px', lineHeight: 1.75, margin: '0 auto 1rem' }}>
          You've built a company that works. Now it only works when you're pushing. Every decision loops back to you. Your systems are duct-taped together. And you're starting to wonder if more growth will just mean more chaos.
        </p>
        <p className="hero-item" style={{ color: T.cream, fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.6, margin: '0 auto 2.25rem', fontWeight: 600 }}>
          I build the operating infrastructure that breaks that pattern.
        </p>

        <div className="hero-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda"
            target="_blank" rel="noreferrer"
            className="btn-magnetic" style={{
              background: T.clay, color: T.cream, padding: '1rem 2.5rem',
              borderRadius: '9999px', fontSize: '0.95rem', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block',
            }}>
            <span className="btn-slide" style={{ background: T.moss }}></span>
            <span className="btn-label">Book a Conversation</span>
          </a>
          <span className="font-data" style={{ color: 'rgba(242,240,233,0.35)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>30 minutes. No pitch deck. No hard sell.</span>
        </div>

        <div className="hero-item" style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'rgba(242,240,233,0.3)' }}>
          <ChevronDown size={14} style={{ animation: 'bounce 2s infinite' }} />
          <span className="font-data" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </div>

    </section>
  )
}


/* ═══════════════════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-left', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        x: -40, opacity: 0, duration: 1.0, ease: 'power3.out',
      })
      gsap.from('.about-right', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        x: 40, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.1,
      })
      gsap.from('.about-exp', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 20, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const experience = [
    {
      org: 'Large Retail Organization',
      detail: 'I ran the operation. I learned that growth at scale is a systems problem, not a people problem. You build the infrastructure right, or you burn out fixing the same things every week.',
    },
    {
      org: 'AI-powered SaaS',
      detail: 'A fast-growing SaaS with broken systems. I rebuilt the GTM engine end-to-end: acquisition, conversion, partnerships. Achieved 900% growth in the partnership program through systems, not just harder work.',
    },
  ]

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 6vw', background: T.cream }}>
      <div className="about-grid">
        {/* Left - Portrait */}
        <div className="about-left" style={{ position: 'sticky', top: '7rem' }}>
          <div style={{
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(46,64,54,0.18)',
            aspectRatio: '3/4',
          }}>
            <img
              src="/marcel-portrait.jpg"
              alt="Marcel Ruettgers"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>
          <div style={{ marginTop: '1.25rem', padding: '0 0.25rem' }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, fontSize: '1rem', color: T.charcoal }}>Marcel Ruettgers</div>
            <div className="font-data" style={{ fontSize: '0.7rem', color: T.clay, marginTop: '0.2rem', letterSpacing: '0.08em' }}>Fractional Head of Growth · Amsterdam</div>
          </div>
        </div>

        {/* Right - Bio + experience */}
        <div className="about-right">
          <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>About</span>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: T.charcoal, margin: '0.75rem 0 1.25rem', lineHeight: 1.1 }}>
            Hi, I'm Marcel.{' '}
            <span className="font-drama" style={{ color: T.moss, fontSize: '1.05em' }}>Here's what you need to know.</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(26,26,26,0.7)', lineHeight: 1.8, marginBottom: '0.75rem', maxWidth: '520px' }}>
            I've spent 20 years learning how growth breaks - and how to make it work without the person at the top holding everything together.
          </p>
          <p className="font-data" style={{ fontSize: '0.75rem', color: T.moss, letterSpacing: '0.08em', marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Diagnose what's broken. Fix the foundation. Build systems your team owns. Step back.
          </p>

          {/* Experience highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {experience.map(({ org, detail }) => (
              <div key={org} className="about-exp card-surface" style={{ padding: '1.5rem 1.75rem', borderRadius: '1.5rem' }}>
                <div className="font-data" style={{ fontSize: '0.65rem', color: T.clay, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{org}</div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.7, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
    { num: '18+', label: 'Years scaling chaos into systems' },
    { num: '3x', label: 'Scaling companies Series A to C' },
    { num: '12', label: 'Teams built and optimized across EU and US' },
  ]

  return (
    <section ref={ref} style={{ background: T.moss, padding: '4rem 6vw' }}>
      <p className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
        Track Record
      </p>
      <div className="stats-grid">
        {stats.map(({ num, label }) => (
          <div key={num} className="stat-item">
            <div className="font-drama" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: T.cream, lineHeight: 1 }}>{num}</div>
            <div style={{ color: 'rgba(242,240,233,0.6)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   C. FEATURES - "Interactive Functional Artifacts"
   ═══════════════════════════════════════════════════════════════ */

// Card 1: Diagnostic Shuffler
function ShufflerCard() {
  const items = [
    { label: 'Growth Architecture', sub: 'Map the full customer journey' },
    { label: 'Stack Optimisation', sub: 'Fix the data & reporting layer' },
    { label: 'Revenue Ops Setup', sub: "Know what's actually working" },
  ]
  const [cards, setCards] = useState([...items])

  useEffect(() => {
    const id = setInterval(() => {
      setCards(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.clay, animation: 'pulse-dot 2s infinite' }} />
        <span className="font-data" style={{ color: T.clay, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Diagnostic</span>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {cards.map((card, i) => (
          <div key={card.label} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${i * 70}px`,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            background: i === 0 ? T.moss : 'white',
            border: `1px solid ${i === 0 ? T.moss : 'rgba(46,64,54,0.1)'}`,
            borderRadius: '1rem', padding: '0.875rem 1.25rem',
            opacity: i > 2 ? 0 : 1 - i * 0.15,
            transform: `scale(${1 - i * 0.02})`,
          }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: i === 0 ? T.cream : T.charcoal }}>{card.label}</div>
            <div style={{ fontSize: '0.75rem', color: i === 0 ? 'rgba(242,240,233,0.7)' : 'rgba(26,26,26,0.5)', marginTop: '0.2rem' }}>{card.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Card 2: Telemetry Typewriter
function TypewriterCard() {
  const messages = [
    'Fractional leadership embedded in ops...',
    'Running growth dept so you own vision...',
    'Cross-functional alignment achieved...',
    'Team velocity increased 40%...',
    'Scaling without the founder bottleneck...',
  ]
  const [msgIdx, setMsgIdx] = useState(0)
  const [text, setText] = useState('')
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (charIdx < messages[msgIdx].length) {
      const t = setTimeout(() => {
        setText(prev => prev + messages[msgIdx][charIdx])
        setCharIdx(c => c + 1)
      }, 45)
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
    { time: '09:14:22', msg: 'Strategy session complete' },
    { time: '09:31:05', msg: 'CRM audit: 12 leaks found' },
    { time: '10:02:44', msg: 'Growth OKRs locked for Q2' },
  ]

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', animation: 'pulse-dot 1.5s infinite' }} />
        <span className="font-data" style={{ color: '#4CAF50', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Live Feed</span>
      </div>
      <div style={{ background: T.charcoal, borderRadius: '0.75rem', padding: '1rem', fontFamily: '"IBM Plex Mono"', fontSize: '0.72rem', marginBottom: '1rem' }}>
        {logs.map(l => (
          <div key={l.time} style={{ display: 'flex', gap: '1rem', marginBottom: '0.35rem' }}>
            <span style={{ color: T.clay }}>{l.time}</span>
            <span style={{ color: 'rgba(242,240,233,0.6)' }}>{l.msg}</span>
          </div>
        ))}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
          <span style={{ color: T.clay }}>{`>`}</span>
          <span style={{ color: T.cream }}>{text}<span style={{ borderRight: `2px solid ${T.clay}`, marginLeft: 1, animation: 'blink 1s step-end infinite' }}>&nbsp;</span></span>
        </div>
      </div>
      <span className="font-data" style={{ fontSize: '0.7rem', color: 'rgba(26,26,26,0.5)' }}>Fractional Leadership · Real-time ops</span>
    </div>
  )
}

// Card 3: Cursor Protocol Scheduler
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [active, setActive] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [phase, setPhase] = useState(0) // 0=idle,1=move,2=click,3=done

  useEffect(() => {
    const targets = [1, 2, 3, 4] // Mon–Thu
    let step = 0
    const run = () => {
      if (step < targets.length) {
        setPhase(1)
        setCursorPos({ x: targets[step] * 42 + 16, y: 36 })
        setTimeout(() => {
          setPhase(2)
          setActive(targets[step])
          step++
          setTimeout(run, 600)
        }, 500)
      } else {
        setTimeout(() => {
          setActive(null)
          setCursorPos({ x: 0, y: 0 })
          setPhase(0)
          step = 0
          setTimeout(run, 2000)
        }, 1500)
      }
    }
    const init = setTimeout(run, 1000)
    return () => clearTimeout(init)
  }, [])

  return (
    <div className="card-surface" style={{ padding: '2rem', height: '320px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <span className="font-data" style={{ color: T.moss, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Operational Rigor</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        Turning chaos into a predictable, documented machine.
      </p>
      <div style={{ position: 'relative', padding: '0.75rem', background: 'white', borderRadius: '1rem', border: '1px solid rgba(46,64,54,0.1)' }}>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'space-between' }}>
          {days.map((d, i) => (
            <div key={i} style={{
              width: 36, height: 36, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: active === i ? T.clay : 'transparent',
              border: `1px solid ${active === i ? T.clay : 'rgba(46,64,54,0.1)'}`,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: active === i ? 'scale(0.95)' : 'scale(1)',
            }}>
              <span className="font-data" style={{ fontSize: '0.7rem', color: active === i ? T.cream : 'rgba(26,26,26,0.4)', fontWeight: 700 }}>{d}</span>
            </div>
          ))}
        </div>
        {/* Animated cursor */}
        {phase > 0 && (
          <div className="scheduler-cursor" style={{
            position: 'absolute', top: cursorPos.y, left: cursorPos.x,
            width: 14, height: 14, borderRadius: '50%', background: T.clay, opacity: 0.85,
            boxShadow: `0 0 0 4px ${T.clay}33`,
            pointerEvents: 'none',
          }} />
        )}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: T.moss, opacity: 0.6 }} />
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: T.clay, opacity: 0.6 }} />
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: T.moss, opacity: 0.3 }} />
      </div>
      <p className="font-data" style={{ fontSize: '0.65rem', color: 'rgba(26,26,26,0.4)', marginTop: '0.5rem', letterSpacing: '0.1em' }}>WEEKLY CADENCE LOCKED</p>
    </div>
  )
}

function Features() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feat-head', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.feat-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 50, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const cards = [
    { label: 'Growth Architecture', desc: 'I map your entire customer journey and identify the leaks. We fix the data, the stack, and the reporting so you actually know what\'s working.', comp: <ShufflerCard /> },
    { label: 'Fractional Leadership', desc: 'Managing a growing team shouldn\'t be your full-time job. I step in to run the growth department while you focus on the vision.', comp: <TypewriterCard /> },
    { label: 'Operational Rigor', desc: 'Standardizing the mess. I implement the rituals, documentation, and processes that turn "winging it" into a predictable machine.', comp: <SchedulerCard /> },
  ]

  return (
    <section id="services" ref={ref} style={{ padding: '8rem 6vw', background: T.cream }}>
      <div className="feat-head" style={{ marginBottom: '4rem', maxWidth: '600px' }}>
        <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>What I Do</span>
        <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.charcoal, marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: 1.1 }}>
          Strategic Operations for<br /><span className="font-drama" style={{ color: T.moss, fontSize: '1.15em' }}>Sustainable Scale</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {cards.map(({ label, desc, comp }) => (
          <div key={label} className="feat-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {comp}
            <div style={{ padding: '0 0.5rem' }}>
              <h3 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, fontSize: '1.1rem', color: T.charcoal, margin: '0 0 0.4rem' }}>{label}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.6)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   D. THE DIFFERENCE
   ═══════════════════════════════════════════════════════════════ */
function TheDifference() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.diff-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const points = [
    { label: 'In your CRM', desc: 'Configuring the actual workflows, not describing what they should look like.' },
    { label: 'Sitting with your team', desc: 'Training them to run what we build together - not handing them a PDF they\'ll never open.' },
    { label: 'Stepping back when it works', desc: 'Your team owns the growth engine. I stay available for the decisions that matter.' },
  ]

  return (
    <section ref={ref} style={{ position: 'relative', padding: '10rem 6vw', background: T.charcoal, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=60')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
        <span className="diff-item font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Difference</span>
        <p className="diff-item" style={{ color: 'rgba(242,240,233,0.45)', fontSize: '1rem', lineHeight: 1.7, margin: '1rem 0 1.5rem' }}>
          Most growth consultants hand you a deck and wish you luck.
        </p>
        <p className="diff-item" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.25, color: T.cream, fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, marginBottom: '3.5rem' }}>
          I build it. I train your team on it. Then I step back.
          <span className="font-drama" style={{ display: 'block', color: T.clay, fontSize: '1.2em', marginTop: '0.25rem' }}> That's the difference between a consultant and an architect.</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {points.map(({ label, desc }) => (
            <div key={label} className="diff-item" style={{ padding: '1.75rem', background: 'rgba(242,240,233,0.05)', border: '1px solid rgba(242,240,233,0.1)', borderRadius: '1.5rem' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, fontSize: '0.95rem', color: T.cream, marginBottom: '0.5rem' }}>{label}</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(242,240,233,0.5)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════════════════════
   E. PROTOCOL - "Sticky Stacking Archive"
   ═══════════════════════════════════════════════════════════════ */

// Rotating geometric SVG
function GeoAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    let angle = 0
    const id = setInterval(() => {
      angle = (angle + 0.5) % 360
      if (ref.current) ref.current.style.transform = `rotate(${angle}deg)`
    }, 16)
    return () => clearInterval(id)
  }, [])
  return (
    <div ref={ref} style={{ width: 80, height: 80, opacity: 0.3 }}>
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke={T.clay} strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="40" cy="40" r="24" stroke={T.cream} strokeWidth="1" />
        <circle cx="40" cy="40" r="12" stroke={T.clay} strokeWidth="2" />
      </svg>
    </div>
  )
}

// Scanning laser line
function LaserAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    let y = 0
    const id = setInterval(() => {
      y = (y + 1) % 80
      if (ref.current) ref.current.style.top = `${y}px`
    }, 30)
    return () => clearInterval(id)
  }, [])
  return (
    <div style={{ position: 'relative', width: 80, height: 80, overflow: 'hidden' }}>
      <svg viewBox="0 0 80 80" width="80" height="80" style={{ opacity: 0.25 }}>
        {[...Array(5)].map((_, r) => [...Array(5)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r="2" fill={T.cream} />
        )))}
      </svg>
      <div ref={ref} style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: T.clay, opacity: 0.8, boxShadow: `0 0 8px ${T.clay}` }} />
    </div>
  )
}

// EKG Waveform
function WaveformAnimation() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setOffset(o => (o + 2) % 200), 30)
    return () => clearInterval(id)
  }, [])
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" style={{ opacity: 0.4 }}>
      <path
        d="M0 40 L10 40 L18 20 L26 60 L34 10 L42 70 L50 40 L65 40 L80 40"
        stroke={T.clay} strokeWidth="2" fill="none"
        strokeDasharray="120" strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.03s linear' }}
      />
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
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
          },
          opacity: 0,
        })
        // Scale + blur previous cards as new one enters
        ScrollTrigger.create({
          trigger: card,
          start: 'top 70%',
          onEnter: () => {
            if (cards[i - 1]) {
              gsap.to(cards[i - 1], {
                scale: 0.92, filter: 'blur(4px)', opacity: 0.4,
                duration: 0.6, ease: 'power2.inOut',
              })
            }
          },
          onLeaveBack: () => {
            if (cards[i - 1]) {
              gsap.to(cards[i - 1], {
                scale: 1, filter: 'blur(0px)', opacity: 1,
                duration: 0.6, ease: 'power2.inOut',
              })
            }
          },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01', title: 'Find the Leaks', sub: 'Week 1–2', anim: <GeoAnimation />,
      desc: 'Mapping every step of your funnel. Finding where leads get stuck. Checking data reality. Identifying revenue-driving channels vs. \'busy\' dashboards.',
      result: 'Result: Full clarity in 2 weeks.',
    },
    {
      num: '02', title: 'Fix the Foundation', sub: 'Week 3–4', anim: <LaserAnimation />,
      desc: 'Clear ownership. Defined handoffs. Pipeline stages that mean something. Reporting that reflects reality.',
      result: '"80% of growth problems are plumbing problems."',
    },
    {
      num: '03', title: 'Build the Machine', sub: 'Week 5+', anim: <WaveformAnimation />,
      desc: 'Workflow automation. Revenue playbooks. Smart tooling with humans in the loop. Your team learns by building alongside me.',
      result: null,
    },
    {
      num: '04', title: 'Hand Over & Advise', sub: 'Ongoing', anim: <GeoAnimation />,
      desc: 'Training your team to run every system. Documentation. Advisory for big decisions. The relief of knowing growth happens without you.',
      result: null,
    },
  ]

  return (
    <section id="work" ref={containerRef} style={{ background: T.cream, padding: '8rem 6vw' }}>
      <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>How It Works</span>
      <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: T.charcoal, marginTop: '0.75rem', marginBottom: '0.5rem' }}>
        Diagnose. Fix. Build. Hand Over.
      </h2>
      <p style={{ color: 'rgba(26,26,26,0.5)', fontSize: '0.9rem', marginBottom: '3.5rem', fontStyle: 'italic' }}>Ship in weeks, not quarters.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {steps.map(({ num, title, sub, desc, result, anim }) => (
          <div key={num} className="proto-card" style={{
            background: num === '01' ? T.moss : T.cream,
            border: `1px solid ${num === '01' ? 'transparent' : 'rgba(46,64,54,0.12)'}`,
            borderRadius: '2rem', padding: 'clamp(2rem, 4vw, 3rem)',
          }}>
            <div className="proto-card-inner">
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span className="font-data" style={{ fontSize: '0.7rem', color: T.clay, letterSpacing: '0.15em' }}>{num}</span>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: num === '01' ? T.cream : T.charcoal, margin: 0 }}>{title}</h3>
                  {sub && <span className="font-data" style={{ fontSize: '0.65rem', color: num === '01' ? 'rgba(242,240,233,0.45)' : 'rgba(26,26,26,0.35)', letterSpacing: '0.1em' }}>{sub}</span>}
                </div>
                <p style={{ fontSize: '0.9rem', color: num === '01' ? 'rgba(242,240,233,0.7)' : 'rgba(26,26,26,0.6)', lineHeight: 1.7, margin: 0, maxWidth: '480px' }}>{desc}</p>
                {result && <p style={{ fontSize: '0.8rem', color: num === '02' ? T.clay : (num === '01' ? T.clay : T.moss), fontWeight: 600, marginTop: '0.75rem', fontStyle: 'italic' }}>{result}</p>}
              </div>
              <div style={{ opacity: 0.7, flexShrink: 0 }}>{anim}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda" target="_blank" rel="noreferrer"
          className="btn-magnetic" style={{ background: T.moss, color: T.cream, padding: '0.875rem 2.25rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}>
          <span className="btn-slide" style={{ background: T.charcoal }}></span>
          <span className="btn-label">Book a Growth Diagnostic</span>
        </a>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════ */
function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const testimonials = [
    {
      name: 'Eddie Wu',
      role: 'CEO · Blaze.ai',
      quote: "Marcel is a rare structured thinker that executes and leads with high precision. Scaling affiliates, referrals, and advocacy - Marcel exceeded our ambitious goals.",
    },
    {
      name: 'Joe Girton',
      role: 'Chief of Staff · Blaze.ai',
      quote: "A true force multiplier for any team that wants to move fast without breaking things.",
    },
    {
      name: 'Edward van den Bergh',
      role: 'General Manager · Scaling Service & Manufacturing SMEs',
      quote: "Marcel has been superb - creating a clear plan, providing regular updates on results, and the plan he is executing is already showing results. We are very satisfied with the professionalism of his work and would happily recommend him.",
    },
    {
      name: 'Ania Sosin',
      role: 'Urbanist · Interior Architect · Tutor',
      quote: "After just a few minutes of discussing my project with Marcel, I knew I wanted to work with him. He asked insightful questions - not just about the technical aspects but also about the marketing strategy and how to authentically reflect my persona. I trust Marcel completely when it comes to design taste, language choices, and promotional advice.",
    },
  ]

  return (
    <section ref={ref} style={{ background: T.moss, padding: '8rem 6vw' }}>
      <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Social Proof</span>
      <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: T.cream, marginTop: '0.75rem', marginBottom: '3rem' }}>
        What Founders Say
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {testimonials.map(({ name, role, quote }) => (
          <div key={name} className="testi-card" style={{
            background: 'rgba(242,240,233,0.06)', border: '1px solid rgba(242,240,233,0.12)',
            borderRadius: '2rem', padding: '2rem', backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: 'rgba(242,240,233,0.85)', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 1.5rem', fontStyle: 'italic' }}>
              "{quote}"
            </p>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, color: T.cream, fontSize: '0.9rem' }}>{name}</div>
              <div className="font-data" style={{ fontSize: '0.7rem', color: T.clay, marginTop: '0.2rem', letterSpacing: '0.05em' }}>{role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   F. MEMBERSHIP / PRICING → "Get Started" / FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 25, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const faqs = [
    { q: 'What does "Fractional" actually mean?', a: 'Part-time experienced growth operator. You get executive-level thinking without the full-time salary. I typically work with you 1-2 days a week - embedded in your operations, not emailing from the outside.' },
    { q: 'What size companies do you work with?', a: '$1M to $20M revenue - post-product-market fit. This is the stage where growth creates chaos. You\'ve proven it works. Now the question is whether it can work without you in every room.' },
    { q: 'How quickly can I see results?', a: 'Clarity in 2 weeks from the diagnostic. Fundamental fixes in 4 weeks. Meaningful operational improvements in 60-90 days.' },
    { q: 'How is this different from hiring a consultant?', a: 'I build in your CRM and workflows - not just deliver decks. I sit with your team, configure the tools, train them to run what we build together. That\'s the difference between a consultant and an architect.' },
    { q: 'What about team resistance to new processes?', a: 'I build with the team, not just drop processes on them. They learn by doing alongside me, so by the time I step back they already own it.' },
    { q: 'What\'s the investment?', a: 'It starts with a diagnostic deep dive. From there we define what the engagement looks like based on what we find. No forever contracts.' },
    { q: 'Do you work with clients outside Amsterdam?', a: 'Remote-first, async-first. I work regularly with companies in the US, EU, and Canada. Location has never been a blocker.' },
  ]

  return (
    <section ref={ref} style={{ padding: '8rem 6vw', background: T.cream }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Common Questions</span>
        <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: T.charcoal, margin: '0.75rem 0 3rem' }}>
          Let's Clear the Air
        </h2>
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="faq-item" style={{ borderBottom: '1px solid rgba(46,64,54,0.12)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              width: '100%', textAlign: 'left', padding: '0.5rem 0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
            }}>
              <span style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 700, fontSize: '0.95rem', color: T.charcoal }}>{q}</span>
              <ChevronDown size={16} style={{ color: T.clay, flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
            </button>
            {open === i && (
              <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.7, margin: '0.75rem 0 0', paddingRight: '2rem' }}>{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════════════ */
function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 35, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={ref} style={{ background: T.moss, padding: '10rem 6vw', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&auto=format&fit=crop&q=60')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="cta-item font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>Ready to Scale?</span>
        <h2 className="cta-item" style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: T.cream, maxWidth: '720px', margin: '0 auto 1rem', lineHeight: 1.1 }}>
          You Already Know{' '}
          <span className="font-drama" style={{ color: T.clay }}>Something Needs to Change.</span>
        </h2>
        <p className="cta-item" style={{ color: 'rgba(242,240,233,0.6)', fontSize: '1rem', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          The question isn't whether your growth systems need fixing. It's how much longer you want to be the one holding it all together.
        </p>
        <div className="cta-item" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0gzf2H3GezuYwA1xN3iu2bStrp5lWeXwkJO2oC_oU8OymykSe6oxOxCmN8UhPSY-5L0mSZUDda"
            target="_blank" rel="noreferrer"
            className="btn-magnetic" style={{
              background: T.clay, color: T.cream, padding: '1rem 2.5rem',
              borderRadius: '9999px', fontSize: '1rem', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block',
            }}>
            <span className="btn-slide" style={{ background: '#b84a28' }}></span>
            <span className="btn-label">Book a Conversation</span>
          </a>
        </div>
        <p className="cta-item font-data" style={{ color: 'rgba(242,240,233,0.3)', fontSize: '0.7rem', marginTop: '1.5rem', letterSpacing: '0.1em' }}>
          30 MINUTES · NO OBLIGATION · WE'LL FIGURE OUT IF IT'S A FIT
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FOUNDER BOTTLENECK
   ═══════════════════════════════════════════════════════════════ */
function FounderBottleneck() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bottleneck-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const pains = [
    { before: 'More leads', after: 'create more follow-up that nobody\'s doing.' },
    { before: 'More customers', after: 'create more complexity your team can\'t manage.' },
    { before: 'More revenue', after: 'creates more chaos that depends entirely on you.' },
  ]

  return (
    <section ref={ref} style={{ background: T.charcoal, padding: '8rem 6vw', textAlign: 'center' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <span className="bottleneck-item font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Problem</span>
        <h2 className="bottleneck-item" style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: T.cream, margin: '0.75rem 0 2.5rem', lineHeight: 1.1 }}>
          You Built the Traction.{' '}
          <span className="font-drama" style={{ color: T.clay }}>Now It's Eating You Alive.</span>
        </h2>

        <p className="bottleneck-item" style={{ color: 'rgba(242,240,233,0.55)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
          You've hit a wall somewhere between $1M and $20M. The tactics that got you here won't get you there.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
          {pains.map(({ before, after }) => (
            <div key={before} className="bottleneck-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.5rem', background: 'rgba(242,240,233,0.04)', borderRadius: '1rem', border: '1px solid rgba(242,240,233,0.08)' }}>
              <span style={{ color: T.clay, fontWeight: 700, whiteSpace: 'nowrap', fontSize: '0.95rem' }}>{before}</span>
              <span style={{ color: 'rgba(242,240,233,0.5)', fontSize: '0.95rem', lineHeight: 1.5 }}>{after}</span>
            </div>
          ))}
        </div>

        <p className="bottleneck-item" style={{ color: 'rgba(242,240,233,0.5)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          Marketing blames sales. Sales blames marketing. Leads sit too long. Pipeline stages mean different things to different people. And you're stuck in the middle of every decision because nothing runs without you.
        </p>
        <p className="bottleneck-item" style={{ color: T.cream, fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.65, fontWeight: 600 }}>
          The problem isn't that you need more people. The problem is everything runs through you and nothing is designed to stop.{' '}
          <span style={{ color: T.clay }}>That's what I fix.</span>
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   IS THIS RIGHT FOR YOU?
   ═══════════════════════════════════════════════════════════════ */
function IsThisForYou() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fit-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 35, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const goodFit = [
    'Founder-led company doing $1M–$20M',
    'Operational chaos eating your time',
    'Tried hiring for execution, but need architecture',
    'Wants systems your team owns - without you in every room',
  ]
  const notFit = [
    'Looking for a tactician (ads, emails, campaigns)',
    'Want a quick fix, not a lasting foundation',
    'Not ready to change how your operations work',
    'Looking for a full-time embedded executive',
  ]

  return (
    <section ref={ref} style={{ background: T.cream, padding: '8rem 6vw' }}>
      <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Is This Right for You?</span>
      <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: T.charcoal, margin: '0.75rem 0 3rem', lineHeight: 1.1 }}>
        We're probably a fit if…
      </h2>
      <div className="about-grid">
        <div className="fit-card" style={{ background: T.moss, borderRadius: '2rem', padding: '2.5rem' }}>
          <div className="font-data" style={{ fontSize: '0.65rem', color: T.clay, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>✅  Good Fit</div>
          {goodFit.map(item => (
            <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: T.clay, fontWeight: 700, lineHeight: 1.5, flexShrink: 0 }}>+</span>
              <span style={{ color: 'rgba(242,240,233,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="fit-card" style={{ background: 'white', border: '1px solid rgba(46,64,54,0.1)', borderRadius: '2rem', padding: '2.5rem' }}>
          <div className="font-data" style={{ fontSize: '0.65rem', color: 'rgba(26,26,26,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>❌  Not a Fit</div>
          {notFit.map(item => (
            <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(26,26,26,0.3)', fontWeight: 700, lineHeight: 1.5, flexShrink: 0 }}>–</span>
              <span style={{ color: 'rgba(26,26,26,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SCALE STACK NEWSLETTER
   ═══════════════════════════════════════════════════════════════ */
function ScaleStack() {
  return (
    <section style={{ background: T.charcoal, padding: '6rem 6vw', textAlign: 'center' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <span className="font-data" style={{ color: T.clay, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scale Stack</span>
        <h2 style={{ fontFamily: '"Plus Jakarta Sans"', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: T.cream, margin: '0.75rem 0 1rem', lineHeight: 1.15 }}>
          One Idea Per Week That Makes Growth Less Chaotic.
        </h2>
        <p style={{ color: 'rgba(242,240,233,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Short, practical breakdowns of systems and patterns. No inspirational fluff.
        </p>
        <a
          href="#"
          className="btn-magnetic"
          style={{ background: T.clay, color: T.cream, padding: '0.875rem 2.25rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block' }}>
          <span className="btn-slide" style={{ background: T.moss }}></span>
          <span className="btn-label">Subscribe Free</span>
        </a>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   G. FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: T.charcoal, borderRadius: '4rem 4rem 0 0', padding: '4rem 6vw 2.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        {/* Brand */}
        <div>
          <div className="font-data" style={{ color: T.cream, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Marcel Ruettgers</div>
          <p style={{ color: 'rgba(242,240,233,0.45)', fontSize: '0.8rem', lineHeight: 1.6, maxWidth: '220px' }}>
            Building growth infrastructure for founder-led companies.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            {[
              { icon: <Linkedin size={15} />, href: 'https://linkedin.com/in/marcelruttgers' },
              { icon: <Twitter size={15} />, href: 'https://twitter.com/ruttgers83' },
            ].map(({ icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="link-lift" style={{
                color: 'rgba(242,240,233,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(242,240,233,0.12)',
                transition: 'all 0.25s ease',
              }}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="font-data" style={{ color: 'rgba(242,240,233,0.3)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</div>
          {['About', 'Services', 'Work', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="link-lift" style={{ display: 'block', color: 'rgba(242,240,233,0.55)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '0.5rem' }}>{l}</a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div className="font-data" style={{ color: 'rgba(242,240,233,0.3)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</div>
          <a href="mailto:mr@marcelruettgers.com" className="link-lift" style={{ color: 'rgba(242,240,233,0.55)', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            mr@marcelruettgers.com <ArrowUpRight size={12} />
          </a>
          <p style={{ color: 'rgba(242,240,233,0.35)', fontSize: '0.8rem', marginTop: '1rem' }}>Amsterdam, NL · Remote-first</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(242,240,233,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', animation: 'pulse-dot 2s infinite', boxShadow: '0 0 0 2px rgba(76,175,80,0.3)' }} />
          <span className="font-data" style={{ color: 'rgba(242,240,233,0.3)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>SYSTEM OPERATIONAL</span>
        </div>
        <p className="font-data" style={{ color: 'rgba(242,240,233,0.2)', fontSize: '0.65rem', letterSpacing: '0.1em', margin: 0 }}>
          © 2026 MARCEL RUETTGERS
        </p>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════════
   KEYFRAME ANIMATIONS (injected via style tag)
   ═══════════════════════════════════════════════════════════════ */
function GlobalStyles() {
  return (
    <style>{`
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
      }

      /* ── Desktop: show nav, hide hamburger ── */
      @media (min-width: 769px) {
        .show-mobile { display: none !important; }
      }

      /* ── About section grid ── */
      .about-grid {
        display: grid;
        grid-template-columns: clamp(220px, 30%, 340px) 1fr;
        gap: clamp(3rem, 6vw, 6rem);
        align-items: flex-start;
      }

      /* ── Stats bar grid ── */
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 2rem;
      }

      /* ── Protocol card inner grid ── */
      .proto-card-inner {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        align-items: center;
      }

      /* ════════════════════════════════════════
         MOBILE - ≤ 768px
         ════════════════════════════════════════ */
      @media (max-width: 768px) {
        /* Section padding */
        section { padding-top: 4rem !important; padding-bottom: 4rem !important; }

        /* Hero - keep centered, just reduce padding */
        #hero { padding: 0 5vw !important; }
        #hero h1 span:first-child { font-size: clamp(1.1rem, 4.5vw, 1.5rem) !important; }
        #hero .font-drama { font-size: clamp(2rem, 10vw, 3rem) !important; }
        #hero p { font-size: 0.875rem !important; }

        /* About grid -> single column */
        .about-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .about-left {
          position: static !important;
          max-width: 240px;
          margin: 0 auto;
        }

        /* Stats bar -> 2x2 grid */
        .stats-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1.25rem !important;
        }

        /* Features heading */
        #services h2 { font-size: 1.75rem !important; }

        /* Features cards -> single column */
        #services > div > div[style*="grid"] {
          grid-template-columns: 1fr !important;
        }

        /* Protocol card inner -> stack anim under text */
        .proto-card-inner {
          grid-template-columns: 1fr !important;
          gap: 1rem !important;
        }

        /* Testimonials -> single column */
        section[style*="#2E4036"] > div[style*="grid"] {
          grid-template-columns: 1fr !important;
        }

        /* TheDifference 3-col -> single col */
        section[style*="#1A1A1A"] div[style*="auto-fit"] {
          grid-template-columns: 1fr !important;
        }

        /* Footer grid -> single column */
        footer > div:first-child {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
      }

      /* ── Small phones ≤ 480px ── */
      @media (max-width: 480px) {
        nav { width: calc(100% - 1.5rem) !important; padding: 0.5rem 1rem !important; }
        .stat-item { min-width: 0; }
        .faq-item p { padding-right: 0 !important; }
      }

    `}</style>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ROOT APP
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <FounderBottleneck />
        <StatsBar />
        <AboutSection />
        <TheDifference />
        <Protocol />
        <Testimonials />
        <IsThisForYou />
        <Features />
        <ScaleStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
