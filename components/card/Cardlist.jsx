import PropTypes from "prop-types";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { filteredWatches } from "../../redux/action";

export const Cardlist = ({ products }) => {
  const filter = useSelector((state) => state.filters);
  if (!products) return null;
  const filteredProducts = filteredWatches(products, filter);
  return (
    <div className="card-list">
      {filteredProducts.map((product, index) => (
        <Card key={index} carddata={product} />
      ))}
    </div>
  );
};

Cardlist.propTypes = {
  products: PropTypes.array.isRequired,
};
