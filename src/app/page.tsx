const products = [
  {
    icon: '01',
    tag: 'High Purity',
    title: 'Analytical Reagents',
    text: 'Trusted chemical solutions for precise testing, research, and quality control across laboratories.',
  },
  {
    icon: '02',
    tag: 'Bulk Supply',
    title: 'Industrial Chemicals',
    text: 'Reliable sourcing for manufacturing, processing, and industrial applications with consistent quality.',
  },
  {
    icon: '03',
    tag: 'Ready Stock',
    title: 'Lab Essentials',
    text: 'Essential consumables, solvents, and specialty chemicals packaged for efficient lab operations.',
  },
];

const features = [
  {
    icon: '✓',
    title: 'Quality Assurance',
    text: 'Stringent checks to meet industrial and research standards for dependable performance.',
  },
  {
    icon: '⚗',
    title: 'Technical Support',
    text: 'Industry-focused guidance for product selection, usage, and application requirements.',
  },
  {
    icon: '🚚',
    title: 'On-Time Supply',
    text: 'Consistent delivery with responsive support for time-sensitive customer operations.',
  },
];

const industries = [
  'Pharmaceuticals',
  'Food & Beverage',
  'Water Treatment',
  'Academic Research',
  'Textile',
  'Agrochemicals',
  'Paint & Coatings',
  'Bio-Technology',
];

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '5000+', label: 'Product SKUs' },
  { value: '100%', label: 'Customer Focus' },
  { value: '24/7', label: 'Service Support' },
];

const testimonials = [
  {
    quote: 'Their product consistency and fast response support helped us streamline our lab sourcing process.',
    name: 'Research Manager',
  },
  {
    quote: 'A dependable supplier for high quality reagents and prompt service. Their team understands industry needs.',
    name: 'Quality Head',
  },
  {
    quote: 'We appreciate the technical guidance and reliable stock availability for our production inputs.',
    name: 'Procurement Lead',
  },
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-mark">A</div>
            <span>ALZA CHEMICALS</span>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="nav-cta">Request Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Trusted Chemical Partner</span>
              <h1>High-quality laboratory chemicals for research, industry, and growth.</h1>
              <p>
                Alza Chemicals supports businesses with dependable chemical solutions, efficient supply chains,
                and technical expertise tailored for laboratories and industrial applications.
              </p>

              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">Explore Products</a>
                <a href="#contact" className="btn btn-secondary">Talk to Us</a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <strong>5000+</strong>
                  <span>Product SKUs</span>
                </div>
                <div className="stat">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="stat">
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-grid">
                <div className="mini-card">
                  <h3>Core Specialties</h3>
                  <p>Analytical reagents, fine chemicals, lab essentials, and industrial supply solutions.</p>
                </div>
                <div className="mini-card">
                  <h3>Quality Promise</h3>
                  <p>Consistent quality standards backed by responsive service and trusted sourcing.</p>
                </div>
                <div className="mini-card">
                  <h3>Market Reach</h3>
                  <p>Serving research, manufacturing, pharmaceutical, and process-driven industries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="container marquee-inner">
            <span>Analytical Reagents</span>
            <span>Industrial Chemicals</span>
            <span>Research Solutions</span>
            <span>Lab Consumables</span>
            <span>Process Chemicals</span>
            <span>Quality Supply</span>
          </div>
        </div>

        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <h2>Built for trusted supply and scientific performance.</h2>
              <p>
                We focus on delivering dependable products, responsive support, and practical chemical expertise for modern laboratories and businesses.
              </p>
            </div>

            <div className="card-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-header">
              <h2>Featured product categories</h2>
              <p>Solutions designed to support research integrity, process efficiency, and operational consistency.</p>
            </div>

            <div className="card-grid">
              {products.map((product) => (
                <div key={product.title} className="product-card">
                  <div className="icon">{product.icon}</div>
                  <span className="product-badge">{product.tag}</span>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="container">
            <div className="section-header">
              <h2>Industries we support</h2>
              <p>From research labs to manufacturing environments, we provide practical chemical supply support.</p>
            </div>

            <div className="industries-grid">
              {industries.map((industry) => (
                <div key={industry} className="industry-card">
                  <h3>{industry}</h3>
                  <p>Tailored chemical solutions for process reliability, quality, and consistent results.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="stats-band">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="info-card">
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>What our partners say</h2>
              <p>We value long-term relationships built on reliability, trust, and product quality.</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <div key={item.name} className="testimonial-card">
                  <p className="quote">“{item.quote}”</p>
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-wrap">
            <div className="contact-box">
              <span className="eyebrow">Let’s talk</span>
              <h2>Need a trusted chemical supplier?</h2>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">☎</div>
                  <div>
                    <h3>Call us</h3>
                    <p>+91 00000 00000</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div>
                    <h3>Email</h3>
                    <p>sales@alzachemicals.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⌂</div>
                  <div>
                    <h3>Office</h3>
                    <p>Industrial Area, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-box">
              <h3>Request a quote</h3>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Company / Organization" />
                <textarea rows={4} placeholder="Tell us about your requirement" />
                <button type="button" className="btn btn-primary">Send Enquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Alza Chemicals. All rights reserved.</div>
          <div>Laboratory chemicals • Industrial solutions</div>
        </div>
      </footer>
    </>
  );
}
