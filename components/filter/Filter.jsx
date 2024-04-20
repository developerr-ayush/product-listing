import { useSelector } from "react-redux";
import { getAvailableFilterOptions } from "../../redux/action";
import { LuListFilter } from "react-icons/lu";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FilterItem } from "./FilterItem";
import {
  setAvailabilityFilter,
  setBrandFilter,
  setCaseMaterialFilter,
  setDialColorFilter,
  setGenderFilter,
  setMovementTypeFilter,
  setPurchaseYearFilter,
  setSizeFilter,
  setStrapColorFilter,
  setStyleFilter,
} from "../../redux/watches/filtersSlice";
export const Filter = () => {
  const [filterActive, setFilterActive] = useState(false);
  const watches = useSelector((state) => state.watches.watches);
  //   const filter = useSelector((state) => state.filters);
  const availableFilters = getAvailableFilterOptions(watches);
  console.log(availableFilters);
  let {
    brands,
    priceRanges,
    availabilities,
    caseMaterials,
    dialColors,
    genders,
    movementTypes,
    purchaseYears,
    sizes,
    strapColors,
    styles,
  } = availableFilters;

  return (
    <div className={"filter" + (filterActive ? " filter-active" : "")}>
      <div className="filter-head">
        <p>
          <LuListFilter />
          Filter
        </p>
        <button>Clear All</button>
      </div>
      <button className="filter-btn" onClick={() => setFilterActive(true)}>
        <LuListFilter />
        Filter
      </button>
      <div className="filter-section">
        <button className="filter-close" onClick={() => setFilterActive(false)}>
          <CgClose size="25" />
        </button>

        {!!sizes && (
          <FilterItem data={sizes} title="Size" dispatcher={setSizeFilter} />
        )}
        {!!availabilities && (
          <FilterItem
            data={availabilities}
            title="Availability"
            dispatcher={setAvailabilityFilter}
          />
        )}
        {!!genders && (
          <FilterItem
            data={genders}
            title="Gender"
            dispatcher={setGenderFilter}
          />
        )}
        {!!brands && (
          <FilterItem
            data={brands}
            title="Brands"
            dispatcher={setBrandFilter}
          />
        )}
        {!!priceRanges && <FilterItem data={priceRanges} title="Price" />}

        {!!dialColors && (
          <FilterItem
            data={dialColors}
            title="Dial Color"
            dispatcher={setDialColorFilter}
          />
        )}
        {!!styles && (
          <FilterItem data={styles} title="Style" dispatcher={setStyleFilter} />
        )}
        {!!strapColors && (
          <FilterItem
            data={strapColors}
            title="Strap Color"
            dispatcher={setStrapColorFilter}
          />
        )}

        {!!movementTypes && (
          <FilterItem
            data={movementTypes}
            title="Movement Type"
            dispatcher={setMovementTypeFilter}
          />
        )}
        {!!caseMaterials && (
          <FilterItem
            data={caseMaterials}
            title="Case Material"
            dispatcher={setCaseMaterialFilter}
          />
        )}

        {!!purchaseYears && (
          <FilterItem
            data={purchaseYears}
            title="Purchase Year"
            dispatcher={setPurchaseYearFilter}
          />
        )}
      </div>
    </div>
  );
};
