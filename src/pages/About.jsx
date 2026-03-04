import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'About Marcel Ruettgers | Ruettgers Digital'
    }, [])

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 6vw' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontFamily: '"Space Grotesk"', fontSize: 'clamp(2rem, 5vw, 4rem)', margin: '0 0 1rem' }}>About Marcel</h1>
                <p style={{ fontFamily: '"Space Mono"', fontSize: '1.2rem', color: 'rgba(17,17,17,0.6)' }}>Coming Soon</p>
            </div>
        </div>
    )
}
