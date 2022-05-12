export default function Header() {
  return (
    <header className="header mt-0 mt-lg-4">
      <section className="header-secondary">
        <section className="header-inner container">
          <div className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a
                  href="http://youtube.com"
                  target="_blank"
                  title="Youtube"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789<" title="Call us">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <section className="user-controls">
              <form action="" className="d-none d-sm-block">
                <button className="search" type="submit" title="search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  name="search"
                  title="search"
                ></input>
              </form>

              <ul>
                <li>
                  <a className="d-lg-none" href="" title="Monochrome">
                    Monochrome
                  </a>
                </li>
                <li>
                  <a href="" title="User">
                    <i class="fa-solid fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="Wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Cart">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </section>

      <section className="header-primary">
        <section className="header-top-inner">
          <div className="header-search container d-block d-lg-none">
            <a href="" title="Menu">
              <i class="fa-solid fa-bars"></i>
            </a>

            <form action="">
              <input
                type="text"
                placeholder="Search"
                name="search"
                title="search"
              ></input>

              <button className="search" type="submit" title="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <nav className="nav-main d-none d-lg-block">
            <ul>
              <li>
                <a href="" title="New Arrivals">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="" title="Men's">
                  Men's
                </a>
              </li>

              <li>
                <a href="" title="Women's">
                  Women's
                </a>
              </li>

              <li>
                <a href="" title="Accessories">
                  Accessories
                </a>
              </li>

              <li>
                <a href="" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
  );
}
