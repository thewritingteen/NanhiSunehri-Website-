import Brand from './Brand.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>A golden start for every child's big moments. Currently in development - join the launch list to follow along.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#why">Why we're building this</a>
          <a href="#building">What it will do</a>
          <a href="#how">How it will work</a>
          <a href="#about">About the company</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:director@nanhisunehri.com">director@nanhisunehri.com</a>
          <a href="#launch-list">Join the launch list</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 ARSAGI INDIA PRIVATE LIMITED - CIN U66190OD2026PTC052539 - GSTIN 21ABECA8824G1ZW - Registered with the Ministry of Corporate Affairs, India.</span>
        <span>Privacy: your details are used only to notify you about our launch.</span>
      </div>
    </footer>
  )
}
