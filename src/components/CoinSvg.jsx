export default function CoinSvg({ className = '', strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="29" stroke="#e8b84b" strokeWidth={strokeWidth} />
      <path d="M32 18l3.6 8 8.8.8-6.6 5.9 1.9 8.7-7.7-4.5-7.7 4.5 1.9-8.7-6.6-5.9 8.8-.8L32 18z" fill="#e8b84b" />
    </svg>
  )
}
