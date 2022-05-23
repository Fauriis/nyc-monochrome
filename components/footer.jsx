export default function Footer() {
  return (
    <footer className="footer d-none d-sm-block">
      <section className="footer-inner container">
        <section className="footer-contact">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                call us +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="Email us">
                Email customer care
              </a>
            </li>

            <li>
              <a href="" title="Mobile Version">
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <ul>
            <li>
              <a href="" title="style & fit advice">
                style & fit advice
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
              <a href="" title="exchanges & returns">
                exchanges & returns
              </a>
            </li>
          </ul>

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
        </nav>

        <section className="footer-connect">
          <div className="news">
            <form action="">
              <label htmlFor="newsletter" id="newsletter" name="newsletter">
                sign up for our newsletter
              </label>

              <input type="text" name="newsletter" id="newsletter"></input>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="social-media">
            <ul>
              <li>
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Urmareste-ne pe Youtube"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twiiter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Urmareste-ne pe Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Urmareste-ne pe Facebook"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Urmareste-ne pe Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
}
