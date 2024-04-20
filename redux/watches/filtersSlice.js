import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: [],
  priceRange: { min: 0, max: Infinity },
  size: [],
  style: [],
  dialColor: [],
  strapColor: [],
  gender: [],
  availability: [],
  movementType: [],
  caseMaterial: [],
  purchaseYear: [],
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
      const { min, max } = action.payload;
      state.priceRange = { min, max };
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
        state.size.push(+name);
      } else {
        const index = state.size.indexOf(+name);
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
  reset,
} = filtersSlice.actions;

export default filtersSlice.reducer;
