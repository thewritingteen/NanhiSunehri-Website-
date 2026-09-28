import CoinSvg from './CoinSvg.jsx'

const features = [
  {
    title: 'Milestone gold savings',
    body: 'Start small and save in digital gold toward real moments - a first birthday, the first day of school, a graduation, a wedding.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#e8b84b" strokeWidth="1.6" />
        <path d="M12 7l1.3 2.9 3.1.3-2.4 2.1.7 3.1-2.7-1.6-2.7 1.6.7-3.1-2.4-2.1 3.1-.3L12 7z" fill="#e8b84b" />
      </svg>
    ),
  },
  {
    title: 'Memories, sealed with it',
    body: 'Pair every gift of gold with a letter, a photo, or a blessing - opened together at the milestone, years from now.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#e8b84b" strokeWidth="1.6" />
        <path d="M3 8l9 6 9-6" stroke="#e8b84b" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'The whole family can join in',
    body: 'Grandparents, aunts, uncles, godparents - anyone who loves the child can contribute to their golden future.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 12c0 4.7-7 9-7 9z" stroke="#e8b84b" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="building" id="building">
      <div className="building-inner">
        <div>
          <div className="kicker reveal">What Nanhi Sunehri will do</div>
          <h2 className="reveal">Gold for the milestone. A memory for the heart.</h2>
          <div className="feature-list">
            {features.map((f, i) => (
              <div className={`feature reveal${i > 0 ? ` reveal-d${i}` : ''}`} key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title} <span className="tag">Coming</span></h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="keepsake reveal reveal-d1">
          <div className="keepsake-inner">
            <div className="keepsake-label">A glimpse of the idea</div>
            <p className="keepsake-quote">"For your first birthday, beta. May your life always shine the way you made ours shine the day you arrived."</p>
            <div className="keepsake-meta">
              <CoinSvg className="keepsake-coin" strokeWidth={2.5} />
              <div>
                <span className="m1">A gift of gold, with these words attached</span>
                <span className="m2">To be opened on the milestone day</span>
              </div>
            </div>
            <p className="keepsake-caption">This is the experience we're working toward. <em>Concept preview</em> - the app is in development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
