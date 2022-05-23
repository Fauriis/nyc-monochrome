export default function ProductTile01() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a href="" title="Monochrome"></a>
          <img src="/images/new-stuff/NEW_STUFF_02.png" alt="Monochrome"></img>
        </div>

        <div className="product-tile-badge">
          <a href="" title="Wishlist" className="cta">
            <span className="product-badge">
              <i className="fa-solid fa-heart"></i>
            </span>
          </a>
        </div>

        <div className="product-tile-heading">
          <h1>
            <a href="" title="Monochrome">
              <span>Monochrome</span>
            </a>
          </h1>
        </div>

        <div className="product-tile-pricing">
          <span className="product-price-regular">$425</span>
        </div>
      </header>
    </article>
  );
}
