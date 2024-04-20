import { useEffect } from "react";
import { Cardlist } from "../components/card/Cardlist";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action";
import { setData } from "../redux/watches/watchesSlice";
import { Filter } from "../components/filter/Filter";

function App() {
  const products = useSelector((state) => state.watches.watches);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    async function fetchProducts() {
      let data = await fetchData();
      dispatch(setData(data));
    }
    fetchProducts();
  }, []);
  return (
    <div className="product-list">
      <Filter />
      {!!products.length && <Cardlist products={products} />}
    </div>
  );
}

export default App;
