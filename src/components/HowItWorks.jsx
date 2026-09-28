const steps = [
  {
    title: 'Name the milestone',
    body: "Tell us who you're saving for and the moment you're dreaming of - big or small, near or years away.",
  },
  {
    title: 'Save a little, often',
    body: 'Put aside small amounts in digital gold at your own pace, and invite family to add their blessings too.',
  },
  {
    title: 'Celebrate the moment',
    body: 'When the day arrives, the gold and every memory saved with it are there - ready for the celebration.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="kicker reveal">How it will work</div>
      <h2 className="reveal">Three simple steps, once we launch.</h2>
      <p className="section-lede reveal reveal-d1">No jeweller visits, no paperwork marathons. Just a habit of gold, built around your child.</p>
      <div className="steps">
        {steps.map((s, i) => (
          <div className={`step reveal${i > 0 ? ` reveal-d${i}` : ''}`} key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
      <p className="steps-note reveal">We're in development now. <em>Join the launch list</em> and you'll be first through the door.</p>
    </section>
  )
}
