import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";

const initialFilterOptions = {
  categories: ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"],
  colors: ["Red", "Blue", "Green", "Black", "White"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  dressStyles: ["Casual", "Formal", "Sporty"],
};

const FilterBar = () => {
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(50); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(200); // Initial maximum price

  // Update filtered categories whenever search text or categories change
  useEffect(() => {
    const filtered = filterOptions.categories.filter((category) =>
      category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchText, filterOptions.categories]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Implement logic to handle slider change and update min/max price state
  const handleSliderChange = (event) => {
    setMinPrice(event.target.value);
  };

  // Define function to handle filter selection
  const handleFilterSelection = (selectedFilter) => {
    console.log("Selected Filter:", selectedFilter);
    // Add logic to handle the selected filter
  };

  return (
    <div className={styles.container}>
      <h1>Filters</h1>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.filterOptions}>
        <h2>Categories</h2>
        <ul>
          {filteredCategories.map((category) => (
            <li key={category} onClick={() => handleFilterSelection(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.priceRange}>
        <p>Price</p>
        <input
          type="range"
          min="50"
          max="200"
          value={minPrice} // Use the state variable for current minimum price
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <p>
          $<span id="minPrice">{minPrice}</span> - $
          <span id="maxPrice">{maxPrice}</span>
        </p>
      </div>
      <div className={styles.otherFilters}>
        <h2>Colors</h2>
        <ul>
          {filterOptions.colors.map((color) => (
            <li key={color} onClick={() => handleFilterSelection(color)}>
              {color}
            </li>
          ))}
        </ul>
        <h2>Sizes</h2>
        <ul>
          {filterOptions.sizes.map((size) => (
            <li key={size} onClick={() => handleFilterSelection(size)}>
              {size}
            </li>
          ))}
        </ul>
        <h2>Dress Style</h2>
        <ul>
          {filterOptions.dressStyles.map((style) => (
            <li key={style} onClick={() => handleFilterSelection(style)}>
              {style}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.button}>Apply Filter</button>
    </div>
  );
};

export default FilterBar;
