import { useState } from 'react'

// Formspree setup: set VITE_FORMSPREE_ENDPOINT in a .env file (see .env.example)
// or in your Vercel project environment variables.
// It looks like https://formspree.io/f/xxxxxxx - create a free form at https://formspree.io.
// If unset, the form politely points visitors to director@nanhisunehri.com instead.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const CONTACT_EMAIL = 'director@nanhisunehri.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const endpointConfigured =
  FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')

export default function LaunchForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', savingFor: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setError('')
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const name = values.name.trim()
    const email = values.email.trim()
    const phone = values.phone.trim()

    if (!name) {
      setError('Please tell us your name.')
      return
    }
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!endpointConfigured) {
      setError(`The launch list is being connected - please email us at ${CONTACT_EMAIL} and we will add you.`)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          saving_for: values.savingFor || undefined,
          source: 'nanhisunehri-launch-list',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setDone(true)
    } catch {
      setError('Something went wrong on our side. Please try again in a moment.')
      setSubmitting(false)
    }
  }

  return (
    <section className="launch" id="launch-list">
      <div className="kicker reveal">Join the launch list</div>
      <h2 className="reveal">Be there when the first coin drops.</h2>
      <p className="section-lede reveal reveal-d1">Leave your details and we'll write to you when Nanhi Sunehri opens - launch news only, nothing else.</p>
      <div className="form-wrap reveal reveal-d2">
        {!done ? (
          <form onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                aria-label="Your name"
                value={values.name}
                onChange={update('name')}
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                aria-label="Email address"
                value={values.email}
                onChange={update('email')}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                autoComplete="tel"
                aria-label="Phone number (optional)"
                value={values.phone}
                onChange={update('phone')}
              />
              <select
                name="saving_for"
                aria-label="Who are you saving for? (optional)"
                value={values.savingFor}
                onChange={update('savingFor')}
                required={false}
              >
                <option value="" disabled hidden>Who are you saving for? (optional)</option>
                <option value="daughter">My daughter</option>
                <option value="son">My son</option>
                <option value="niece">My niece</option>
                <option value="nephew">My nephew</option>
                <option value="grandchild">My grandchild</option>
                <option value="godchild">My godchild</option>
                <option value="other">Someone else I love</option>
              </select>
              <div className="form-submit">
                <button type="submit" className="btn-gold" disabled={submitting}>
                  {submitting ? 'Adding you...' : 'Notify me at launch'}
                </button>
              </div>
            </div>
            <p className={`form-error${error ? ' show' : ''}`} role="alert">{error}</p>
            <p className="form-fine">One email when we launch. No spam, no sharing your details, unsubscribe anytime.</p>
          </form>
        ) : (
          <div className="form-success show" role="status">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="24" stroke="#e8b84b" strokeWidth="2" />
              <path d="M16 27l7 7 13-14" stroke="#e8b84b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>You're on the list.</h3>
            <p>Thank you - we'll write to you the moment Nanhi Sunehri opens its doors.</p>
          </div>
        )}
      </div>
    </section>
  )
}
