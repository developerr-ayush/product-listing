import PropTypes from "prop-types";

export const CardData = ({
  brand,
  title,
  price,
  discountPercent,
  discountedPrice,
  size,
}) => {
  return (
    <div className="card-data">
      <h4 className="card-brand">{brand}</h4>
      <h3 className="card-title">{title}</h3>
      <div className="card-data-price">
        <p className="card-price-wrap">
          <span className="card-price">
            {discountedPrice.toLocaleString("EN-IN", {
              style: "currency",
              currency: "INR",
            })}
          </span>
          {!!discountPercent && (
            <span className="card-discount-percent">
              {discountPercent}% Off
            </span>
          )}
        </p>
        {!!price && (
          <p className="card-discount-price">
            {price.toLocaleString("EN-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        )}
      </div>
      <div className="card-sizes">
        <p className="text">Available In</p>
        {size.length == 1 ? (
          <p>One Size</p>
        ) : (
          <ul>
            {size.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
CardData.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercent: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  size: PropTypes.array.isRequired,
};
