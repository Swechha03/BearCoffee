import Header from "../components/Header";
import "./FAQ.css";

export function FAQ() {
  return (
    <>
      <Header />

      <div className="faq-page">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-container">

          <div className="faq-item">
            <h3>What are your opening hours?</h3>
            <p>
              Bear Coffee is open Monday to Sunday from 7:00 AM to 6:00 PM.
              Stop by anytime for fresh coffee and pastries.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you offer non-dairy milk?</h3>
            <p>
              Yes! We offer oat, soy, and almond milk for all drinks.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I order online?</h3>
            <p>
              Yes. You can order from our website and pick up your order at the café.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you have Wi-Fi?</h3>
            <p>
              Absolutely! We offer free Wi-Fi so you can study, work, or relax with your coffee.
            </p>
          </div>

          <div className="faq-item">
            <h3>Where do your beans come from?</h3>
            <p>
              Our coffee beans are ethically sourced and roasted locally to ensure
              the best flavor and freshness.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}