const rows = [
  ['Company', 'ARSAGI INDIA PRIVATE LIMITED'],
  ['CIN', 'U66190OD2026PTC052539'],
  ['GSTIN', '21ABECA8824G1ZW'],
  ['Founder', 'Arpan Agrawal'],
  ['Product', "Nanhi Sunehri - gold savings for children's milestones"],
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <div className="kicker reveal">Who's behind this</div>
          <h2 className="reveal">Built with heart, out in the open.</h2>
          <p className="reveal">Nanhi Sunehri is being built by <strong>ARSAGI INDIA PRIVATE LIMITED</strong>, founded by <strong>Arpan Agrawal</strong>.</p>
          <p className="reveal reveal-d1">We're a young company at the very start of our journey - no app yet, no big claims, just a clear idea and the work to earn your trust. What you see on this page is exactly where we are.</p>
          <p className="reveal reveal-d2">As we grow, we'll share the details that matter - how the gold is held, who we partner with, and how your family is protected - before we ever ask you to save a single rupee with us.</p>
        </div>
        <div className="about-card reveal reveal-d1">
          {rows.map(([k, v]) => (
            <div className="about-row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
          ))}
          <div className="about-row"><span className="k">Status</span><span className="v gold">Prelaunch - app in development</span></div>
          <div className="about-row"><span className="k">Contact</span><span className="v"><a href="mailto:director@nanhisunehri.com">director@nanhisunehri.com</a></span></div>
        </div>
      </div>
    </section>
  )
}
