import { Link } from 'react-router-dom'
import { T, MagneticButton, CTA_LINK, CTA_TEXT } from '../components/Shared'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
    useSEO({
        title: 'Page Not Found | Ruettgers Digital',
        description: 'The page you are looking for does not exist.',
        canonical: 'https://www.ruettgersdigital.com/404',
        noindex: true,
    })

    return (
        <section style={{
            minHeight: '80vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            background: T.black, color: T.offwhite, padding: '4rem 6vw', textAlign: 'center'
        }}>
            <span className="font-data" style={{ color: T.signal, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>404</span>
            <h1 style={{
                fontFamily: '"Space Grotesk"', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                textTransform: 'uppercase', lineHeight: 1.1, margin: '0 0 1.5rem'
            }}>
                This Page Doesn't Exist.
            </h1>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(245,243,238,0.7)', maxWidth: '500px', margin: '0 0 3rem' }}>
                The URL you followed is broken or the page has been moved. Let's get you back on track.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/" style={{
                    color: T.signal, fontSize: '1rem', fontWeight: 700,
                    textDecoration: 'underline', textUnderlineOffset: '4px'
                }}>
                    Go to Homepage
                </Link>
                <MagneticButton href={CTA_LINK} label={CTA_TEXT} />
            </div>
        </section>
    )
}
