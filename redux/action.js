const isRangeExist = (arr, min, max) => {
  let a = false;
  arr.forEach((e) => {
    if (e >= min && e <= max) {
      a = true;
    }
  });
  return a;
};
export const fetchData = async () => {
  try {
    const response = await fetch("/data/products.json");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// Function to check if all elements of arr2 are present in array
export const checkElements = (arr1, arr2) => {
  let a = false;
  arr1.forEach((arr) => {
    if (arr2.includes(arr)) {
      a = true;
    }
  });
  arr2.forEach((arr) => {
    if (arr1.includes(arr)) {
      a = true;
    }
  });
  return a;
};
export const filteredWatches = (watches, filters) => {
  // Filter watches based on each filter criteria
  return watches.filter((watch) => {
    let isMatching = true;
    if (filters.priceRange.length > 0) {
      const priceRanges = {
        "Under ₹10000": watch.discountedPrice <= 10000,
        "Under ₹20000": watch.discountedPrice < 20000,
        "₹25000 - ₹30000":
          watch.discountedPrice >= 25000 && watch.discountedPrice <= 30000,
        "₹35000 - ₹50000":
          watch.discountedPrice >= 35000 && watch.discountedPrice <= 50000,
        "₹50000 - ₹100000":
          watch.discountedPrice >= 50000 && watch.discountedPrice <= 100000,
        "Above ₹100000": watch.discountedPrice > 100000,
      };
      const isMatchingPriceRange = filters.priceRange.some(
        (range) => priceRanges[range]
      );
      if (!isMatchingPriceRange) {
        return false;
      }
    }
    // Filter by size
    if (filters.size.length > 0) {
      const sizeRanges = {
        "<17mm": isRangeExist(watch.size, 0, 16),
        "17 - 19mm": isRangeExist(watch.size, 17, 19),
        "20 - 22mm": isRangeExist(watch.size, 20, 22),
        "23 - 25mm": isRangeExist(watch.size, 23, 25),
        "26 - 28mm": isRangeExist(watch.size, 26, 28),
        "29 - 31mm": isRangeExist(watch.size, 29, 31),
        "32 - 34mm": isRangeExist(watch.size, 32, 34),
        "35 - 37mm": isRangeExist(watch.size, 35, 37),
        "38 - 40mm": isRangeExist(watch.size, 38, 40),
        "41 - 43mm": isRangeExist(watch.size, 41, 43),
        "44 - 46mm": isRangeExist(watch.size, 44, 46),
        "47 - 49mm": isRangeExist(watch.size, 47, 49),
        "<50mm": isRangeExist(watch.size, 50, 1000),
      };
      const isMatchingSizeRange = filters.size.some(
        (range) => sizeRanges[range]
      );
      if (!isMatchingSizeRange) {
        return false;
      }
    }
    const filterKeys = Object.keys(filters);
    for (const key of filterKeys) {
      if (key === "priceRange" || key === "size") {
        continue;
      }
      if (filters[key].length > 0) {
        if (!filters[key].includes(watch[key])) {
          isMatching = false;
        }
      }
    }
    // If the watch passes all filters, include it in the result
    return isMatching;
  });
};
export const sortedWatches = (watches, sortCriteria) => {
  // Destructure sort criteria from the sortCriteria object
  const { sortBy } = sortCriteria;

  // Sort watches based on the sort criteria
  return watches.sort((watch1, watch2) => {
    if (sortBy === "priceLowToHigh") {
      return watch1.discountedPrice - watch2.discountedPrice;
    }
    if (sortBy === "priceHighToLow") {
      return watch2.discountedPrice - watch1.discountedPrice;
    }
    if (sortBy === "discount") {
      return watch2.discountPercent - watch1.discountPercent;
    }
    if (sortBy === "newest") {
      return watch2.purchaseYear - watch1.purchaseYear;
    }

    return watches;
  });
};
export const getAvailableFilterOptions = (watches) => {
  const availableOptions = {
    brands: [],
    priceRanges: [
      "Under ₹10000",
      "Under ₹20000",
      "₹25000 - ₹30000",
      "₹35000 - ₹50000",
      "₹50000 - ₹100000",
      "Above ₹100000",
    ],
    sizes: [
      "<17mm",
      "17 - 19mm",
      "20 - 22mm",
      "23 - 25mm",
      "26 - 28mm",
      "29 - 31mm",
      "32 - 34mm",
      "35 - 37mm",
      "38 - 40mm",
      "41 - 43mm",
      "44 - 46mm",
      "47 - 49mm",
      "<50mm",
    ],
    styles: [],
    dialColors: [],
    strapColors: [],
    genders: [],
    availabilities: [],
    movementTypes: [],
    caseMaterials: [],
    purchaseYears: [],
  };

  // Iterate through watches data to collect available options for each filter
  watches.forEach((watch) => {
    // Collect unique brands
    if (!availableOptions.brands.includes(watch.brand)) {
      availableOptions.brands.push(watch.brand);
    }
    // Collect unique styles
    if (!availableOptions.styles.includes(watch.style)) {
      availableOptions.styles.push(watch.style);
    }
    // Collect unique dial colors
    if (!availableOptions.dialColors.includes(watch.dialColor)) {
      availableOptions.dialColors.push(watch.dialColor);
    }
    // Collect unique strap colors
    if (!availableOptions.strapColors.includes(watch.strapColor)) {
      availableOptions.strapColors.push(watch.strapColor);
    }
    // Collect unique genders
    if (!availableOptions.genders.includes(watch.gender)) {
      availableOptions.genders.push(watch.gender);
    }
    // Collect unique availabilities
    if (!availableOptions.availabilities.includes(watch.availability)) {
      availableOptions.availabilities.push(watch.availability);
    }
    // Collect unique movement types
    if (!availableOptions.movementTypes.includes(watch.movementType)) {
      availableOptions.movementTypes.push(watch.movementType);
    }
    // Collect unique case materials
    if (!availableOptions.caseMaterials.includes(watch.caseMaterial)) {
      availableOptions.caseMaterials.push(watch.caseMaterial);
    }
    // Collect unique purchase years
    if (!availableOptions.purchaseYears.includes(watch.purchaseYear)) {
      availableOptions.purchaseYears.push(watch.purchaseYear);
    }
  });
  return availableOptions;
};