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
const checkElements = (arr1, arr2) => {
  for (const element of arr2) {
    if (!arr1.includes(element)) {
      return false;
    }
  }
  return true;
};

export const filteredWatches = (watches, filters) => {
  // Destructure filter criteria from the filters object
  const {
    brand,
    priceRange,
    size,
    style,
    dialColor,
    strapColor,
    gender,
    availability,
    movementType,
    caseMaterial,
    purchaseYear,
  } = filters;

  // Filter watches based on each filter criteria
  return watches.filter((watch) => {
    // Filter by brand
    if (brand.length > 0 && !brand.includes(watch.brand)) {
      return false;
    }
    // Filter by price range
    if (
      watch.discountedPrice < priceRange.min ||
      watch.discountedPrice > priceRange.max
    ) {
      return false;
    }
    // Filter by size
    const allElementsPresent = checkElements(size, watch.size);
    if (allElementsPresent) {
      return false;
    }
    // Filter by style
    if (style.length > 0 && !style.includes(watch.style)) {
      return false;
    }
    // Filter by dial color
    if (dialColor.length > 0 && !dialColor.includes(watch.dialColor)) {
      return false;
    }
    // Filter by strap color
    if (strapColor.length > 0 && !strapColor.includes(watch.strapColor)) {
      return false;
    }
    // Filter by gender
    if (gender.length > 0 && !gender.includes(watch.gender)) {
      return false;
    }
    // Filter by availability
    if (availability.length > 0 && !availability.includes(watch.availability)) {
      return false;
    }

    // Filter by movement type
    if (movementType.length > 0 && !movementType.includes(watch.movementType)) {
      return false;
    }
    // Filter by case material
    if (caseMaterial.length > 0 && !caseMaterial.includes(watch.caseMaterial)) {
      return false;
    }
    // Filter by purchase year
    if (purchaseYear.length > 0 && !purchaseYear.includes(watch.purchaseYear)) {
      return false;
    }
    // If the watch passes all filters, include it in the result
    return true;
  });
};
export const getAvailableFilterOptions = (watches) => {
  const availableOptions = {
    brands: [],
    priceRanges: [],
    sizes: [],
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
    // Collect unique price ranges
    const priceRangeKey = `${watch.price.min}-${watch.price.max}`;
    if (
      !availableOptions.priceRanges.some((range) => range === priceRangeKey)
    ) {
      availableOptions.priceRanges.push(priceRangeKey);
    }

    // Collect unique sizes
    watch.size.forEach((size) => {
      if (!availableOptions.sizes.includes(size)) {
        availableOptions.sizes.push(size);
      }
    });
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
