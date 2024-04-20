import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const FilterItem = ({
  title,
  data,
  dispatcher,
  className,
  activeFilters,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768 ? true : false);
  const toggleOpen = () => setIsOpen(!isOpen);
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
          {data.sort().map((e, i) => {
            if (activeFilters && activeFilters.includes(e)) {
              return (
                <li key={i}>
                  <label htmlFor={e}>
                    <input
                      type="checkbox"
                      name={e}
                      id={e}
                      value={e}
                      checked
                      onChange={(e) => {
                        dispatch(
                          dispatcher({
                            name: e.target.name,
                            value: e.target.checked,
                          })
                        );
                      }}
                    />
                    {e}
                  </label>
                </li>
              );
            }
            return (
              <li key={i}>
                <label htmlFor={e}>
                  <input
                    type="checkbox"
                    name={e}
                    id={e}
                    onChange={(e) => {
                      dispatch(
                        dispatcher({
                          name: e.target.name,
                          value: e.target.checked,
                        })
                      );
                    }}
                  />
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
  activeFilters: PropTypes.array.isRequired,
};
