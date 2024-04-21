import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const FilterItem = ({
  title,
  data,
  dispatcher,
  className,
  activeFilters,
  type,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768 ? true : false);
  const toggleOpen = () => setIsOpen(!isOpen);
  if (data.length === 0) return null;
  return (
    <div
      className={
        "filter-item" +
        (isOpen ? " filter-item-active" : "") +
        (className ? " filter-item-" + className : "")
      }
    >
      <button className="filter-item-head" onClick={toggleOpen}>
        <p className="filter-item-text">{title}</p>
        <div className="filter-item-btn"></div>
      </button>
      <div className="filter-item-body">
        <ul>
          {data.map((e, i) => {
            return (
              <li key={i}>
                <label htmlFor={e}>
                  <input
                    type="checkbox"
                    name={e}
                    id={e}
                    checked={activeFilters && activeFilters.includes(e)}
                    onChange={(e) => {
                      dispatch(
                        dispatcher({
                          name: e.target.name,
                          value: e.target.checked,
                        })
                      );
                    }}
                  />
                  {type == "color" ? (
                    <span
                      className="color"
                      style={{
                        backgroundColor: e,
                      }}
                    ></span>
                  ) : (
                    ""
                  )}
                  {e}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  dispatcher: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  activeFilters: PropTypes.array,
};
