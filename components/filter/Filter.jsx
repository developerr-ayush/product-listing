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
  const availableFilters = getAvailableFilterOptions(watches);
  const filters = useSelector((state) => state.filters);
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
          <FilterItem
            data={sizes}
            title="Size"
            dispatcher={setSizeFilter}
            className="size"
            activeFilters={filters.size}
          />
        )}
        {!!availabilities && (
          <FilterItem
            data={availabilities}
            title="Availability"
            dispatcher={setAvailabilityFilter}
            activeFilters={filters.availability}
          />
        )}
        {!!genders && (
          <FilterItem
            data={genders}
            title="Gender"
            dispatcher={setGenderFilter}
            activeFilters={filters.gender}
          />
        )}
        {!!brands && (
          <FilterItem
            data={brands}
            title="Brands"
            dispatcher={setBrandFilter}
            activeFilters={filters.brand}
          />
        )}
        {!!priceRanges && <FilterItem data={priceRanges} title="Price" />}

        {!!dialColors && (
          <FilterItem
            data={dialColors}
            title="Dial Color"
            dispatcher={setDialColorFilter}
            activeFilters={filters.dialColor}
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
            activeFilters={filters.strapColor}
          />
        )}

        {!!movementTypes && (
          <FilterItem
            data={movementTypes}
            title="Movement Type"
            dispatcher={setMovementTypeFilter}
            activeFilters={filters.movementType}
          />
        )}
        {!!caseMaterials && (
          <FilterItem
            data={caseMaterials}
            title="Case Material"
            dispatcher={setCaseMaterialFilter}
            activeFilters={filters.caseMaterial}
          />
        )}

        {!!purchaseYears && (
          <FilterItem
            data={purchaseYears}
            title="Purchase Year"
            dispatcher={setPurchaseYearFilter}
            activeFilters={filters.purchaseYear}
          />
        )}
      </div>
    </div>
  );
};
