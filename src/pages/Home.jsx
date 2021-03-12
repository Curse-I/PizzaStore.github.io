import { Categories, LoadingBlock, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/reducers/actions/filters";
import { useCallback, useEffect } from "react";
import { fetchPizzas } from "../redux/reducers/actions/pizzas";
import { addPizza } from "../redux/reducers/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch, sortBy, category]);
  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );
  const handlePizzaAdd = (obj) => {
    dispatch(addPizza(obj));
  };
  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onCategoryClick={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onSortTypeClick={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
                onPizzaAdd={handlePizzaAdd}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              />
            ))
          : Array(9)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
