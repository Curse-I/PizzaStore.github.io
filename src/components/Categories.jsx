import { memo } from "react";
import PropTypes from "prop-types";

const Categories = memo(({ activeCategory, items, onCategoryClick }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onCategoryClick(null)}
        >
          Все
        </li>
        {items?.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onCategoryClick(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});
Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func,
};
Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
