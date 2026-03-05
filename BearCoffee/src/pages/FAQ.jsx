import Header from '../components/Header'

export function FAQ() {
    return (
        <>
            <Header />

            <div className="faq-container">
                <h2>Frequently Asked Questions</h2>

                <div className="faq-item">
                    <h3>What are your opening hours?</h3>
                    <p>
                        Bear Coffee is open Monday to Sunday from 7:00 AM to 6:00 PM.
                        Stop by anytime for fresh coffee, pastries, and a cozy atmosphere.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Do you offer non-dairy milk options?</h3>
                    <p>
                        Yes! We offer soy, oat, and almond milk for all of our drinks.
                        Just let our baristas know your preference when ordering.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Can I order coffee online?</h3>
                    <p>
                        Yes! You can order through our website and pick up your drinks and pastries
                        directly at the café.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Do you have vegetarian or vegan options?</h3>
                    <p>
                        Absolutely. Many of our drinks can be made vegan with plant-based milk,
                        and we offer vegetarian pastries and snacks as well.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Where do you source your coffee beans?</h3>
                    <p>
                        Our beans are sourced from sustainable farms and roasted locally to ensure
                        freshness and quality in every cup.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Is there Wi-Fi available at the café?</h3>
                    <p>
                        Yes! We provide free Wi-Fi for all our customers, making Bear Coffee
                        a perfect place to study, work, or relax.
                    </p>
                </div>

                <div className="faq-item">
                    <h3>Do you offer seasonal drinks?</h3>
                    <p>
                        Yes! We regularly introduce seasonal specials like pumpkin spice lattes,
                        iced summer drinks, and holiday favorites.
                    </p>
                </div>

            </div>
        </>
    )
}