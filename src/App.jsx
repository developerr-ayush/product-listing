import { useLayoutEffect, useState } from "react";
import { Cardlist } from "../components/card/Cardlist";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action";
import { setData } from "../redux/watches/watchesSlice";
import { Filter } from "../components/filter/Filter";
import { CardLoader } from "../components/card/CardLoader";
import { FilterLoader } from "../components/filter/FilterLoader";

function App() {
  const products = useSelector((state) => state.watches.watches);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      let data = await fetchData();
      dispatch(setData(data));
      setLoading(false);
    }
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="product-list">
        <FilterLoader />
        <CardLoader />
      </div>
    );
  }
  // if () {
  // }
  return (
    <div className="product-list">
      <Filter />
      {!!products.length && <Cardlist products={products} />}
    </div>
  );
}

export default App;
