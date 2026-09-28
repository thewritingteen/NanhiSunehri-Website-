import CoinSvg from './CoinSvg.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-coins" aria-hidden="true">
        <CoinSvg className="coin coin-1" />
        <CoinSvg className="coin coin-2" />
        <CoinSvg className="coin coin-3" />
        <CoinSvg className="coin coin-4" />
      </div>
      <div className="hero-badge"><span className="pulse"></span>Launching soon</div>
      <h1>A <span className="gold-word">golden start</span> for every child's big moments.</h1>
      <p className="hero-sub">We're building <strong>Nanhi Sunehri</strong> - a simple way for families to save in digital gold toward the milestones that matter, and attach the memories that make them priceless.</p>
      <div className="cta-row">
        <a className="btn-gold" href="#launch-list">Join the launch list</a>
        <span className="hero-note">Prelaunch - be the first to know when we open.</span>
      </div>
      <div className="scroll-hint">Scroll</div>
    </section>
  )
}
