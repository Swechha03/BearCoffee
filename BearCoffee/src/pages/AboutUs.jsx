import Header from '../components/Header'
import './AboutUs.css'

export function AboutUs() {
  return (
    <>
      <Header />

      <div className="about-container">

        <section className="about-hero">
          <h1>About Bear Coffee</h1>
          <p>
            Your cozy neighborhood café where great coffee, warm smiles,
            and comforting moments come together.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Bear Coffee started with one simple idea — create a warm and welcoming
            space where people can slow down and enjoy a great cup of coffee.
            What began as a small passion project quickly grew into a community
            gathering spot for students, friends, and families.
          </p>

          <p>
            Every cup we serve is crafted with care using high-quality beans and
            thoughtfully selected ingredients. Whether you're studying, catching
            up with friends, or simply taking a break, Bear Coffee is here to
            make your day a little better.
          </p>
        </section>

        <section className="about-features">

          <div className="feature-card">
            <h3>☕ Quality Coffee</h3>
            <p>
              We carefully select our beans to ensure every cup is rich,
              smooth, and full of flavor.
            </p>
          </div>

          <div className="feature-card">
            <h3>🐻 Cozy Atmosphere</h3>
            <p>
              Our café is designed to feel warm and welcoming — the perfect
              place to relax, work, or catch up with friends.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌱 Fresh Ingredients</h3>
            <p>
              From pastries to specialty drinks, we use fresh ingredients
              to deliver the best experience possible.
            </p>
          </div>

        </section>

        <section className="about-closing">
          <h2>Come Visit Us</h2>
          <p>
            Whether you're craving your morning coffee or looking for a cozy
            afternoon break, we can't wait to welcome you to Bear Coffee.
          </p>
        </section>

      </div>
    </>
  )
}