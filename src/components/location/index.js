import React, { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import Location from "../../icons/location";
import PincodeData from "../../productData/pincode.json";
import image from "../../assets/images/loctionsearch.png";
import image1 from "../../assets/images/notfound.png";

const LocationData = () => {
  const [openDataBar, setOpenDataBar] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleToggle = () => {
    setOpenDataBar(!openDataBar);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterItems = (query) => {
    const filtered = PincodeData.filter((item) => item.code.includes(query));
    setFilteredItems(filtered);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedFilterItems = debounce(filterItems, 300);

  useEffect(() => {
    debouncedFilterItems(search);
  }, [search]);

  const handleItemClick = (item) => {
    setSelectedItem(`${item.code} : ${item.area}`);
    setOpenDataBar(false);
  };

  const clearInput = () => {
    setSearch(""); // Clear the input value
    setFilteredItems([]); // Reset the filtered items
  };

  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <div className={styles.delivery} onClick={handleToggle}>
          <div className={styles.icon}>
            <Location />
          </div>
          <div className={styles.d_address}>
            Deliver to <br /> <span>{selectedItem || "select location"}</span>
          </div>
        </div>
        {openDataBar && (
          <div className={styles.location_dropdown}>
            <div className={styles.ld_input}>
              <input
                type="text"
                placeholder="Enter pincode"
                value={search} // Bind input value to search state
                onChange={handleSearch}
              />
              <button onClick={clearInput}>X</button>
            </div>
            <div className={styles.location_list}>
              <div className={styles.ll_inner}>
                {search.length === 0 && (
                  <div className={styles.ll_empty}>
                    <img src={image} alt="search" />
                  </div>
                )}
                {filteredItems.length === 0 && search.length > 0 && (
                  <div className={styles.ll_empty}>
                    <img src={image1} alt="no results" />
                  </div>
                )}
                {filteredItems.length > 0 && search.length > 0 && (
                  <>
                    {filteredItems.map((item, index) => (
                      <div
                        className={styles.ll_item}
                        key={index}
                        onClick={() => handleItemClick(item)}>
                        {item.code} : {item.area}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LocationData;
