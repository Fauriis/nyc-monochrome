export default function Header() {
  return (
    <header className="header">
      <section className="header-top">
        <section className="top-inner container">
          <div className="header-connect d-none d-sm-block">
            <ul>
              <li>
                <a
                  href="http://youtube.com"
                  target="_blank"
                  title="Youtube"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="tel:+44 (0)10 2345 6789"
                  className="span"
                  title="Call us"
                >
                  call us +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <form action="" className="d-none d-sm-block">
              <button type="button" className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <input
                type="text"
                title="Search"
                name="search"
                placeholder="Search"
              ></input>
            </form>

            <a title="Monochrome" className="span d-block d-lg-none">
              Monochrome
            </a>

            <ul>
              <li>
                <a href="" title="User">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li>
                <a href="" title="Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="" title="Cart">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="header-bottom">
        <nav className="nav-main d-none d-sm-block">
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
              <a href="" title="Mens">
                Men's
              </a>
            </li>

            <li>
              <a href="" title="Womens">
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

        <section className="menu-bar d-block d-sm-none">
          <nav className="nav-menu">
            <div className="menu-search">
              <a href="" title="menu">
                <i className="fa-solid fa-bars"></i>
              </a>

              <form action="">
                <input
                  type="text"
                  placeholder="Search"
                  name="search"
                  title="search"
                ></input>

                <button className="search" type="submit" title="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </nav>
        </section>
      </section>
    </header>
  );
}
