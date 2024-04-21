import { useDispatch } from "react-redux";
import { setSortBy } from "../../redux/watches/sortSlice";

export const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div className="sort-data">
      <p>Sort by: </p>
      <select
        name="sort"
        id=""
        defaultValue={"newest"}
        onChange={(e) => {
          dispatch(setSortBy(e.target.value));
        }}
      >
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="newest">Newest</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};
