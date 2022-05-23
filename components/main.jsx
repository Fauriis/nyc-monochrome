import ProductTile from './catalog/_product-tile';
import ProductTile01 from './catalog/_product-tile_01';

export default function Main() {
  return (
    <main className="content">
      <header className="content-header d-block d-lg-none">
        <div className="banner-resp">
          <div className="banner-resp-inner container">
            <div className="banner-info">
              <a href="" title="New in" className="new">
                New in
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="content-main">
        <section className="home-catalog-preview container">
          <div className="border-top"></div>
          <header>
            <h1 className="section-title d-none d-sm-block">
              <span>New stuff</span>
              {}
            </h1>
            <h1 className="section-title d-block d-lg-none">
              <span>Spring Collection</span>
            </h1>
          </header>

          <section className="product-tiles d-flex flex-row gap-4">
            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="mb-05 mb-lg-0">
              <ProductTile01></ProductTile01>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>
          </section>

          <div className="border-top"></div>
          <header>
            <h1 className="section-title d-none d-sm-block">
              <span>Most loved</span>{' '}
            </h1>
            <h1 className="section-title d-block d-lg-none">
              <span>Best reviewed</span>
            </h1>
          </header>

          <section className="product-tiles d-flex flex-row gap-4">
            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>
          </section>
        </section>

        <section className="home-info">
          <div className="home-image">
            <img src="/images/main-content-img.png" alt="Home-image"></img>
          </div>

          <div className="info-text">
            <header>
              <h1>
                <span>Watches for entrepreneurs</span>
              </h1>
            </header>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because.
            </p>

            <p className="d-none d-sm-block">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because.
            </p>
          </div>
        </section>

        <section className="home-catalog-preview container">
          <div className="border-top"></div>
          <header>
            <h1 className="section-title">
              <span>Men's</span>
              {}
            </h1>
          </header>

          <section className="product-tiles d-flex flex-row gap-4">
            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>
          </section>

          <footer className="d-none d-sm-block">
            <a href="" title="View all" className="catalog-preview-cta">
              view all
            </a>
          </footer>

          <div className="border-top"></div>
          <header>
            <h1 className="section-title">
              <span>Women's</span>
              {}
            </h1>
          </header>

          <section className="product-tiles d-flex flex-row gap-4">
            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="mb-05 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>

            <div className="d-none d-sm-block">
              <ProductTile></ProductTile>
            </div>
          </section>

          <footer>
            <a href="" title="View all" className="catalog-preview-cta">
              view all
            </a>
          </footer>
        </section>
      </section>
    </main>
  );
}
