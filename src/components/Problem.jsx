const pains = [
  {
    title: 'Buying gold is an event',
    body: 'Jeweller visits, making charges, purity doubts, safe storage. Meaningful, yes - but heavy enough that most families put it off for "someday."',
    icon: (
      <svg className="pain-icon" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="24" rx="4" stroke="#e8b84b" strokeWidth="2" />
        <path d="M8 22h32" stroke="#e8b84b" strokeWidth="2" />
        <circle cx="17" cy="30" r="3" stroke="#e8b84b" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Gifts lose their story',
    body: 'A coin from nani, a chain from chacha - the gold survives, but who gave it and why often fades within a generation.',
    icon: (
      <svg className="pain-icon" viewBox="0 0 48 48" fill="none">
        <path d="M24 40s-14-8.6-14-18a8 8 0 0 1 14-5.2A8 8 0 0 1 38 22c0 9.4-14 18-14 18z" stroke="#e8b84b" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Saving feels disconnected',
    body: 'Recurring deposits and apps grow numbers, not meaning. Nothing ties the saving to the child, the moment, or the dream behind it.',
    icon: (
      <svg className="pain-icon" viewBox="0 0 48 48" fill="none">
        <path d="M10 38V22l14-10 14 10v16" stroke="#e8b84b" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 38v-9h12v9" stroke="#e8b84b" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Problem() {
  return (
    <section id="why">
      <div className="kicker reveal">Why we're building this</div>
      <h2 className="reveal">Every parent wants to give gold. Almost none of it is simple.</h2>
      <p className="section-lede reveal reveal-d1">Gold has always been how Indian families bless a child's future. But the way we do it hasn't kept up with how we live.</p>
      <div className="pain-grid">
        {pains.map((p, i) => (
          <div className={`pain-card reveal${i > 0 ? ` reveal-d${i}` : ''}`} key={p.title}>
            {p.icon}
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
