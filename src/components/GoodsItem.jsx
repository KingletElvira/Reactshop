import { Link } from "react-router";

export function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
  addToBasket,
}) {
  const backgroundImage = displayAssets.lendth
    ? displayAssets[0].full_background
    : displayName;
  
  return (
    <div className="card">
      <Link to={`/products/${mainId}`} className="card-link">
        <div className="card-image">
          <img src={backgroundImage} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>      
      </Link>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId, displayName, price
            })
          }
        >
          Купить
        </button>
        <span className="right">{price.finalPrice}</span>
      </div>
    </div>
  );
}