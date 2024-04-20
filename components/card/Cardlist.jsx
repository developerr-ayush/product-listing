import PropTypes from "prop-types";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { filteredWatches } from "../../redux/action";

export const Cardlist = ({ products }) => {
  const filter = useSelector((state) => state.filters);
  if (!products) return null;
  const filteredProducts = filteredWatches(products, filter);
  let showBanner = [6, 12];
  console.log(filteredProducts);
  return (
    <div className="card-list">
      {filteredProducts.map((product, index) => {
        if (showBanner.includes(index + 1)) {
          return (
            <>
              <div className="card-list-ad">
                <img src="/img/ad-banner.png" alt="ad banner" />
              </div>
              <Card key={index} carddata={product} />
            </>
          );
        }
        return <Card key={index} carddata={product} />;
      })}
    </div>
  );
};

Cardlist.propTypes = {
  products: PropTypes.array.isRequired,
};
