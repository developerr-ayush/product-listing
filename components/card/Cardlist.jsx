import PropTypes from "prop-types";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { filteredWatches, sortedWatches } from "../../redux/action";
import { Sort } from "../filter/Sort";
import { setTotalItem } from "../../redux/watches/filtersSlice";
import { Fragment } from "react";

export const Cardlist = ({ products }) => {
  const filter = useSelector((state) => state.filters);
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const filteredProducts = filteredWatches(products, filter);
  const sortData = sortedWatches(filteredProducts, sort);
  let showBanner = [6, 12];
  dispatch(setTotalItem(sortData.length));
  return (
    <div className="card-list">
      <div className="card-ad-banner">
        <a href="">
          <img loading="lazy" src="/img/banner-full-width.png" alt="" />
        </a>
      </div>

      {!filter.totalItems ? (
        <div className="no-data">
          <p>No Data Found</p>
          <p>Please try adjusting your filter</p>
        </div>
      ) : (
        <>
          <Sort />
          {sortData.map((product, index) => {
            if (showBanner.includes(index + 1)) {
              return (
                <Fragment key={index}>
                  <div className="card-list-ad">
                    <img
                      loading="lazy"
                      src="/img/ad-banner.png"
                      alt="ad banner"
                    />
                  </div>
                  <Card key={index} carddata={product} />
                </Fragment>
              );
            }
            return <Card key={index} carddata={product} />;
          })}
        </>
      )}
    </div>
  );
};

Cardlist.propTypes = {
  products: PropTypes.array.isRequired,
};
