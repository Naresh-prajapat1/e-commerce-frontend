import React, { useState } from "react";
import styles from "./style.module.css";
import English from "../../assets/images/eng.png";
const DropDown = ({
  option,
  onSelect,
  keyName,
  placeHolder,
  country,
  language,
  logo,
  imgeng = English,
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);
  const handleSelect = () => {
    setOpen(!open);
  };
  const handleChange = (option) => {
    setSelect(option);
    onSelect(option);
    setOpen(false);
  };
  return (
    <div className={styles.dropdown}>
      <div className={styles.d_title} onClick={handleSelect}>
        {logo ? (
          <span>
            <img src={imgeng} />
          </span>
        ) : (
          ""
        )}

        {select ? select[keyName] : placeHolder}
      </div>
      {open && (
        <ul className={styles.d_dropmenu}>
          {country.map((option, i) => (
            <li
              onClick={() => {
                handleChange(option);
              }}
              key={i}>
              {option[keyName]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
