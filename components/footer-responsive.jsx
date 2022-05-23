export default function FooterResponsive() {
  return (
    <footer className="footer-responsive d-block d-lg-none">
      <footer className="responsive container">
        <section className="footer-newsletter">
          <h1>Let`s connect</h1>
          <p>Be the first to receive exclusives offers</p>
          <form action="">
            <input
              type="email"
              name="newsletter"
              id="newsletter"
              placeholder="email"
            ></input>
          </form>

          <button type="submit" title="Trimite">
            submit
          </button>
          <p>
            I agree with{}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            {}
            and i want to receive emails from Monochrome
          </p>
        </section>

        <section className="footer-social">
          <h1>We are highly likeable</h1>

          <ul>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-resp-nav">
          <header>
            <h1>How can we help?</h1>
          </header>
          <nav className="nav-resp">
            <ul>
              <li>
                <a href="" title="about us">
                  about us
                </a>
              </li>

              <li>
                <a href="" title="careers">
                  careers
                </a>
              </li>

              <li>
                <a href="" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="" title="advertising">
                  advertising
                </a>
              </li>
            </ul>

            <div className="line"></div>

            <ul>
              <li>
                <a href="" title="style and fit">
                  style and fit
                </a>
              </li>

              <li>
                <a href="" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="" title="delivery">
                  delivery
                </a>
              </li>

              <li>
                <a href="" title="returns">
                  returns
                </a>
              </li>
            </ul>
          </nav>

          <div className="conditions">
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  terms & conditions
                </a>
              </li>

              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  privacy & cookies
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </footer>
  );
}
