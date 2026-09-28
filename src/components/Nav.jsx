import Brand from './Brand.jsx'

export default function Nav({ theme, onToggleTheme }) {
  const light = theme === 'light'
  return (
    <nav className="nav">
      <Brand />
      <div className="nav-right">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
          title={light ? 'Switch to dark theme' : 'Switch to light theme'}
        >
          {light ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6" />
            </svg>
          )}
        </button>
        <a className="nav-cta" href="#launch-list">Join the launch list</a>
      </div>
    </nav>
  )
}
