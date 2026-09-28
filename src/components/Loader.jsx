export default function Loader({ done }) {
  return (
    <div className={`loader${done ? ' done' : ''}`} aria-hidden="true">
      <svg className="loader-coin" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="29" stroke="#e8b84b" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="22" stroke="#e8b84b" strokeWidth="1" opacity=".45" />
        <path d="M32 20l3.2 7.2 7.8.7-5.9 5.2 1.7 7.7-6.8-4-6.8 4 1.7-7.7-5.9-5.2 7.8-.7L32 20z" fill="#e8b84b" />
      </svg>
      <div className="loader-word">Nanhi Sunehri</div>
      <div className="loader-bar"></div>
    </div>
  )
}
