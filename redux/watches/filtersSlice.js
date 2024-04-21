import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: [],
  priceRange: [],
  size: [],
  style: [],
  dialColor: [],
  strapColor: [],
  gender: [],
  availability: [],
  movementType: [],
  caseMaterial: [],
  purchaseYear: [],
  totalItems: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.brand.push(name);
      } else {
        const index = state.brand.indexOf(name);
        if (index > -1) {
          state.brand.splice(index, 1);
        }
      }
    },
    setPriceRangeFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.priceRange.push(name);
      } else {
        const index = state.priceRange.indexOf(name);
        if (index > -1) {
          state.priceRange.splice(index, 1);
        }
      }
      state.priceRange = state.priceRange.sort();
    },
    setDiscountPercentageFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.discountPercentage.push(name);
      } else {
        const index = state.discountPercentage.indexOf(name);
        if (index > -1) {
          state.discountPercentage.splice(index, 1);
        }
      }
    },
    setSizeFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.size.push(name);
      } else {
        const index = state.size.indexOf(name);
        if (index > -1) {
          state.size.splice(index, 1);
        }
      }
    },
    setStyleFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.style.push(name);
      } else {
        const index = state.style.indexOf(name);
        if (index > -1) {
          state.style.splice(index, 1);
        }
      }
    },
    setDialColorFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.dialColor.push(name);
      } else {
        const index = state.dialColor.indexOf(name);
        if (index > -1) {
          state.dialColor.splice(index, 1);
        }
      }
    },
    setStrapColorFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.strapColor.push(name);
      } else {
        const index = state.strapColor.indexOf(name);
        if (index > -1) {
          state.strapColor.splice(index, 1);
        }
      }
    },
    setGenderFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.gender.push(name);
      } else {
        const index = state.gender.indexOf(name);
        if (index > -1) {
          state.gender.splice(index, 1);
        }
      }
    },
    setAvailabilityFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.availability.push(name);
      } else {
        const index = state.availability.indexOf(name);
        if (index > -1) {
          state.availability.splice(index, 1);
        }
      }
    },
    setMovementTypeFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.movementType.push(name);
      } else {
        const index = state.movementType.indexOf(name);
        if (index > -1) {
          state.movementType.splice(index, 1);
        }
      }
    },
    setCaseMaterialFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.caseMaterial.push(name);
      } else {
        const index = state.caseMaterial.indexOf(name);
        if (index > -1) {
          state.caseMaterial.splice(index, 1);
        }
      }
    },
    setPurchaseYearFilter(state, action) {
      const { name, value } = action.payload;
      if (value) {
        state.purchaseYear.push(+name);
      } else {
        const index = state.purchaseYear.indexOf(name);
        if (index > -1) {
          state.purchaseYear.splice(index, 1);
        }
      }
    },
    reset(state) {
      state.brand = [];
      state.priceRange = { min: 0, max: Infinity };
      state.size = [];
      state.style = [];
      state.dialColor = [];
      state.strapColor = [];
      state.gender = [];
      state.availability = [];
      state.movementType = [];
      state.caseMaterial = [];
      state.purchaseYear = [];
    },
    setTotalItem(state, actions) {
      state.totalItems = actions.payload;
    },
  },
});

export const {
  setBrandFilter,
  setPriceRangeFilter,
  setDiscountPercentageFilter,
  setSizeFilter,
  setStyleFilter,
  setDialColorFilter,
  setStrapColorFilter,
  setGenderFilter,
  setAvailabilityFilter,
  setEMIAvailabilityFilter,
  setMovementTypeFilter,
  setCaseMaterialFilter,
  setPurchaseYearFilter,
  setTotalItem,
  reset,
} = filtersSlice.actions;

export default filtersSlice.reducer;
